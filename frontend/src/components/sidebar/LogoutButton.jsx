import { CiLogout } from "react-icons/ci";
import { useLogout } from "../../hooks/useLogout";

const LogoutButton = () => {
  const { loading, logout } = useLogout();
  return (
    <div className="mt-auto">
      {!loading ? (
        <>
          <CiLogout
            className="w-6 h-6 cursor-pointer text-white"
            onClick={() => document.getElementById("my_modal_1").showModal()}
          />
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Logout!</h3>
              <p className="py-4">Are you sure you are logged out?</p>
              <div className="modal-action">
                <button className="btn btn-primary" onClick={logout}>
                  Logout
                </button>
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </>
      ) : (
        <div className="loading loading-spinner" />
      )}
    </div>
  );
};

export default LogoutButton;
