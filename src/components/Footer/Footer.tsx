// import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__inner container-boxed">
        <p className="footer__copyright">Copyright &copy;{(new Date().getFullYear())} | Vårt Zoo, all rights reserved</p>
      </div>
    </footer>
  );
};