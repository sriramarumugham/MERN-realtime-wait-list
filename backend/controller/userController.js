//send the user id to the client to validate the jwt in the client

const userInfo = (req, res) => {
  try {
    //a protected route veifis jwt 
    
    //after verifiation sending the user details to the client

    console.log("jwt verified , sending user details to client");
    let userId = req.user;
    return res.status(200).json({ user: userId });
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

module.exports = { userInfo };
