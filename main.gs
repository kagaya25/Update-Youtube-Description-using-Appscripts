function myFunction( data ) {
  var videoId = '';
  var title = 'bar';
  var description = 'baz';
  var resource = {
    id: videoId,
    snippet: {
      title: title,
      description: description,
      categoryId: '22'
    }
  };
  // @ts-ignore
  YouTube.Videos.update(resource, 'id,snippet'); // this is line 90
}