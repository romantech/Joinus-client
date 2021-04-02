/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
/* eslint-disable react/jsx-key */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function MyProjects_modal(props) {
  const { open, close, header } = props;

  const [volunteer, setVolunteer] = useState([]);
  const [handleClick, setHandleClick] = useState(false);
  const { accessToken, source } = useSelector(
    state => state.userInfoReducer.userInfo,
  );

  useEffect(async () => {
    await axios({
      url: `${process.env.REACT_APP_BASE_URL}/project/participant`,
      method: 'POST',
      headers: {
        authorization: accessToken,
      },
      data: {
        projectId: props.children,
      },
      withCredentials: true,
    }).then(res => {
      setVolunteer(res.data.data);
    });
  }, [handleClick]);

  const accept = async userEmail => {
    await axios({
      url: `${process.env.REACT_APP_BASE_URL}/project/accept`,
      method: 'POST',
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
      data: {
        attendUserEmail: userEmail,
        projectId: props.children,
        source,
      },
      withCredentials: true,
    }).then(() => {
      setHandleClick(!handleClick);
    });
  };

  const reject = async userEmail => {
    await axios({
      url: `${process.env.REACT_APP_BASE_URL}/project/reject`,
      method: 'POST',
      headers: {
        authorization: accessToken,
      },
      data: {
        attendUserEmail: userEmail,
        projectId: props.children,
      },
      withCredentials: true,
    }).then(() => {
      setHandleClick(!handleClick);
    });
  };

  return (
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button type="button" className="close" onClick={close}>
              {' '}
              &times;{' '}
            </button>
          </header>
          <main>
            {volunteer.map(userEmail => {
              return (
                <div>
                  {userEmail}
                  <button
                    type="button"
                    onClick={() => {
                      accept(userEmail);
                    }}
                  >
                    수락
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      reject(userEmail);
                    }}
                  >
                    거절
                  </button>
                </div>
              );
            })}
          </main>
          <footer>
            <button type="button" className="close" onClick={close}>
              {' '}
              close{' '}
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
}
