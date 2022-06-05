export const getNavItemActiveClassName = (activePage, link) => {
  const navItemActiveClassName =
    'bg-purpleLigth dark:bg-darkPurplePrimary border-r-[5px] border-purplePrimary dark:border-darkPurpleLight'
  return activePage === link ? navItemActiveClassName : ''
}
