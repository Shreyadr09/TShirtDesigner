function toggleSidebar(index) {
  var sidebar = document.getElementById(`sidebar${index}`);
  var icon = document.getElementById(`icon${index}`);

  // Check if the sidebar is currently active
  var isActive = sidebar.classList.contains("active");

  // Hide all sidebars
  var allSidebars = document.getElementsByClassName("sidebar-content");
  for (var i = 0; i < allSidebars.length; i++) {
    allSidebars[i].classList.remove("active");
  }

  // Remove active class from all icons
  var allIcons = document.getElementsByClassName("icon");
  for (var i = 0; i < allIcons.length; i++) {
    allIcons[i].classList.remove("active");
  }

  // Toggle the sidebar and icon active state
  if (!isActive) {
    sidebar.classList.add("active");
    icon.classList.add("active");
  }
}
