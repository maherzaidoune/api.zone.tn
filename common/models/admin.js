'use strict';

module.exports = function (Admin) {
    Admin.disableRemoteMethodByName('create');
    Admin.disableRemoteMethodByName('upsert');
    Admin.disableRemoteMethodByName('updateAll');
    Admin.disableRemoteMethodByName('prototype.updateAttributes');

    Admin.disableRemoteMethodByName('find');
    Admin.disableRemoteMethodByName('findById');
    Admin.disableRemoteMethodByName('findOne');

    Admin.disableRemoteMethodByName('deleteById');

    Admin.disableRemoteMethodByName('confirm');
    Admin.disableRemoteMethodByName('count');
    Admin.disableRemoteMethodByName('exists');
    Admin.disableRemoteMethodByName('resetPassword');

    Admin.disableRemoteMethodByName('prototype.__count__accessTokens');
    Admin.disableRemoteMethodByName('prototype.__create__accessTokens');
    Admin.disableRemoteMethodByName('prototype.__delete__accessTokens');
    Admin.disableRemoteMethodByName('prototype.__destroyById__accessTokens');
    Admin.disableRemoteMethodByName('prototype.__findById__accessTokens');
    Admin.disableRemoteMethodByName('prototype.__get__accessTokens');
    Admin.disableRemoteMethodByName('prototype.__updateById__accessTokens');
};
