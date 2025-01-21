import Switch from "react-switch";

// import styles from "./Switch.module.css";

const MySwitch = ({ onChange, children, ...props }) => {
  return (
    <label style={{ marginRight: "10px" }}>
      <Switch
        width={48}
        height={28}
        onColor="#F6AC12"
        offColor="#D4D4D4"
        handleDiameter={24}
        borderRadius={40}
        uncheckedIcon={false}
        checkedIcon={false}
        onChange={onChange}
        {...props}
      />
    </label>
  );
};

export default MySwitch;
