import React from "react";
import { Menu as CustomMenu } from "@hbsis.uikit/react";
import Proptype from "prop-types";

export const findMenuByKey = (key, menus) => {
  const search = menus.filter(menu => menu.key === key);
  return search.length > 0 ? search[0] : {};
};

export const findMenuByPath = (path, menus) => {
  const search = menus.filter(menu => menu.path === path);
  return search.length > 0 ? search[0] : {};
};

const Menu = ({ menuOptions, onClickMenu, menus }) => {
  const _clickMenu = item => {
    const _item = findMenuByKey(item.key, menus);
    onClickMenu && onClickMenu({ ...item, ..._item });
  };

  return <CustomMenu {...menuOptions} onChoose={_clickMenu} />;
};

Menu.propTypes = {
  menus: Proptype.arrayOf(
    Proptype.shape({
      key: Proptype.string.isRequired,
      path: Proptype.string.isRequired,
      icon: Proptype.string,
      label: Proptype.string.isRequired
    })
  ).isRequired
};

Menu.defaultProps = {
  menuOptions: {},
  onClickMenu: () => {}
};

export { Menu };
