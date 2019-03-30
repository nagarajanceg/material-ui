export const defaultHeaderProps = {
	title: 'Sign Out',
	icon: 'ExitToApp',
  variant: 'h6',
	id: 'signOut'
};

export const adminHeaderProps = [
  {
    title: 'Manage Data',
    icon: 'Dashboard',
		variant: 'h6',
		id: 'manageData'
  }, {
		title: 'Manage Parking',
		icon: 'DirectionsCar',
		variant: 'h6',
		id: 'manageParking'
  }, {
		title: 'Mass Manage',
		icon: 'Widgets',
		variant: 'h6',
		id: 'massManage'
  }, {
    ...defaultHeaderProps
  }
];

export const statusValues = ['All', 'Available', 'Busy', 'Release', 'Assign'];
export const openStatus = ['AVAILABLE', 'ASSIGN'];
