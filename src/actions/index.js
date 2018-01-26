export const selectuser = (user) => {
    console.log("You clicke on user: ",user.first);
  return {
      type:"USER-SELECTED",
      payload:user
  }
};

