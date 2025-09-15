import Sidebar from "../../../components/Sidebar";
import MainLayout from "../../../layout/Layout";
import menus from "../../../data/MenusData";

const ProfileIndex = () => {
  const menuItems = menus.find((menu) => menu.key === "profile")?.children;
  return (
    <MainLayout menuItems={menuItems}>
      <h1>Profile</h1>
    </MainLayout>
  );
};

export default ProfileIndex;
