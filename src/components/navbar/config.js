const defaultHeaderProps = {
	title: 'Sign Out',
	icon: 'ExitToApp',
  variant: 'h6'
};

export const adminHeaderProps = [
  {
    title: 'Manage Data',
    icon: 'Dashboard',
		variant: 'title'
  }, {
		title: 'Manage Parking',
		icon: 'DirectionsCar',
		variant: 'title'
  }, {
		title: 'Mass Manage',
		icon: 'Widgets',
		variant: 'h6'
  }, {
    ...defaultHeaderProps
  }
];
