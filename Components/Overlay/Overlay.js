const Overlay = (props) => {
  return (
    <div
      className="h-screen w-full fixed inset-0 z-10 bg-black bg-opacity-50 overscroll-none"
      onClick={props.onClickHandler}
    ></div>
  );
};

export default Overlay;
