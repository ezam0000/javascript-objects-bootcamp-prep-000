var Slowdive = {
  'My Bloody Valentine':'',
  greenday:'american'
}

function updatePlaylist(playlist,nirvana,smells){
  return Object.assign ({},playlist,{[nirvana]:smells})
}