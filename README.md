KEY COMPONENTS:
1. Tram section: app/views/dashboard
2. Other sections: app/views/others/app-<nomeSezione>
3. Sidebar: app/shared/components/sidebar-side
4. DataSaver service: app/views/data-saver.service.ts

*Read comments throughout the components Typescript code for useful information for customizing.

FOR FUTURE CHANGES:

  - To add a new section follow these steps:
  1. Create new component with 'ng g c component-name' in terminal in app/views/others path.
  2. Add the new component in app/views/others/others.module.ts declarations.
  3. Add the new component to app/views/others/others.routing.ts in children:[], the same way as the other existing sections.
  4. Go to app/shared/services/navigation.service.ts and add the new section in iconMenu[] array, same way as the existing sections.
  5. Add the route in app.routing.ts the same way as the other routes.

  - To change/remove automatic browsing (go to app.component.ts)
  1. To change interval at which pages change, change the 'await sleep(miliseconds)' argument in the switchPages() function.
  2. To remove auto-browsing, simply comment 'this.switchPages()' out of ngOnInit().

  - If the application is initialized at the moment BEFORE the tram starts moving (so we need to wait for the tram's time in station)
  1. In analytics.component.ts uncomment the setTimeout lines in ngOnInit().
  2. Repeat step 1 in app.component.ts.