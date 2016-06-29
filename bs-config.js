/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | Please report any issues you encounter:
 |  https://github.com/shakyShane/browser-sync/issues
 |
 | For up-to-date information about the options:
 |  https://github.com/shakyShane/browser-sync/wiki/Working-with-a-Config-File
 |
 */
module.exports = {


    /*
     |--------------------------------------------------------------------------
     | Files to watch
     |--------------------------------------------------------------------------
     | https://github.com/shakyShane/browser-sync/wiki/options#wiki-files
     */
    files: 'source',

    /*
     |--------------------------------------------------------------------------
     | Directories or files to exclude
     |--------------------------------------------------------------------------
     | https://github.com/shakyShane/browser-sync/wiki/options#wiki-exclude
     */
    exclude: false,

    /*
     |--------------------------------------------------------------------------
     | Server
     |--------------------------------------------------------------------------
     | https://github.com/shakyShane/browser-sync/wiki/options#wiki-server
     */
    server: false,

    /*
     |--------------------------------------------------------------------------
     | Proxy
     |--------------------------------------------------------------------------
     | https://github.com/shakyShane/browser-sync/wiki/options#wiki-proxy
     */
    proxy: {
        host: "localhost:4567"
    }

};