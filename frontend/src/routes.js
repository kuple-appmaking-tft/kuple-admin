import React from 'react';

const Toaster = React.lazy(() => import('./views/notifications/toaster/Toaster'));
const Tables = React.lazy(() => import('./views/base/tables/Tables'));

const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'));
const Cards = React.lazy(() => import('./views/base/cards/Cards'));
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'));
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'));
const BasicForms = React.lazy(() => import('./views/base/forms/BasicForms'));

const Jumbotrons = React.lazy(() => import('./views/base/jumbotrons/Jumbotrons'));
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'));
const Navbars = React.lazy(() => import('./views/base/navbars/Navbars'));
const Navs = React.lazy(() => import('./views/base/navs/Navs'));
const Paginations = React.lazy(() => import('./views/base/paginations/Pagnations'));
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'));
const ProgressBar = React.lazy(() => import('./views/base/progress-bar/ProgressBar'));
const Switches = React.lazy(() => import('./views/base/switches/Switches'));

const Tabs = React.lazy(() => import('./views/base/tabs/Tabs'));
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'));
const BrandButtons = React.lazy(() => import('./views/buttons/brand-buttons/BrandButtons'));
const ButtonDropdowns = React.lazy(() => import('./views/buttons/button-dropdowns/ButtonDropdowns'));
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'));
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'));
const Charts = React.lazy(() => import('./views/charts/Charts'));
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'));
const Flags = React.lazy(() => import('./views/icons/flags/Flags'));
const Brands = React.lazy(() => import('./views/icons/brands/Brands'));
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'));
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'));
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'));
const Colors = React.lazy(() => import('./views/theme/colors/Colors'));
const Typography = React.lazy(() => import('./views/theme/typography/Typography'));
const Widgets = React.lazy(() => import('./views/widgets/Widgets'));

const Groups = React.lazy(() => import('./views/boards/Groups'));
const GroupsAdmin = React.lazy(() => import('./views/boards/GroupsAdmin'));
const Normals = React.lazy(() => import('./views/boards/Normals'));
const NormalsAdmin = React.lazy(() => import('./views/boards/NormalsAdmin'));
const Photos = React.lazy(() => import('./views/boards/Photos'));
const PhotosAdmin = React.lazy(() => import('./views/boards/PhotosAdmin'));

const Faqs = React.lazy(() => import('./views/boards/Faqs'));
const Faq = React.lazy(() => import('./views/boards/Faq'));

const Reviews = React.lazy(() => import('./views/boards/Reviews'));
const Review = React.lazy(() => import('./views/boards/Review'));

const Articles = React.lazy(() => import('./views/boards/Articles'));
const Article = React.lazy(() => import('./views/boards/Article'));

const Comments = React.lazy(() => import('./views/boards/Comments'));
const Comment = React.lazy(() => import('./views/boards/Comment'));

const RecycleBin = React.lazy(() => import('./views/boards/RecycleBin'));

const AdminAuth = React.lazy(() => import('./views/admin/AdminAuth'));
const AdminCreate = React.lazy(() => import('./views/users/Users'));
const AdminUser = React.lazy(() => import('./views/users/Users'));

const Users = React.lazy(() => import('./views/users/Users'));
const User = React.lazy(() => import('./views/users/User'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: '대시보드', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/forms', name: 'Forms', component: BasicForms },
  { path: '/base/jumbotrons', name: 'Jumbotrons', component: Jumbotrons },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navbars', name: 'Navbars', component: Navbars },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress-bar', name: 'Progress Bar', component: ProgressBar },
  { path: '/base/switches', name: 'Switches', component: Switches },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tabs', name: 'Tabs', component: Tabs },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/button-dropdowns', name: 'Dropdowns', component: ButtonDropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/buttons/brand-buttons', name: 'Brand Buttons', component: BrandButtons },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toaster', name: 'Toaster', component: Toaster },
  { path: '/widgets', name: 'Widgets', component: Widgets },
  { path: '/boards/groups', exact: true,  name: '단체게시판 관리', component: Groups },
  { path: '/boards/groups/admin', exact: true,  name: '운영진 권한 관리', component: GroupsAdmin },
  { path: '/boards/normals', exact: true,  name: '일반게시판 관리', component: Normals },
  { path: '/boards/normals/admin', exact: true,  name: '운영진 권한 관리', component: NormalsAdmin },
  { path: '/boards/photos', exact: true,  name: '사진게시판 관리', component: Photos },
  { path: '/boards/photos/admin', exact: true,  name: '운영진 권한 관리', component: PhotosAdmin },
  { path: '/boards/faqs', exact: true,  name: 'FAQ 관리', component: Faqs },
  { path: '/boards/faqs/:id', exact: true,  name: 'FAQ 상세보기', component: Faq },
  { path: '/boards/reviews', exact: true,  name: '수강평가글 모아보기', component: Reviews },
  { path: '/boards/reviews/:id', exact: true,  name: '수강평가글 상세보기', component: Review },
  { path: '/boards/articles', exact: true,  name: '게시물 관리', component: Articles },
  { path: '/boards/articles/:id', exact: true,  name: '게시물 상세보기', component: Article },
  { path: '/boards/comments', exact: true,  name: '댓글 관리', component: Comments },
  { path: '/boards/comments/:id', exact: true,  name: '댓글 상세보기', component: Comment },
  { path: '/boards/recycle-bin', exact: true,  name: '휴지통 관리', component: RecycleBin },
  { path: '/admin/auth', exact: true,  name: '운영진 상세 권한 목록', component: AdminAuth },
  { path: '/admin/create', exact: true,  name: '운영진 계정 생성', component: AdminCreate },
  { path: '/admin/user', exact: true,  name: '회원 권한 부여', component: AdminUser },
  { path: '/users', exact: true,  name: '사용자 목록', component: Users },
  { path: '/users/:id', exact: true, name: '사용자 상세보기', component: User }
];

export default routes;
