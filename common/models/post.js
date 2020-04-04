'use strict';

module.exports = function(Post) {
    Post.disableRemoteMethodByName('create');
    Post.disableRemoteMethodByName('upsert');
    Post.disableRemoteMethodByName('updateAll');
    Post.disableRemoteMethodByName('prototype.updateAttributes');

    Post.disableRemoteMethodByName('findById');
    Post.disableRemoteMethodByName('findOne');

    Post.disableRemoteMethodByName('deleteById');

    Post.disableRemoteMethodByName('confirm');
    Post.disableRemoteMethodByName('count');
    Post.disableRemoteMethodByName('exists');
    Post.disableRemoteMethodByName('resetPassword');

    Post.disableRemoteMethodByName('prototype.__count__accessTokens');
    Post.disableRemoteMethodByName('prototype.__create__accessTokens');
    Post.disableRemoteMethodByName('prototype.__delete__accessTokens');
    Post.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    Post.disableRemoteMethodByName('prototype.__findById__accessTokens');
    Post.disableRemoteMethodByName('prototype.__get__accessTokens');
    Post.disableRemoteMethodByName('prototype.__updateById__accessTokens');
};
