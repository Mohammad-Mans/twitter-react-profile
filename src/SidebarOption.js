import "./SidebarOption.css";

function SidebarOption({ text, Icon }) {
  return (
    <div className="sidebar-option">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOption;
