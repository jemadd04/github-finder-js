// Init class from github.js file
const github = new Github();
// Init UI class
const ui = new UI();

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', e => {
  // Get text that is being typed in
  const userText = e.target.value;
  if (userText != '') {
    // Make HTTP call
    github.getUser(userText).then(data => {
      if (data.profile.message === 'Not Found') {
        // Show alert
        ui.showAlert('User not found', 'alert alert-danger');
      } else {
        // Show profile
        ui.showProfile(data.profile);
      }
    });
  } else {
    // Clear profile - makes profile disappear when you delete text
    ui.clearProfile();
  }
});
