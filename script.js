function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
  }
  
  function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
  }


  var reviryIds = ['revir1', 'revir2', 'revir3', 'revir4', 'revir5'];
  var currentRevirIndex = 0;
  
  function changeRevir(direction) {
    document.getElementById(reviryIds[currentRevirIndex]).classList.remove('active');
  
    currentRevirIndex += direction;
    if (currentRevirIndex < 0) {
      currentRevirIndex = reviryIds.length - 1;}
    else if (currentRevirIndex > reviryIds.length - 1) {
      currentRevirIndex = 0;
    }
  
    document.getElementById(reviryIds[currentRevirIndex]).classList.add('active');
  }
  
  window.onload = function() {
    document.getElementById(reviryIds[currentRevirIndex]).classList.add('active');
  };

