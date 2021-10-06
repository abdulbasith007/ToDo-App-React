function Header(props) {
  return (
    <>
    <h1>
    Header : {props.websiteName}
    </h1>
    <button onClick={(e)=>props.showAddTaskForm()}>Add Task</button>
    </>
  );
}

Header.defaultProps={
    websiteName : "My practice project"
  }

export default Header;
