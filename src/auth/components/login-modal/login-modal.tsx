import React, { ReactNode, useEffect, useRef, useState} from 'react';

interface Props {
  children: (toggleModal: () => void, isAuth: boolean) => ReactNode;
}
export const LoginModal: React.FC<Props> = ({children}) => {
  const isAuth = false;
  const [isOpened, setIsOpened] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null)

  const toggleModal = () => {
    setIsOpened(!isOpened);
  }

  useEffect(() => {
    if (dialogRef.current?.open && !isOpened) {
      dialogRef.current?.close()
    } else if (!dialogRef.current?.open && isOpened) {
      dialogRef.current?.showModal()
    }
  }, [isOpened])
  return (
    <React.Fragment>
      {children(toggleModal, isAuth)}
      <dialog ref={dialogRef} className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={toggleModal}>
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg text-center">Log in</h3>
          <p className='text-center text-gray-600 mb-4'>Login through suitable provider</p>
          <button className='border rounded w-9/12 mx-auto flex items-center justify-center p-1 hover:bg-gray-200 transition-all'>
            <img className='w-8 h-8 mr-4' src="/auth/sign-in-google.png" alt="Google login logo"/>
            <span>Continue with Google</span>
          </button>
        </div>
      </dialog>
    </React.Fragment>
  );
};
