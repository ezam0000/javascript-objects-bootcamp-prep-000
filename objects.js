var Slowdive = {
  nirvana:'smells',
  greenday:'american'
}

function updatePlaylist(playlist,nirvana,smells){
  return Object.assign ({},playlist,{[nirvana]:smells})
}