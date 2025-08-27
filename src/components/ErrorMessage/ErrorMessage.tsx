import './ErrorMessage.scss';

export type ErrorMessageProps = {
  message: string;
  linkText?: string;
  linkUrl?: string;
}

export const ErrorMessage = ({
  message,
  linkText = "Gå tillbaka till startsidan",
  linkUrl = "/"
}: ErrorMessageProps) => {
  return (
    <section className="error">
      <div className="error__container">
        <p className="error__message">{message}</p>
        <a href={linkUrl} className="error__go-back">{linkText}</a>
      </div>
    </section>
  );
};