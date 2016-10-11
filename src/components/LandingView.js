import React from 'react';
import { TextField, RaisedButton } from 'material-ui';
import styles from 'styles/LandingView.css'

class LandingView extends React.Component {
  render() {
    console.log('rendered');
    return (
      <div>
        <div className='hero-div'>
          <h1 className='title'>noteworthee</h1>
          <h2 className='tagline'>share notes with your team</h2>
          <div className={styles.noTeam}>
            Create a team!
            <div className={styles.teamCreatorRow}>
              <div className={styles.teamCreatorTextField}>
                <TextField
                  floatingLabelText="Enter Team Name"
                  style={{fontWeight: '500'}}
                />
              </div>
                <RaisedButton
                  secondary={true}
                  label='Go!'
                  style={{height: '100%'}}
                  labelStyle={{height:'100%', fontSize: '1em'}}
                />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingView;
