import { FaCheck } from "react-icons/fa6";
import { MdError } from "react-icons/md";

type Props = {
  error: boolean;
  errorMessage: string;
  loading: boolean;
  success: boolean;
};
const FormModal = ({ error, errorMessage, loading, success }: Props) => {
  return (
    <span className="fixed bottom-6 right-6 z-10 flex w-fit items-center gap-2 rounded-md bg-blue-rgb p-2">
      {loading && (
        <div
          className="text-surface inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
          role="status"
        ></div>
      )}
      {success && <FaCheck />}
      {error && <MdError />}
      {loading && !error && !success ? <p>Envoi en cours</p> : ""}
      {error && <p>{errorMessage}</p>}
      {success && <p>Formulaire envoyé</p>}
    </span>
  );
};

export default FormModal;
