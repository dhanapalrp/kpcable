import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import EncryptedStorage from 'react-native-encrypted-storage';

const initialState = {
  isSignedIn: false,
  user: null,
  isLoading: false,
};

export const signIn = createAsyncThunk('auth/signIn', async data => {
  try {
    console.log('fetching user in thunk', data);
    const res = await axios.post('https://dummyjson.com/auth/login', data, {
      headers: {
        'Content-type': 'application/json',
      },
    });
    console.log(res);
    await EncryptedStorage.setItem('user_session', JSON.stringify(res.data));
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
    //   throw new Error(error);
  }
});
export const signOut = createAsyncThunk('auth/signOut', async () => {
  try {
    console.log('calling signout');

    await EncryptedStorage.clear();
    const session = await EncryptedStorage.getItem('user_session');
    console.log('after clean seesion', session);

    return true;
  } catch (error) {
    console.log(error);
    return error;
    //   throw new Error(error);
  }
});
export const revokeUser = createAsyncThunk(
  'auth/revokeUser',
  async (data, {dispatch}) => {
    try {
      console.log('Revoke user');
      const session = await EncryptedStorage.getItem('user_session');
      if (session) {
        let data = JSON.parse(session);
        console.log('dispatch signin');
        return dispatch(signOut());
      } else return dispatch(signOut());
    } catch (error) {
      console.log(error);
      return error;
      //   throw new Error(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    // signout: async (state, action) => {
    //   state.isLoading = false;
    //   state.isSignedIn = false;
    //   state.user = null;
    // },
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, (state, action) => {
      console.log({action});
      state.isLoading = true;
      state.isSignedIn = false;
      state.user = null;
    });
    builder.addCase(signIn.fulfilled, (state, action) => {
      console.log(' signIn fullfilled', {state});
      state.isLoading = false;
      state.isSignedIn = true;
      state.user = action.payload;
    });
    builder.addCase(signIn.rejected, (state, action) => {
      console.log({action});
      state.isLoading = false;
      state.isSignedIn = false;
      state.user = null;
    });
    builder.addCase(signOut.fulfilled, (state, action) => {
      console.log('signout fullfilled', {state});
      state.isLoading = false;
      state.isSignedIn = false;
      state.user = null;
    });
  },
});

export const {} = authSlice.actions;
export default authSlice.reducer;
