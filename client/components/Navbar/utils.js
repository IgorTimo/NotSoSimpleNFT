export const getNavItemActiveClassName = (activePage, link) => {
  const navItemActiveClassName =
    'bg-purpleLigth border-r-[5px] border-purplePrimary'
  return activePage === link ? navItemActiveClassName : ''
}
