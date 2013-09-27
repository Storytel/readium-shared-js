//  Created by Boris Schneiderman.
//  Copyright (c) 2012-2013 The Readium Foundation.
//
//  The Readium SDK is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.


ReadiumSDK.Models.ViewerSettings = function(settingsData) {

    this.isSyntheticSpread = true;
    this.fontSize = 100;
    this.columnGap = 20;
    this.mediaOverlaysSkipSkippables = false;

    this.update = function(settingsData) {

        if(settingsData.isSyntheticSpread !== undefined) {
            this.isSyntheticSpread = settingsData.isSyntheticSpread;
        }

        if(settingsData.columnGap !== undefined) {
            this.columnGap = settingsData.columnGap;
        }

        if(settingsData.fontSize !== undefined) {
            this.fontSize = settingsData.fontSize;
        }

        if(settingsData.mediaOverlaysSkipSkippables !== undefined) {
            this.mediaOverlaysSkipSkippables = settingsData.mediaOverlaysSkipSkippables;
        }
    };

    this.update(settingsData);
};