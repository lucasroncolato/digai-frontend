import { Link } from "react-router-dom";
import digaiLogo from "/digai-logo.svg";

export default function NavHeader() {
  return (
    <>
      <header className="">
        <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
          <Link
            to="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0 leading-none"
          >
            <img
              src={digaiLogo}
              className="logo h-16 mr-6 rounded-full"
              alt="Digai logo"
            />
          </Link>

          <nav className="md:ml-auto gap-8 flex flex-wrap h-12 items-center text-base justify-center">
            <Link
              to={`/interview-setup/questionID`}
              className="hover:text-gray-900"
            >
              Preparação
            </Link>
            <Link to={`/interview/questionID`} className="hover:text-gray-900">
              Entrevista
            </Link>
            <Link
              to={`/interview-after/questionID`}
              className="hover:text-gray-900"
            >
              Respostas
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}
