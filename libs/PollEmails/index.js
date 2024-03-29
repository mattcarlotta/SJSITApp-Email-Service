import mailer from "@sendgrid/mail";
import isEmpty from "lodash/isEmpty";
import { mailLogger } from "loggers";
import { Mail } from "models";
import { officialTemplate } from "templates";
import { endOfDay } from "shared/helpers";

const { IMAGEAPI } = process.env;

export default async () => {
  const emails = await Mail.aggregate([
    {
      $match: {
        sendDate: {
          // $gte: startOfDay(),
          $lte: endOfDay(),
        },
        status: "unsent",
      },
    },
    { $sort: { sendDate: -1 } },
  ]);

  /* istanbul ignore next */
  if (!isEmpty(emails)) {
    for (let i = 0; i < emails.length; i += 1) {
      const existingMail = emails[i];
      const {
        _id, message, sendFrom, sendTo, subject,
      } = existingMail;

      try {
        await mailer.send({
          to: sendTo,
          from: sendFrom,
          subject,
          html: officialTemplate(IMAGEAPI, message),
        });

        await Mail.updateOne({ _id }, { status: "sent" });
      } catch (err) {
        await Mail.updateOne({ _id }, { status: `failed - ${err.message}` });
      }
    }
  }

  console.log(mailLogger(emails));
};
