'use strict';
import {
    Config,
    Ban,
    User
} from './models';

// #define UAF_RAND "/cygdrive/c/Programs/Adv/AberMUD2/mud/uaf.rand"
// #define ROOMS "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/ROOMS/"
// #define LOG_FILE "/cygdrive/c/Programs/Adv/AberMUD2/mud/mud_syslog"

export const BanFile = (user_id) => Ban.findOne({ user_id: user_id });

export const NoLogin = () => {
    return Config.findOne({ key: 'NOLOGIN' })
        .then(res => {
            if (!res) return null;
            return res.value;
        })
};

export const ResetT = () => Config.findOne({ key: 'RESET_N' });

// #define RESET_N "/cygdrive/c/Programs/Adv/AberMUD2/mud/reset_n"
// #define RESET_DATA "/cygdrive/c/Programs/Adv/AberMUD2/mud/reset_data"
// #define MOTD "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/gmotd2"
// #define GWIZ "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/gwiz"
// #define HELP1 "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/help1"
// #define HELP2 "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/help2"
// #define HELP3 "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/help3"
// #define WIZLIST "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/wiz.list"
// #define CREDITS "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/credits"
// #define EXAMINES "/cygdrive/c/Programs/Adv/AberMUD2/mud/EXAMINES/"
// #define LEVELS "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/level.txt"

export const Pfl = {
    // dcrypt: data => data;
    // qcrypt: data => data;
    /**
     * Return block data for user or -1 if not exist
     * @param username
     * @returns {null}
     */
    load: (username) => {
        // let lump = dcrypt(block);
        return User.findOne({ username: username });
    },
    save: (user) => {
        // let lump = qcrypt(block);
        return user.save();
    }
};

// #define PFT "/cygdrive/c/Programs/Adv/AberMUD2/mud/user_file.b"

export const Exe = () => Config.findOne({ key: 'EXE' });

// #define EXE2 "/cygdrive/c/Programs/Adv/AberMUD2/mud/mud.1"
// #define SNOOP "/cygdrive/c/Programs/Adv/AberMUD2/mud/SNOOP/"

export const HostMachine = () => {
    return Config.findOne({ key: 'HOST_MACHINE' })
        .then(res => {
            if (!res) return null;
            return res.value;
        })
};

export default {
    // #define UAF_RAND "/cygdrive/c/Programs/Adv/AberMUD2/mud/uaf.rand"
    // #define ROOMS "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/ROOMS/"
    // #define LOG_FILE "/cygdrive/c/Programs/Adv/AberMUD2/mud/mud_syslog"
    BAN_FILE: './banned_file',
    NOLOGIN: './nologin',
    RESET_T: './reset_t',
    // #define RESET_N "/cygdrive/c/Programs/Adv/AberMUD2/mud/reset_n"
    // #define RESET_DATA "/cygdrive/c/Programs/Adv/AberMUD2/mud/reset_data"
    // #define MOTD "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/gmotd2"
    // #define GWIZ "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/gwiz"
    // #define HELP1 "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/help1"
    // #define HELP2 "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/help2"
    // #define HELP3 "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/help3"
    // #define WIZLIST "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/wiz.list"
    // #define CREDITS "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/credits"
    // #define EXAMINES "/cygdrive/c/Programs/Adv/AberMUD2/mud/EXAMINES/"
    // #define LEVELS "/cygdrive/c/Programs/Adv/AberMUD2/mud/TEXT/level.txt"
    PFL: './user_file',
    // #define PFT "/cygdrive/c/Programs/Adv/AberMUD2/mud/user_file.b"
    EXE: './mud.exe',
    // #define EXE2 "/cygdrive/c/Programs/Adv/AberMUD2/mud/mud.1"
    // #define SNOOP "/cygdrive/c/Programs/Adv/AberMUD2/mud/SNOOP/"
    HOST_MACHINE: "DAVIDPOOTER"
}
