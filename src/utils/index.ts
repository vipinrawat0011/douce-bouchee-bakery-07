
export function createPageUrl(pageName: string): string {
  // Convert page names to lowercase and handle routing
  const pageRoutes: { [key: string]: string } = {
    'Home': '/',
    'Products': '/products',
    'Contact': '/contact',
    'Admin': '/admin'
  };

  // Handle dynamic routes like Product/123
  if (pageName.includes('/')) {
    const [basePage, ...rest] = pageName.split('/');
    const baseRoute = pageRoutes[basePage];
    if (baseRoute) {
      return `${baseRoute}/${rest.join('/')}`;
    }
  }

  return pageRoutes[pageName] || `/${pageName.toLowerCase()}`;
}
