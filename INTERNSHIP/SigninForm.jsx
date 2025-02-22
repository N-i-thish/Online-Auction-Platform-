import{ useState } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Button, Stack, TextField, Typography, colors } from '@mui/material';
import { ScreenMode } from '../pages/SigninPage';

const SigninForm = ({ onSwitchMode }) => {
  const [selectedRole, setSelectedRole] = useState('user');
  const [adminKey, setAdminKey] = useState('');

  const handleRoleChange = (role) => {
    setSelectedRole(role);
    // Reset admin key when switching roles
    setAdminKey('');
  };

  const handleSignIn = () => {
    // Perform sign-in logic based on selectedRole
    if (selectedRole === 'user') {
      // Redirect to User page
      window.location.href = "/UserHomepage";
    } else if (selectedRole === 'admin' && adminKey === '123') {
      // Redirect to Admin page
      window.location.href = "/adminhomepage";
    } else {
      // Handle other cases or show an error message
      console.log("Invalid credentials for admin role");
    }
  };

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100%",
        color: colors.grey[800]
      }}
    >
      <Stack spacing={5} sx={{
        width: "100%",
        maxWidth: "500px"
      }}>
        <Stack>
          <Typography variant='h4' fontWeight={600} color={colors.grey[800]}>
            Welcome back
          </Typography>
          <Typography color={colors.grey[600]}>
            
          </Typography>
        </Stack>

        <Stack spacing={4}>
          <Stack spacing={2}>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Email</Typography>
              <TextField />
            </Stack>
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Password</Typography>
              <TextField type='password' />
            </Stack>
          </Stack>

          {/* Role Selection */}
          <Stack spacing={2}>
            <Typography color={colors.grey[800]}>Select Role</Typography>
            <Button
              variant='outlined'
              size='small'
              onClick={() => handleRoleChange('user')}
              sx={{ marginRight: 2, borderColor: selectedRole === 'user' ? colors.grey[800] : '' }}
            >
              User
            </Button>
            <Button
              variant='outlined'
              size='small'
              onClick={() => handleRoleChange('admin')}
              sx={{ borderColor: selectedRole === 'admin' ? colors.grey[800] : '' }}
            >
              Admin
            </Button>
          </Stack>

          {/* Admin Key Input (visible only for admin role) */}
          {selectedRole === 'admin' && (
            <Stack spacing={1}>
              <Typography color={colors.grey[800]}>Admin Key</Typography>
              <TextField
                type='password'
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
              />
            </Stack>
          )}

          {/* Sign-in Button */}
          <Button
            variant='contained'
            size='large'
            onClick={handleSignIn}
            sx={{
              bgcolor: colors.grey[800],
              "&:hover": {
                bgcolor: colors.grey[600]
              }
            }}
          >
            Sign in
          </Button>
        </Stack>

        {/* Don't have an account? Sign up now (conditionally rendered) */}
        {selectedRole === 'user' && (
          <Stack direction="row" spacing={2}>
            <Typography>Don&apos;t have an account?</Typography>
            <Typography
              onClick={() => onSwitchMode(ScreenMode.SIGN_UP)}
              fontWeight={600}
              sx={{
                cursor: "pointer",
                userSelect: "none"
              }}
            >
              Sign up now
            </Typography>
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};

SigninForm.propTypes = {
  onSwitchMode: PropTypes.func.isRequired,
};

export default SigninForm;
