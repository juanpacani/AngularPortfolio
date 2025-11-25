import { UiIconArrow } from "../dynamicIcons/arrow/arrow";
import { UiIconChevronArrow } from "../dynamicIcons/chevron-arrow/chevron-arrow";
import { UiIconCircleCross } from "../dynamicIcons/cross/circle-cross";
import { UiIconCv } from "../staticIcons/cv/cv";
import { UiIconDocument } from "../staticIcons/document/document";
import { UiIconEyeSlash } from "../staticIcons/eye-slash/eye-slash";
import { UiIconEye } from "../staticIcons/eye/eye";
import { UiIconMoon } from "../staticIcons/moon/moon";
import { UiIconMusicNote } from "../staticIcons/music-note/music-note";
import { UiIconPalette } from "../staticIcons/palette/palette";
import { UiIconPause } from "../staticIcons/pause/pause";
import { UiIconPlay } from "../staticIcons/play/play";
import { UiIconSun } from "../staticIcons/sun/sun";


export const STATIC_ICONS = [
    UiIconCv,
    UiIconDocument,
    UiIconPalette,
    UiIconSun,
    UiIconEye,
    UiIconEyeSlash,
    UiIconMoon,
    UiIconPause,
    UiIconPlay,
    UiIconMusicNote,
];

export const DYNAMIC_ICONS = [
    UiIconCircleCross,
    UiIconChevronArrow,
    UiIconArrow
];

export const ALL_ICONS = [...STATIC_ICONS, ...DYNAMIC_ICONS];