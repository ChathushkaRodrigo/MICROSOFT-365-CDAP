// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

// <WelcomeSnippet>
import {
  Button,
  Container
} from 'react-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import { useAppContext } from './AppContext';
import './App.css';

export default function Welcome(props: RouteComponentProps) {
  const app = useAppContext();

  return (
    <div className='calibre-background' >
   <div className='Meeting-card'>
    <div className="p-5 mb-4  rounded-3">
      <Container fluid>
        <div className='heading-collab'>
        <h1>Calibre Collaborate  </h1>
        </div>
        <p className="lead">
        Lets get started on scheduling a meeting
        </p>
        <AuthenticatedTemplate>
          <div>
            <h4>Welcome {app.user?.displayName || ''}!</h4>
            <p></p>
          </div>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
         <div className='login-btn'>
          <Button color="primary" onClick={app.signIn!}>Click here to sign in</Button>
          </div>
        </UnauthenticatedTemplate>
      </Container>
    </div>
    </div>
    </div>
  );
}
// </WelcomeSnippet>
