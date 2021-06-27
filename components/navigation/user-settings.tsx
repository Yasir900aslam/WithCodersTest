import React from "react";
import { Popover, Link } from "@geist-ui/react";

const UserSettings: React.FC = () => (
  <>
    <Popover.Item title>
      <span>User Settings</span>
    </Popover.Item>
    
    <Popover.Item>
      <Link href="#">Logout</Link>
    </Popover.Item>
  </>
);

export default UserSettings;
