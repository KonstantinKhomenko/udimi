export default function({route, $auth, redirect}) {
  if (!$auth.loggedIn && route.path === '/') {
    redirect('/login')
  } else if ($auth.loggedIn && route.path === '/login') {
    redirect('/')
  }
}
