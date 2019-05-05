export const defaultHeaderProps = {};
export const signOutProps = {
  title: 'sign_out',
  icon: 'ExitToApp',
  variant: 'h6',
  id: 'signOut'
};

export const adminHeaderProps = [
  {
    title: 'manage_data',
    icon: 'Dashboard',
    variant: 'h6',
    id: 'manageData'
  },
  {
    title: 'manage_parking',
    icon: 'DirectionsCar',
    variant: 'h6',
    id: 'manageParking'
  },
  {
    title: 'mass_manage',
    icon: 'Widgets',
    variant: 'h6',
    id: 'massManage'
  },
  {
    title: 'report',
    icon: 'Assignment',
    variant: 'h6',
    id: 'report'
  },
  {
    ...signOutProps
  }
];
export const ownerProps = [
  {
    title: 'owner',
    icon: 'AccountCircle',
    variant: 'h6',
    id: 'owner',
  },
	{
		title: 'Booking',
		icon: 'Assignment',
		variant: 'h6',
		id: 'Booking',
    type: 'dropdown',
		options: ['Current Booking', 'Past Booking']
	},
  {
    ...signOutProps
  }
];
export const userProps = [
  {
    title: 'user',
    icon: 'AccountCircle',
    variant: 'h6',
    id: 'User'
  },
  {
		title: 'Booking',
		icon: 'Assignment',
		variant: 'h6',
		id: 'Booking',
		type: 'dropdown',
		options: ['Current Booking', 'Past Booking']
  },
  {
    ...signOutProps
  }
];
export const getMenu = component => {
  switch (component) {
    case 'owner':
      return ownerProps;
    case 'user':
      return userProps;
    default:
      return adminHeaderProps;
  }
};

export const statusValues = ['all', 'available', 'busy', 'release', 'assign'];
export const openStatus = ['AVAILABLE', 'ASSIGN', 'RELEASE'];
export const statusMapper = {
  ASSIGN: 'Release',
  RELEASE: 'Busy'
};
export const reportTypes = ['User Data', 'Transactions'];
