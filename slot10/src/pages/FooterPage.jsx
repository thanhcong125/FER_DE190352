import MyFooter from "../components/Footer/MyFooter";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function FooterPage() {
  return (
    <div className="footer">
      <h2 style={{ textAlign: "center" }}>Movie Footer</h2>
      <MyFooter
        author="Congdvt"
        email="congdvt119214@gmail.com"
        linkGithub="Movie Management Project"
      />
    </div>
  );
}
