import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

function KanbasNavigation() {
  const links = [
    { text: '', icon: 'fa-binoculars', url: 'Dashboard' , size: '3em', padding: '.5em'},
    { text: 'Account', icon: 'fa-user', url: 'Account', size: '2em' },
    { text: 'Dashboard', icon: 'fa-circle-notch', url: 'Dashboard',size: '2em', padding: '0' },
    { text: 'Courses', icon: 'fa-chart-bar', url: 'Courses', size: '2em', padding: '0' },
    { text: 'Calendar', icon: 'fa-calendar', url: 'Calendar', size: '2em', padding: '0' },
    { text: 'Inbox', icon: 'fa-comment', url: 'Inbox', size: '2em', padding: '0' },
    { text: 'History', icon: 'fa-clock', url: 'History', size: '2em', padding: '0' },
    { text: 'Studio', icon: 'fa-camera', url: 'Studio', size: '2em', padding: '0' },
    { text: 'Commons', icon: 'fa-share', url: 'Commons', size: '2em', padding: '0' },
    { text: 'Help', icon: 'fa-cog', url: 'Help', size: '2em', padding: '0' },
    { text: '   ', icon: '', url: ' ', size: '2em', padding: '10em' }
  ];
  
  const { pathname } = useLocation();

  return (
    <div>
<link href="../labs/a2/index.css" rel="stylesheet"/>
      <link href="../vendors/bootstrap-5.1.3-dist/css/bootstrap.min.css" rel="stylesheet"/>
      <link href="../vendors/fontawesome-free-5.15.4-web/css/all.css" rel="stylesheet"/>
      <td width="150" valign="top" >
      <ul style={{position: 'fixed', paddingRight: '2em',paddingleft: '2em'}} className={`wd-bg-color-black  `}>
        {links.map((link, index) => (
          <li key={index} className={`text-center ${pathname.includes(link.url) && "wd-bg-color-white"}`}>
            <Link
              to={link.url}
              className={`text-decoration-none ${pathname.includes(link.url) ? "wd-fg-color-red" : "wd-fg-color-white"}`} style ={{paddingBottom: '3em'}}
            >
              <i className={`fa ${link.icon} ${pathname.includes(link.url) ? "wd-fg-color-black" : "wd-fg-color-red"}`} style={{fontSize: `${link.size}`, paddingBottom: `${link.padding}`}}></i><br />
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
    </td>
    </div>  
  );
}

export default KanbasNavigation;

