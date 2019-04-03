export const defaultHeaderProps = {};
export const signOutProps = {
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
  },
  {
    title: 'Manage Parking',
    icon: 'DirectionsCar',
    variant: 'h6',
    id: 'manageParking'
  },
  {
    title: 'Mass Manage',
    icon: 'Widgets',
    variant: 'h6',
    id: 'massManage'
  },
  {
    ...signOutProps
  }
];
export const ownerProps = [
  {
    title: 'Owner',
    icon: 'AccountCircle',
    variant: 'h6',
    id: 'owner'
  },
  {
    ...signOutProps
  }
];
export const userProps = [
  {
    title: 'User',
    icon: 'AccountCircle',
    variant: 'h6',
    id: 'User'
  },
  {
    title: 'Booking',
    icon: 'Assignment',
    variant: 'h6',
    id: 'Booking',
    dropdown: ['Current Booking', 'Past Booking']
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

export const statusValues = ['All', 'Available', 'Busy', 'Release', 'Assign'];
export const openStatus = ['AVAILABLE', 'ASSIGN', 'RELEASE'];
export const statusMapper = {
  ASSIGN: 'Release',
  RELEASE: 'Busy'
};
