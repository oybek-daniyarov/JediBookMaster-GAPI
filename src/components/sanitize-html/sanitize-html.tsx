import DOMPurify from "dompurify";
import { FC } from "react";

type Props = {
  html?: string;
};
const SanitizeHtml: FC<Props> = ({ html }) => {
  return html ? (
    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} />
  ) : null;
};

export { SanitizeHtml };
