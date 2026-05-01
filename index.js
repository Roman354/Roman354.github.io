const s = (p) => {
    p.fr = 75;
    p.renderFr = 75;
    p.gameSpeed = 1;
    p.showTowerAttackReadinessBar = true;
    p.deltaPerm = p.deltaTime;
    p.gameStarted = false; 
    p.gameEnded = false;
    p.gamePassed = false;
    p.buttonsArr = [];
    p.lang = "ru" //
    
    // ТЕСТ Выбор уровня
    const ENABLE_TEST_START_LEVEL_PICKER = true;

    p.I18N = {
        ru: {
            "tower.basic": "Basic",
            "tower.sniper": "Sniper",
            "tower.rapid": "Rapid",
            "tower.chain": "Chain",
            "tower.cleaver": "Cleaver",
            "tower.multishot": "Multishot",
            "tower.slow": "Frost",
            "tower.burn": "Burner",
            "tower.pulse": "Pulse",
            "tower.support": "Support",
            "tower.singularity": "Singularity",
            "tower.rocket": "Rocket",
            "tower.orbital": "Orbital",
            "tower.cat_revolver": "Cat",
            "tower.instance_display": "{name} №{number}",
            "tower.instance_badge": "№{number}",
            "button.easy": "Легкая",
            "button.normal": "Средняя",
            "button.hard": "Сложная",
            "button.ok": "OK",
            "button.finish": "Завершить",
            "button.continue": "Продолжить",
            "button.go": "Старт",
            "button.start": "Старт",
            "button.pause": "Пауза",
            "button.stats": "Урон",
            "button.upgrade": "Улучшить",
            "button.sell": "Продать",
            "menu.settings": "Настройки",
            "menu.music": "Музыка",
            "menu.sounds": "Звуки",
            "menu.graphics": "Графика",
            "menu.language": "Язык",
            "menu.attack_readiness_bar": "Полоска атаки",
            "menu.no_gold": "Нет золота",
            "menu.test_level_picker": "Тестовый выбор уровня",
            "menu.test_level_hint": "Уровень для каждой сложности",
            "menu.test_unlock_all_towers": "Весь пул башен",
            "menu.level_short": "УР",
            "menu.money_short": "Золото",
            "toggle.on": "Вкл",
            "toggle.off": "Выкл",
            "graphics.low": "Низкая",
            "graphics.medium": "Средняя",
            "graphics.high": "Высокая",
            "lang.ru": "RU",
            "lang.en": "EN",
            "hud.wave_full": "Волна: {wave}/{total}",
            "hud.wave_short": "Волна: {wave}",
            "game.completed_title": "ИГРА ПРОЙДЕНА",
            "game.endless_unlocked": "Бесконечный режим доступен",
            "game.congratulations": "ПОЗДРАВЛЯЕМ",
            "game.completed": "Вы прошли игру",
            "game.lost": "Вы проиграли",
            "game.reward": "НАГРАДА:",
            "game.summary_score": "Счет",
            "game.summary_time": "Время",
            "game.cleared_waves": "ВЫ ПРОШЛИ {waves} ВОЛН",
            "game.finish_or_continue": "Завершить игру или продолжить?",
            "time.seconds": "{value}с",
            "wave.intro": "Волна {wave}",
            "wave.auto_start": "Автостарт через {seconds}с",
            "label.boss": "БОСС",
            "panel.towers": "БАШНИ",
            "panel.tower_damage": "Урон башен",
            "panel.wave_dmg": "Урон волны",
            "panel.total_dmg": "Общий урон",
            "panel.wave": "Волна",
            "panel.total": "Всего",
            "panel.no_wave_damage": "Урон по волне еще не записан.",
            "panel.no_damage": "Урон еще не записан.",
            "panel.more_towers": "...и еще {count} башен",
            "panel.damage_value": "{value} УРН",
            "base.heal_amount": "+{value} HP",
            "stat.aura": "Дальность {value} для Support",
            "stat.support_range_tile": "Дальность {aura} для Support, союзникам {buff} к дальности",
            "stat.fire_rate_buff": "Скорострельность +{value}",
            "stat.range_buff": "Дальности +{value}",
            "stat.damage_buff": "Урон +{value}",
            "stat.crit_chance_buff": "Шанс крита +{value}",
            "stat.aura_gold_bonus": "Шанс {chance} на +{value} золото",
            "stat.charge_per_enemy": "Заряд: {value} за врага",
            "stat.burn_dps": "Горение: {value} x{stacks}",
            "stat.burn_time": "Время горения: {value}",
            "stat.heal_cut": "Лечение -{value}% x{stacks}",
            "stat.slow": "{value}",
            "stat.splash": "Радиус: {value}",
            "stat.random_shot_type": "Случайный тип выстрела",
            "stat.special_shot": "Особый выстрел: {value}",
            "stat.crit": "Крит: {value}",
            "stat.tile_effect": "Ячейка: {value}",
            "stat.tile_damage": "{value} к урону",
            "stat.tile_range": "{value} к дальности",
            "stat.tile_fire_rate": "{value} к скорострельности",
            "stat.tile_gold": "+{value} золото за убийство",
            "stat.tile_gold_earned": "Заработано: {value}",
            "stat.level_progress": "УР {level} -> {next}",
            "stat.level_max": "УР {level} МАКС",
            "stat.burst": "Серия {value}",
            "abbr.seconds": "с",
            "tile.damage_up.name": "Урон",
            "tile.range_up.name": "Дальность",
            "tile.fire_rate_up.name": "Скорострельность",
            "tile.gold_on_kill.name": "Золото за убийство",
            "tile.damage_down.name": "Снижение урона",
            "tile.range_down.name": "Снижение дальности",
            "tile.fire_rate_down.name": "Снижение скорострельности",
            "tile.cell_debuff.name": "Заблокированная клетка",
            "tooltip.tile_actions.title": "Ячейка",
            "tooltip.tile_actions.text": "Открывает действия для ячейки под башней.",
            "tooltip.tile_buy.title": "Создать ячейку",
            "tooltip.tile_buy.text": "Тип: {tile}",
            "tooltip.tile_clear.title": "Очистить ячейку",
            "tooltip.tile_clear.text": "Убирает эффект: {tile}",
            "tooltip.tile_effect_prefix": "Эффект: {value}",
            "tooltip.support_tile_effect_prefix": "Эффект {name} башни: {value}",
            "tooltip.tile_effect_blocked": "Башню нельзя поставить",
            "tile.info.buff": "Бафф ячейка",
            "tile.info.debuff": "Дебафф ячейка",
            "chest.unlock": "Открыта: {tower}",
            "chest.level_up": "Ур. +1: {tower}"
        },
        en: {
            "tower.basic": "Basic",
            "tower.sniper": "Sniper",
            "tower.rapid": "Rapid",
            "tower.chain": "Chain",
            "tower.cleaver": "Cleaver",
            "tower.multishot": "Multishot",
            "tower.slow": "Frost",
            "tower.burn": "Burner",
            "tower.pulse": "Pulse",
            "tower.support": "Support",
            "tower.singularity": "Singularity",
            "tower.rocket": "Rocket",
            "tower.orbital": "Orbital",
            "tower.cat_revolver": "Cat",
            "tower.instance_display": "{name} #{number}",
            "tower.instance_badge": "#{number}",
            "button.easy": "Easy",
            "button.normal": "Normal",
            "button.hard": "Hard",
            "button.ok": "OK",
            "button.finish": "Finish",
            "button.continue": "Continue",
            "button.go": "WAVE",
            "button.start": "Start",
            "button.pause": "Pause",
            "button.stats": "Stats",
            "button.upgrade": "Upgrade",
            "button.sell": "Sell",
            "menu.settings": "Settings",
            "menu.music": "Music",
            "menu.sounds": "Sounds",
            "menu.graphics": "Graphics",
            "menu.language": "Language",
            "menu.attack_readiness_bar": "Attack Bar",
            "menu.no_gold": "No Gold",
            "menu.test_level_picker": "Test level picker",
            "menu.test_level_hint": "Level per difficulty",
            "menu.test_unlock_all_towers": "Full tower pool",
            "menu.level_short": "LVL",
            "menu.money_short": "Gold",
            "toggle.on": "On",
            "toggle.off": "Off",
            "graphics.low": "Low",
            "graphics.medium": "Medium",
            "graphics.high": "High",
            "lang.ru": "RU",
            "lang.en": "EN",
            "hud.wave_full": "Wave: {wave}/{total}",
            "hud.wave_short": "Wave: {wave}",
            "game.completed_title": "GAME CLEARED",
            "game.endless_unlocked": "Endless mode unlocked",
            "game.congratulations": "CONGRATULATIONS",
            "game.completed": "You completed the game",
            "game.lost": "You lost",
            "game.reward": "REWARD:",
            "game.summary_score": "Score",
            "game.summary_time": "Time",
            "game.cleared_waves": "YOU CLEARED {waves} WAVES",
            "game.finish_or_continue": "Finish the game or continue?",
            "time.seconds": "{value}s",
            "wave.intro": "Wave {wave}",
            "wave.auto_start": "Auto start in {seconds}s",
            "label.boss": "BOSS",
            "panel.towers": "TOWERS",
            "panel.tower_damage": "Tower Damage",
            "panel.wave_dmg": "Wave DMG",
            "panel.total_dmg": "Total DMG",
            "panel.wave": "Wave",
            "panel.total": "Total",
            "panel.no_wave_damage": "No wave damage recorded yet.",
            "panel.no_damage": "No damage recorded yet.",
            "panel.more_towers": "...and {count} more towers",
            "panel.damage_value": "{value} DMG",
            "base.heal_amount": "+{value} HP",
            "stat.aura": "Range {value} for Support",
            "stat.support_range_tile": "Range {aura} for Support, allies get {buff} range",
            "stat.fire_rate_buff": "Fire Rate +{value}",
            "stat.range_buff": "Range +{value}",
            "stat.damage_buff": "Damage +{value}",
            "stat.crit_chance_buff": "Crit Chance +{value}",
            "stat.aura_gold_bonus": "{chance} chance for +{value} gold",
            "stat.charge_per_enemy": "Charge: {value} per enemy",
            "stat.burn_dps": "Burn DPS: {value} x{stacks}",
            "stat.burn_time": "Burn Time: {value}",
            "stat.heal_cut": "Healing -{value}% x{stacks}",
            "stat.slow": "{value}",
            "stat.splash": "Splash: {value}",
            "stat.random_shot_type": "Random Shot Type",
            "stat.special_shot": "Special Shot: {value}",
            "stat.crit": "Crit: {value}",
            "stat.tile_effect": "Tile: {value}",
            "stat.tile_damage": "{value} damage",
            "stat.tile_range": "{value} range",
            "stat.tile_fire_rate": "{value} fire rate",
            "stat.tile_gold": "+{value} gold on kill",
            "stat.tile_gold_earned": "Earned: {value}",
            "stat.level_progress": "LVL {level} -> {next}",
            "stat.level_max": "LVL {level} MAX",
            "stat.burst": "Burst {value}",
            "abbr.seconds": "s",
            "tile.damage_up.name": "Damage",
            "tile.range_up.name": "Range",
            "tile.fire_rate_up.name": "Fire Rate",
            "tile.gold_on_kill.name": "Gold on Kill",
            "tile.damage_down.name": "Damage Down",
            "tile.range_down.name": "Range Down",
            "tile.fire_rate_down.name": "Fire Rate Down",
            "tile.cell_debuff.name": "Blocked Cell",
            "tooltip.tile_actions.title": "Tile",
            "tooltip.tile_actions.text": "Opens the actions for the tile under this tower.",
            "tooltip.tile_buy.title": "Create Tile",
            "tooltip.tile_buy.text": "Type: {tile}",
            "tooltip.tile_clear.title": "Clear Tile",
            "tooltip.tile_clear.text": "Removes effect: {tile}",
            "tooltip.tile_effect_prefix": "Effect: {value}",
            "tooltip.support_tile_effect_prefix": "{name} tower effect: {value}",
            "tooltip.tile_effect_blocked": "Tower placement is blocked",
            "tile.info.buff": "Buff Tile",
            "tile.info.debuff": "Debuff Tile",
            "chest.unlock": "Unlocked: {tower}",
            "chest.level_up": "Lvl +1: {tower}"
        }
    };
    p.t = function(key, params = {}) {
        const langPack = p.I18N[p.lang] || p.I18N.ru;
        const fallbackPack = p.I18N.ru;
        const template = langPack[key] ?? fallbackPack[key] ?? key;
        return template.replace(/\{(\w+)\}/g, (_, name) => `${params[name] ?? `{${name}}`}`);
    };

    p.initLoadingOverlay = function() {
        if (typeof document === "undefined") return;
        const existing = document.getElementById("game-loading-overlay");
        if (existing) existing.remove();
        const host = document.getElementById("myContainer") || document.body;

        const overlay = document.createElement("div");
        overlay.id = "game-loading-overlay";
        overlay.style.position = host.id === "myContainer" ? "absolute" : "fixed";
        overlay.style.inset = "0";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.background = "radial-gradient(circle at top, rgba(46,60,78,0.92), rgba(9,12,18,0.97))";
        overlay.style.zIndex = "9999";
        overlay.style.fontFamily = "Arial, sans-serif";
        overlay.style.boxSizing = "border-box";
        overlay.style.padding = "16px";

        const card = document.createElement("div");
        card.style.width = "min(460px, calc(100% - 32px))";
        card.style.maxWidth = "100%";
        card.style.padding = "24px 24px 20px";
        card.style.border = "2px solid rgba(116, 176, 255, 0.45)";
        card.style.borderRadius = "16px";
        card.style.background = "rgba(15, 20, 30, 0.9)";
        card.style.boxShadow = "0 18px 48px rgba(0, 0, 0, 0.35)";

        const title = document.createElement("div");
        title.textContent = "LOADING";
        title.style.color = "rgba(235, 242, 255, 0.96)";
        title.style.fontSize = "28px";
        title.style.fontWeight = "700";
        title.style.letterSpacing = "0.08em";

        const status = document.createElement("div");
        status.id = "game-loading-status";
        status.textContent = "Preparing assets...";
        status.style.marginTop = "10px";
        status.style.color = "rgba(200, 214, 235, 0.88)";
        status.style.fontSize = "14px";

        const track = document.createElement("div");
        track.style.marginTop = "18px";
        track.style.height = "14px";
        track.style.borderRadius = "999px";
        track.style.background = "rgba(70, 86, 110, 0.55)";
        track.style.overflow = "hidden";
        track.style.boxShadow = "inset 0 1px 3px rgba(0, 0, 0, 0.32)";

        const bar = document.createElement("div");
        bar.id = "game-loading-bar";
        bar.style.width = "0%";
        bar.style.height = "100%";
        bar.style.borderRadius = "999px";
        bar.style.background = "linear-gradient(90deg, #56d8ff 0%, #86ff8f 100%)";
        bar.style.transition = "width 120ms ease-out";

        const percent = document.createElement("div");
        percent.id = "game-loading-percent";
        percent.textContent = "0%";
        percent.style.marginTop = "10px";
        percent.style.color = "rgba(255, 222, 146, 0.98)";
        percent.style.fontSize = "16px";
        percent.style.fontWeight = "700";
        percent.style.textAlign = "right";

        track.appendChild(bar);
        card.appendChild(title);
        card.appendChild(status);
        card.appendChild(track);
        card.appendChild(percent);
        overlay.appendChild(card);
        host.appendChild(overlay);

        p._loadingOverlay = overlay;
        p._loadingOverlayStatus = status;
        p._loadingOverlayBar = bar;
        p._loadingOverlayPercent = percent;
    };

    p.updateLoadingOverlay = function(statusText = "") {
        if (!p._loadingOverlayBar || !p._loadingOverlayPercent || !p._loadingOverlayStatus) return;
        const stats = p._assetLoadStats || {};
        const total = Math.max(0, stats.total || 0);
        const loaded = Math.max(0, stats.loaded || 0);
        const percentValue = total > 0 ? Math.round((loaded / total) * 100) : 0;
        p._loadingOverlayBar.style.width = `${Math.min(100, percentValue)}%`;
        p._loadingOverlayPercent.textContent = `${Math.min(100, percentValue)}%`;
        const label = statusText || stats.lastAsset || "Preparing assets...";
        p._loadingOverlayStatus.textContent = total > 0
            ? `${loaded}/${total}  ${label}`
            : label;
    };

    p.finishLoadingOverlay = function() {
        if (p._loadingOverlay?.remove) {
            p._loadingOverlay.remove();
        }
        p._loadingOverlay = null;
        p._loadingOverlayStatus = null;
        p._loadingOverlayBar = null;
        p._loadingOverlayPercent = null;
    };

    p.installAssetLoadTracker = function() {
        p._assetLoadStats = { total: 0, loaded: 0, lastAsset: "Preparing assets..." };
        if (!p._originalLoadImage) p._originalLoadImage = p.loadImage.bind(p);
        if (!p._originalLoadFont) p._originalLoadFont = p.loadFont.bind(p);

        const trackLoader = (originalLoader) => (path, successCallback, failureCallback) => {
            const assetName = String(path || "").split(/[\\/]/).pop() || "asset";
            p._assetLoadStats.total += 1;
            p._assetLoadStats.lastAsset = assetName;
            p.updateLoadingOverlay(`Loading ${assetName}...`);

            const finalize = (label) => {
                p._assetLoadStats.loaded += 1;
                p._assetLoadStats.lastAsset = label;
                p.updateLoadingOverlay(label);
            };

            return originalLoader(
                path,
                (...args) => {
                    finalize(assetName);
                    if (typeof successCallback === "function") {
                        successCallback(...args);
                    }
                },
                (...args) => {
                    finalize(`Failed: ${assetName}`);
                    if (typeof failureCallback === "function") {
                        failureCallback(...args);
                    }
                }
            );
        };

        p.loadImage = trackLoader(p._originalLoadImage);
        p.loadFont = trackLoader(p._originalLoadFont);
    };

    p.restoreAssetLoadTracker = function() {
        if (p._originalLoadImage) p.loadImage = p._originalLoadImage;
        if (p._originalLoadFont) p.loadFont = p._originalLoadFont;
    };

    p.preload = function ()
    {
        p.initLoadingOverlay();
        p.installAssetLoadTracker();
        p.updateLoadingOverlay("Preparing assets...");
        p.variables = new Variables();
        // console.log(p.variables)
        p.localStorage = new LocalStorage();
        p.pathTextures = {
            straight: p.loadImage('./img/vert.png'),
            corner: p.loadImage('./img/ugl.png'),
            crossroads: p.loadImage('./img/crossroads.png'),
            diag: p.loadImage('./img/diag.png'),
            diagCornerFill: p.loadImage('./img/diagCornerFill.png'),
            diagCross: p.loadImage('./img/diagCross.png'),
            diagHalfCross: p.loadImage('./img/diagHalfCross.png'),
            uglDiag: p.loadImage('./img/uglDiag.png'),
            vertDiag: p.loadImage('./img/vertDiag.png'),
            cave: p.loadImage('./img/cave.png'),
            damageBuff: p.loadImage('./img/damageBuff.png'),
            rangeBuff: p.loadImage('./img/rangeBuff.png'),
            speedBuff: p.loadImage('./img/speedBuff.png'),
            goldBuff: p.loadImage('./img/goldBuff.png'),
            damageDebuff: p.loadImage('./img/damageDebuff.png'),
            rangeDebuff: p.loadImage('./img/rangeDebuff.png'),
            speedDebuff: p.loadImage('./img/speedDebuff.png'),
            cellDebuff: p.loadImage('./img/cellDebuff.png')
        };
        p.variables.gameMusic = new Audio('sounds/gamemusic.mp3'); 
        p.variables.gameMusic.loop = true;
        p.variables.gameLoseMusic = new Audio('sounds/gamelosesound.mp3'); 
        p.variables.soundSniperShot = new Audio('sounds/sniper_shot.mp3');
        p.variables.soundBasicShot = new Audio('sounds/bound.wav');
        p.variables.soundBasicShots = [
            new Audio('sounds/bound1.wav'),
            new Audio('sounds/bound2.wav'),
            new Audio('sounds/bound3.wav')
        ];
        p.variables.soundBasicShotIndex = 0;
        p.variables.soundWaveStart = new Audio('sounds/soundWaveStart.wav'); //u
        p.variables.soundBossWaveStart = new Audio('sounds/boss_music.wav');
        p.variables.soundWaveEnd = new Audio('sounds/soundWaveEnd.wav');  //u
        p.variables.soundChestSpawn = new Audio('sounds/soundChestSpawn.wav');  //u
        p.variables.soundChestPickup = new Audio('sounds/soundChestPickup.wav');  //u
        p.variables.soundBaseHit = new Audio('sounds/soundBaseHit.wav');  //u
        p.variables.soundBaseHeal = new Audio('sounds/heal.wav');
        p.variables.soundPauseToggle = new Audio('sounds/soundPauseOn.wav');  //u
        p.variables.soundPauseOn = new Audio('sounds/soundPauseOn.wav');  //u
        p.variables.soundPauseOff = new Audio('sounds/soundPauseOff.wav');  //u
        p.variables.soundRapidShot = new Audio('sounds/rapid.flac');
        p.variables.soundSlowShot = new Audio('sounds/snowThrow.wav');
        p.variables.soundSlowShot.preload = "auto";
        p.variables.soundSlowHitPools = [
            [new Audio('sounds/snowhit1.wav'), new Audio('sounds/snowhit1.wav')],
            [new Audio('sounds/snowhit2.wav'), new Audio('sounds/snowhit2.wav')],
            [new Audio('sounds/snowhit3.wav'), new Audio('sounds/snowhit3.wav')],
            [new Audio('sounds/snowhit4.wav'), new Audio('sounds/snowhit4.wav')]
        ];
        p.variables.soundSlowHitPoolIndex = [0, 0, 0, 0];
        for (const pool of p.variables.soundSlowHitPools) {
            for (const clip of pool) {
                clip.preload = "auto";
            }
        }
        p.variables.soundBurnShot = new Audio('./sounds/burn.wav');
        p.variables.soundChainShot = new Audio('./sounds/chain.wav');
        p.variables.soundCleaverShot = new Audio('./sounds/cleave.wav');
        p.variables.soundPulseShot = new Audio('./sounds/pulse.wav');
        p.variables.soundSingularityShot = new Audio('./sounds/singularity.wav');
        p.variables.soundRocketShot  = new Audio('./sounds/rocket.wav');
        p.variables.soundOrbitalShot = new Audio('./sounds/orbital.wav');
        p.variables.soundPortalSpawn = new Audio('./sounds/portal.wav');
        p.variables.soundTowerBuild = new Audio('./sounds/build.wav');
        p.variables.soundTowerUpgrade1 = new Audio('./sounds/upgrade1.mp3');
        p.variables.soundTowerUpgrade2 = new Audio('./sounds/upgrade2.mp3');
        p.variables.soundTowerSell = new Audio('./sounds/sell.wav');
        p.variables.cat_revolver = new Audio('./sounds/cat_revolver.flac');
        p.goldTexture = p.loadImage('./img/icons/gold.png'),

        p.TOWER_TYPES = {
            basic: {
                id: "basic",
                name: p.t("tower.basic"),
                cost: 15,
                color: [255, 255, 255],
                w:40,
                h:40,
                critMult: 2,
                aimMode: "limited",
                minAimAngle: -Math.PI / 2,
                maxAimAngle: Math.PI / 2,
                flipByTargetX: true,
                originalFacing: "left",
                angleOffset: Math.PI,
                muzzle: { x: -20, y: 0 },
                texture: [
                    p.loadImage('./img/towers/def1.png'),
                    p.loadImage('./img/towers/def2.png'),
                    p.loadImage('./img/towers/def3.png')
                ],
                levels: [
                {
                    range: 110,
                    fireRate: 1.2,
                    damage: 3,
                    projSpeed: 250,
                    bounces: 0,
                    critChance: 0.05,
                    specialShotChance: 0.2
                },
                {
                    range: 125,
                    fireRate: 1.5,
                    damage: 4,
                    projSpeed: 270,
                    bounces: 0,
                    critChance: 0.06,
                    specialShotChance: 0.25
                },
                {
                    range: 140,
                    fireRate: 1.7,
                    damage: 5,
                    projSpeed: 300,
                    bounces: 0,
                    critChance: 0.07,
                    specialShotChance: 0.3
                }
                ]
            },
            sniper: {
                    id: "sniper",
                    name: p.t("tower.sniper"),
                    cost: 35,
                    w:40,
                    h:40,
                    critMult: 2,
                    minJamFireRateMult: 0.5,
                    aimMode: "full",
                    flipByTargetX: true,
                    originalFacing: "right",
                    muzzle: { x: 20, y: -20 },
                    angleOffset: +Math.PI / 4,
                    texture: [
                    p.loadImage('./img/towers/snip1.png'),
                    p.loadImage('./img/towers/snip2.png'),
                    p.loadImage('./img/towers/snip3.png')
                    ],
                    levels: [
                        {
                            range: 250,
                            fireRate: 0.2,
                            damage: 20,
                            critChance: 0.05,
                            // projSpeed: 1000,
                            // chainRange: 120,
                            // bounces: 0
                        },
                        {
                            range: 300,
                            fireRate: 0.25,
                            damage: 35,
                            critChance: 0.06,
                            // projSpeed: 1100,
                            // chainRange: 120,
                            // bounces: 0
                        },
                        {
                            range: 350,
                            fireRate: 0.33,
                            damage: 50,
                            critChance: 0.07,
                            // projSpeed: 1200,
                            // chainRange: 120,
                            // bounces: 0
                        }
                    ]
            },
         
            cleaver: {
                id: "cleaver",
                name: p.t("tower.cleaver"),
                w: 40,
                h: 40,
                aimMode: "limited",
                minAimAngle: -Math.PI / 2,
                maxAimAngle: Math.PI / 2,
                flipByTargetX: true,
                originalFacing: "left",
                angleOffset: Math.PI,
                muzzle: { x: -4, y: -10 },
                cost: 30,
                critMult: 2,
                projectileType: "melee_splash",
                primarySlowFactor: 0,
                primarySlowDuration: 0.7,
                texture: [
                    p.loadImage('./img/towers/cleaver1.png'),
                    p.loadImage('./img/towers/cleaver2.png'),
                    p.loadImage('./img/towers/cleaver3.png')
                ],
                swordTexture: [
                    p.loadImage('./img/towers/sword1.png'),
                    p.loadImage('./img/towers/sword2.png'),
                    p.loadImage('./img/towers/sword3.png')
                ],
                color: [255, 170, 110],
                levels: [
                    {
                        range: 80,
                        fireRate: 0.6,
                        damage: 10,
                        projSpeed: 720,
                        splashRadius: 50,
                        primarySlowDuration: 0.2,
                        critChance: 0.05
                    },
                    {
                        range: 90,
                        fireRate: 0.7,
                        damage: 14,
                        projSpeed: 780,
                        splashRadius: 60,
                        primarySlowDuration: 0.3,
                        critChance: 0.06
                    },
                    {
                        range: 100,
                        fireRate: 0.8,
                        damage: 18,
                        projSpeed: 840,
                        splashRadius: 70,
                        primarySlowDuration: 0.4,
                        critChance: 0.07
                    }
                ]
            },
            multishot: {
                id: "multishot",
                name: p.t("tower.multishot"),
                cost: 35,
                w:40,
                h:40,
                aimMode: "full",
                angleOffset: 3 * Math.PI / 4,
                muzzle: { x: -5, y: -15 },
                projectileType: "arrow",
                flipByTargetX: true,
                originalFacing: "right",
                texture: [
                    p.loadImage('./img/towers/multishot1.png'),
                    p.loadImage('./img/towers/multishot2.png'),
                    p.loadImage('./img/towers/multishot3.png')
                ],
                color: [240, 210, 120],
                levels: [
                    {
                        range: 130,
                        fireRate: 0.6,
                        damage: 5,
                        projSpeed: 260,
                        bounces: 0,
                        projectileCount: 2
                    },
                    {
                        range: 150,
                        fireRate: 0.7,
                        damage: 6,
                        projSpeed: 290,
                        bounces: 0,
                        projectileCount: 3
                    },
                    {
                        range: 170,
                        fireRate: 1,
                        damage: 7,
                        projSpeed: 320,
                        bounces: 0,
                        projectileCount: 4
                    }
                ]
            },
            slow: {
                id: "slow",
                name: p.t("tower.slow"),
                cost: 30,
                maxCount: 2,
                w:50,
                h:50,
                angleOffset: Math.PI,
                muzzle: { x: -20, y: 0 },
                color: [120, 200, 255],
                texture: [
                    p.loadImage('./img/towers/slow1.png'),
                    p.loadImage('./img/towers/slow2.png'),
                    p.loadImage('./img/towers/slow3.png')
                ],
                levels: [
                {
                    range: 120,
                    fireRate: 1.2,
                    damage: 1,
                    projSpeed: 200,
                    slowFactor: 0.6,   // -40%
                    slowDuration: 2.0,
                    chainRange: 100,
                    bounces: 1
                },
                {
                    range: 135,
                    fireRate: 1.3,
                    damage: 1,
                    projSpeed: 220,
                    slowFactor: 0.5,   // -50%
                    slowDuration: 2.5,
                    chainRange: 100,
                    bounces: 2
                },
                {
                    range: 150,
                    fireRate: 1,
                    damage: 1.8,
                    projSpeed: 240,
                    slowFactor: 0.4,   // -60%
                    slowDuration: 3.0,
                    chainRange: 100,
                    bounces: 3
                }
                ]
            },
            burn: {
                id: "burn",
                name: p.t("tower.burn"),
                cost: 40,
                maxCount: 2,
                w: 40,
                h: 40,
                angleOffset: Math.PI,
                muzzle: { x: -20, y: 0 },
                texture: [
                    p.loadImage('./img/towers/burn1.png'),
                    p.loadImage('./img/towers/burn2.png'),
                    p.loadImage('./img/towers/burn3.png')
                ],
                levels: [
                    {
                        range: 110,
                        fireRate: 1.8,
                        damage: 0.1,
                        projSpeed: 260,

                        burnDamage: 1.5,
                        burnDuration: 3
                    },
                    {
                        range: 130,
                        fireRate: 2,
                        damage: 0.1,
                        projSpeed: 300,

                        burnDamage: 2,
                        burnDuration: 3.5
                    },
                    {
                        range: 150,
                        fireRate: 2.2,
                        damage: 0.1,
                        projSpeed: 340,

                        burnDamage: 2.5,
                        burnDuration: 4
                    }
                ]
            },
            pulse: {
                id: "pulse",
                name: p.t("tower.pulse"),
                canRotate: false,

                cost: 40,
                maxCount: 2,
                w: 42,
                h: 42,
                texture: [
                    p.loadImage('./img/towers/pulse1.png'),
                    p.loadImage('./img/towers/pulse2.png'),
                    p.loadImage('./img/towers/pulse3.png')
                ],
                color: [200, 120, 255],

                levels: [
                    {
                        range: 90,
                        fireRate: 0.5, // раз в 2 сек
                        damage: 7,

                    },
                    {
                        range: 100,
                        fireRate: 0.6,
                        damage: 10,

                    },
                    {
                        range: 100,
                        fireRate: 0.7,
                        damage: 13,
                    }
                ]
            },
            support: {
                id: "support",
                name: p.t("tower.support"),
                canRotate: false,

                cost: 30,
                maxCount: 2,
                w: 40,
                h: 40,
                angleOffset: Math.PI,
                muzzle: { x: -20, y: 0 },
                texture: [
                    p.loadImage('./img/towers/support1.png'),
                    p.loadImage('./img/towers/support2.png'),
                    p.loadImage('./img/towers/support3.png')
                ],
                color: [120, 255, 180],

                levels: [
                    {
                        range: 90,
                        fireRate: 0,
                        fireRateBoost: 1.12,
                        rangeBoost: 1.08,
                        damageBoost: 1.00,
                        critChanceBoost: 0.03,
                        damage: 0,
                
                    },
                    {
                        range: 100,
                        fireRate: 0,
                        fireRateBoost: 1.18,
                        damage: 0,
                        rangeBoost: 1.14,
                        damageBoost: 1.00,
                        critChanceBoost: 0.05,
                    },
                    {
                        range: 110,
                        fireRate: 0,
                        damage: 0,
                        fireRateBoost: 1.24,
                        rangeBoost: 1.2,
                        damageBoost: 1.00,
                        critChanceBoost: 0.07,
                    }
                ]
            },
            singularity: {
                id: "singularity",
                name: p.t("tower.singularity"),
                canRotate: false,
                legendary: true,

                cost: 90,
                w: 46,
                h: 46,
                texture: [
                    p.loadImage('./img/towers/singularity1.png'),
                    p.loadImage('./img/towers/singularity2.png'),
                    p.loadImage('./img/towers/singularity3.png')
                ],
                color: [140, 120, 255],

                levels: [
                    {
                        range: 140,
                        fireRate: 0,
                        damage: 2,
                        chargePerEnemy: 0.15, // 25%/sec per enemy
                        slowFactor: 0.9,
                        slowDuration: 1.5,
                        burnDamage: 2.0,
                        burnDuration: 3.2
                    },
                    {
                        range: 160,
                        fireRate: 0,
                        damage: 3,
                        chargePerEnemy: 0.17,
                        slowFactor: 0.85,
                        slowDuration: 2.0,
                        burnDamage: 2.8,
                        burnDuration: 3.6
                    },
                    {
                        range: 180,
                        fireRate: 0,
                        damage: 4,
                        chargePerEnemy: 0.20,
                        slowFactor: 0.80,
                        slowDuration: 2.5,
                        burnDamage: 3.6,
                        burnDuration: 4.0
                    }
                ]
            },
            rocket: {
                id: "rocket",
                name: p.t("tower.rocket"),
                legendary: true,

                cost: 90,
                w: 46,
                h: 46,
                aimMode: "limited",
                minAimAngle: -Math.PI / 2,
                maxAimAngle: Math.PI / 2,
                flipByTargetX: true,
                originalFacing: "left",
                angleOffset: Math.PI,
                muzzle: { x: -18, y: 0 },
                projectileType: "splash",
                texture: [
                    p.loadImage('./img/towers/rocket1.png'),
                    p.loadImage('./img/towers/rocket2.png'),
                    p.loadImage('./img/towers/rocket3.png')
                ],
                color: [255, 140, 90],

                levels: [
                    {
                        range: 150,
                        fireRate: 0.5,
                        damage: 25,
                        projSpeed: 210,
                        splashRadius: 70
                    },
                    {
                        range: 170,
                        fireRate: 0.6,
                        damage: 35,
                        projSpeed: 230,
                        splashRadius: 80
                    },
                    {
                        range: 190,
                        fireRate: 0.7,
                        damage: 45,
                        projSpeed: 250,
                        splashRadius: 90
                    }
                ]
            },
            orbital: {
                id: "orbital",
                name: p.t("tower.orbital"),
                legendary: true,
                canRotate: false,

                cost: 90,
                w: 46,
                h: 46,
                texture: [
                    p.loadImage('./img/towers/orbital1.png'),
                    p.loadImage('./img/towers/orbital2.png'),
                    p.loadImage('./img/towers/orbital3.png')
                ],
                color: [190, 210, 255],

                levels: [
                    {
                        range: 9999,
                        fireRate: 0.2,
                        damage: 15,
                        slowFactor: 0.1,
                        slowDuration: 0.25
                    },
                    {
                        range: 9999,
                        fireRate: 0.25,
                        damage: 20,
                        slowFactor: 0.1,
                        slowDuration: 0.35
                    },
                    {
                        range: 9999,
                        fireRate: 0.3,
                        damage: 25,
                        slowFactor: 0.1,
                        slowDuration: 0.45
                    }
                ]
            },
            cat_revolver: {
                id: "cat_revolver",
                name: p.t("tower.cat_revolver"),
                legendary: true,

                cost: 90,
                w: 35,
                h: 35,
                aimMode: "limited",
                minAimAngle: -Math.PI / 2,
                maxAimAngle: Math.PI / 2,
                flipByTargetX: true,
                originalFacing: "left",
                angleOffset: Math.PI,
                muzzle: { x: -18, y: 0 },
                texture: [
                    p.loadImage('./img/towers/cat_revolver1.png'),
                    p.loadImage('./img/towers/cat_revolver2.png'),
                    p.loadImage('./img/towers/cat_revolver3.png')
                ],
                color: [255, 200, 150],

                levels: [
                    {
                        range: 130,
                        fireRate: 6.5,
                        damage: 10,
                        projSpeed: 320,
                        magazine: 6,
                        reloadTime: 2.2,
                        idleReloadDelay: 2.5,
                        bounces: 1,
                        chainRange: 110,
                        critChance: 0.08,
                        critMult: 3
                    },
                    {
                        range: 150,
                        fireRate: 7.5,
                        damage: 12,
                        projSpeed: 340,
                        magazine: 7,
                        reloadTime: 2.0,
                        idleReloadDelay: 2.5,
                        bounces: 1,
                        chainRange: 110,
                        critChance: 0.10,
                        critMult: 4
                    },
                    {
                        range: 170,
                        fireRate: 8.5,
                        damage: 14,
                        projSpeed: 360,
                        magazine: 8,
                        reloadTime: 1.8,
                        idleReloadDelay: 2.5,
                        bounces: 1,
                        chainRange: 110,
                        critChance: 0.12,
                        critMult: 5
                    }
                ]
            },
        };

        p.enemyTextures = {
            fast: p.loadImage('./img/units/enemy_fast.png'),
            normal: [p.loadImage('./img/units/enemy_normal.png'), p.loadImage('./img/units/enemy_normal1.png'), p.loadImage('./img/units/enemy_normal2.png')], 
            tank: p.loadImage('./img/units/enemy_tank.png'),
            regen: p.loadImage('./img/units/enemy_regen.png'),
            shield: p.loadImage('./img/units/enemy_shield.png'),
            split: [
                p.loadImage('./img/units/split1.png'),
                p.loadImage('./img/units/split2.png'),
            ],
            ghost: p.loadImage('./img/units/ghost.png'),
            jammer: p.loadImage('./img/units/jammer.png'),
            decoy_master: p.loadImage('./img/units/decoy_master.png'),
            buffer: p.loadImage('./img/units/buffer.png'),
            treasure: p.loadImage('./img/units/treasure.png'),
            chest: p.loadImage('./img/units/chest.png'),
            teleporter:  p.loadImage('./img/units/teleporter.png'),
            portal: p.loadImage('./img/units/portal.png'),
            boss_tank: [
                p.loadImage('./img/units/boss_tank_1.png'),
                p.loadImage('./img/units/boss_tank_2.png'),
                p.loadImage('./img/units/boss_tank_3.png')
            ],
            boss_split: [
                p.loadImage('./img/units/boss_split_0.png'),
                p.loadImage('./img/units/boss_split_1.png'),
                p.loadImage('./img/units/boss_split_2.png'),
                p.loadImage('./img/units/boss_split_3.png'),
                p.loadImage('./img/units/boss_split_4.png'),
            ],
            boss_trio : [
                p.loadImage('./img/units/boss_trio1.png'),
                p.loadImage('./img/units/boss_trio2.png'),
                p.loadImage('./img/units/boss_trio3.png'),
            ],
            boss_trio_elite: p.loadImage('./img/units/boss_trio_elite.png'),
            boss_summoner: p.loadImage('./img/units/boss_summoner.png'),
            end_game_unit: p.loadImage('./img/units/end_game_unit.png'),
            end_game_unit_hero: p.loadImage('./img/units/end_game_unit_hero.png'),
            boss_healer: p.loadImage('./img/units/boss_healer.png'),
            boss_warp: p.loadImage('./img/units/boss_warp.png'),
    
        };

        p.ENEMY_TYPES = {
            normal: {
                id: "normal",
                class: "normal",
                speed: 90,
                hp: 10,
                radius: 12,
                reward: 2,
                damage: 5,
                cost: 1,
                texture: () => p.enemyTextures.normal
            },

            fast: {
                id: "fast",
                class: "hero",
                speed: 140,
                hp: 20,
                radius: 16,
                reward: 5,
                damage: 10,
                cost: 2,
                hpBasedSpeedBoostMax: 0.7, // до +70% скорости при 0% среднего HP
                texture: () => p.enemyTextures.fast
            },

            tank: {
                id: "tank",
                class: "hero",
                speed: 55,
                hp: 45,
                radius: 18,
                shieldHits: 1, // ← сколько ударов блокирует
                shieldVfxTheme: "medieval",
                reward: 5,
                damage: 10,
                cost: 2,
                texture: () => p.enemyTextures.tank
            },

            regen: {
                id: "regen",
                class: "hero",
                speed: 65,
                hp: 35,
                regen: 5, // HP/sec
                radius: 18,
                reward: 6,
                damage: 10,
                cost: 3,

                texture: () => p.enemyTextures.regen
            },

            shield: {
                id: "shield",
                class: "hero",
                speed: 75,
                hp: 30,
                shieldHits: 6, // ← сколько ударов блокирует
                shieldVfxTheme: "medieval", //"tech" "medieval"
                radius: 18,
                reward: 7,
                damage: 10,
                cost: 3,

                texture: () => p.enemyTextures.shield
            },

            ghost: {
                id: "ghost",
                class: "hero",
                speed: 100,
                hp: 24,
                radius: 16,
                reward: 8,
                damage: 10,
                cost: 3,
                texture: () => p.enemyTextures.ghost,

                init(unit) {
                    unit.phaseTimer = 0;
                    unit.phasePeriod = 2.8;
                    unit.phaseDuration = 1.1;
                    unit.isPhased = false;
                    unit.ghostAlpha = 1;
                },

                onUpdate(unit, dt) {
                    unit.phaseTimer += dt;
                    const cyclePos = unit.phaseTimer % unit.phasePeriod;
                    unit.isPhased = cyclePos < unit.phaseDuration;

                    const targetAlpha = unit.isPhased ? 0.45 : 1;
                    unit.ghostAlpha = p.lerp(
                        unit.ghostAlpha ?? 1,
                        targetAlpha,
                        Math.min(1, dt * 10)
                    );
                }
            },

            jammer: {
                id: "jammer",
                class: "hero",
                speed: 68,
                hp: 52,
                radius: 16,
                reward: 10,
                damage: 10,
                cost: 4,
                texture: () => p.enemyTextures.jammer,

                init(unit) {
                    unit.jamTimer = Math.random() * 2;
                    unit.jamCooldown = 4.5;
                    unit.jamRadius = 170;
                    unit.jamDuration = 2;
                    unit.jamFireRateMult = 0.5;
                    unit.jamPulseFx = 0;
                },

                onUpdate(unit, dt, game) {
                    unit.jamTimer += dt;
                    unit.jamPulseFx = Math.max(0, (unit.jamPulseFx || 0) - dt * 2.4);

                    if (unit.jamTimer < unit.jamCooldown) return;
                    unit.jamTimer = 0;

                    game.jamTowersNearby(
                        unit,
                        unit.jamRadius,
                        unit.jamFireRateMult,
                        unit.jamDuration
                    );

                    unit.jamPulseFx = 1;
                }
            },
            
            buffer: {
                id: "buffer",
                class: "hero",
                speed: 70,
                hp: 40,
                radius: 15,
                reward: 9,
                damage: 10,
                cost: 3,
                texture: () => p.enemyTextures.buffer,

                init(unit) {
                    unit.speedAuraRadius = 170;
                    unit.speedAuraMinBoost = 0.2;
                    unit.speedAuraMaxBoost = 0.3;
                    unit.speedAuraPhase = 0;
                    unit.currentAuraSpeedMult = 1.2;
                },

                onUpdate(unit, dt, game) {
                    unit.speedAuraPhase += dt;
                    const wave = (Math.sin(unit.speedAuraPhase * 2) + 1) * 0.5;
                    const boost = p.lerp(unit.speedAuraMinBoost, unit.speedAuraMaxBoost, wave);
                    const speedMult = 1 + boost;
                    unit.currentAuraSpeedMult = speedMult;

                    for (const other of game.units) {
                        if (!other.alive || other.reachedBase) continue;
                        if (other === unit) continue;

                        const dx = other.x - unit.x;
                        const dy = other.y - unit.y;
                        const dist = Math.hypot(dx, dy);

                        if (dist <= unit.speedAuraRadius) {
                            other.applyAuraSpeed(speedMult, 0.2);
                        }
                    }
                }
            },

            treasure: {
                id: "treasure",
                class: "hero",
                speed: 78,
                hp: 35,
                radius: 15,
                reward: 6,
                damage: 10,
                cost: 2,
                chestGold: 20,
                chestLifetime: 5,
                chestDropChance: 1,
                texture: () => p.enemyTextures.treasure
            },

            teleporter: {
                id: "teleporter",
                class: "hero",
                speed: 72,
                hp: 38,
                radius: 15,
                reward: 10,
                damage: 10,
                cost: 4,
                texture: () => p.enemyTextures.teleporter,

                init(unit) {
                    unit.tpCooldown = 4.5;
                    unit.tpTimer = 2 + Math.random() * 1.2;
                    unit.tpDistance = 150;
                    unit.teleportFx = 0;
                    unit.teleportFromX = unit.x;
                    unit.teleportFromY = unit.y;
                },

                onUpdate(unit, dt) {
                    unit.tpTimer -= dt;
                    unit.teleportFx = Math.max(0, (unit.teleportFx || 0) - dt * 2.5);

                    if (unit.tpTimer > 0) return;
                    if (!unit.alive || unit.reachedBase) return;

                    const jumpDist = unit.tpDistance * (0.9 + Math.random() * 0.25);
                    const fromX = unit.x;
                    const fromY = unit.y;
                    unit.teleportForward(jumpDist);

                    const moved = Math.hypot(unit.x - fromX, unit.y - fromY) > 0.5;
                    unit.tpTimer = unit.tpCooldown;

                    if (moved) {
                        unit.teleportFromX = fromX;
                        unit.teleportFromY = fromY;
                        unit.teleportFx = 1;
                    }
                }
            },

            decoy_master: {
                id: "decoy_master",
                class: "hero",
                speed: 76,
                hp: 44,
                radius: 15,
                reward: 10,
                damage: 10,
                cost: 4,
                texture: () => p.enemyTextures.decoy_master,

                init(unit) {
                    unit.decoyCastTimer = 2 + Math.random() * 1.5;
                    unit.decoyCastCooldown = 4;
                    unit.decoyPerCast = 3;
                    unit.decoySpread = 26;
                    unit.decoyLifetime = 2.5;
                    unit.decoyCastFx = 0;
                },

                onUpdate(unit, dt, game) {
                    unit.decoyCastTimer -= dt;
                    unit.decoyCastFx = Math.max(0, (unit.decoyCastFx || 0) - dt * 2.2);

                    if (unit.decoyCastTimer > 0) return;
                    unit.decoyCastTimer = unit.decoyCastCooldown;

                    game.spawnDecoyPack(
                        unit,
                        unit.decoyPerCast,
                        unit.decoySpread,
                        unit.decoyLifetime
                    );
                    unit.decoyCastFx = 1;
                }
            },

            // Internal summon type for decoy_master. Not added to wave pool.
            decoy: {
                id: "decoy",
                class: "normal",
                speed: 88,
                hp: 2,
                radius: 12,
                reward: 0,
                damage: 0,
                noBaseDamage: true,
                chestDropChance: 0,
                noScore: true,
                targetPriority: 10,
                texture: () => p.enemyTextures.decoy_master,

                init(unit) {
                    unit.isDecoy = true;
                    unit.hpMax = this.hp;
                    unit.hp = unit.hpMax;
                    unit.decoyLifetime = unit.decoyLifetime || 2.5;
                    unit.decoyTimer = unit.decoyTimer || 0;
                },

                onUpdate(unit, dt) {
                    unit.decoyTimer += dt;
                    if (unit.decoyTimer >= unit.decoyLifetime) {
                        unit.die("decoy");
                    }
                }
            },

            split: {
                id: "split",
                class: "hero",
                speed: 65,
                hp: 20,
                radius: 16,
                reward: 3,
                damage: 3,

                cost: 3,
                maxSplit: 1,    

                textures: p.enemyTextures.split,


                // Инициализация при создании
                init(unit) {

                    const lvl = unit.splitLevel || 0;
                    // HP
                    unit.hpMax = this.hp * Math.pow(0.5, lvl);
                    unit.hp = unit.hpMax;
                    // Скорость
                    unit.speed = this.speed * (1 + lvl * 0.5);
                    // Размер
                    unit.r = this.radius * Math.pow(0.8, lvl);
                    // Текстура
                    unit.texture = this.textures[lvl] || this.textures[this.textures.length - 1] || null;
                },

                // Деление при смерти
                onDeath(unit, game) {

                    const lvl = unit.splitLevel || 0;

                    if (lvl >= this.maxSplit) return;

                    const noReward = unit.noRewardChildren || (unit.reward ?? 0) <= 0;
                    for (let i = 0; i < 2; i++) {

                        game.spawnSplitEnemy(
                            {
                                x: unit.x,
                                y: unit.y,
                                i: unit.i,
                                level: lvl + 1,
                                id: unit.id,
                                endlessTier: unit.endlessBossTier ?? 0,
                                endlessRole: "escort",
                                noRewardChildren: noReward,
                                noChestDrop: true
                            },
                            !noReward
                        );
                    }
                }
            },

            end_game_unit:{
                id: "end_game_unit",
                class: "hero",
                speed: 70,
                hp: 100,
                radius: 15,
                reward: 1,
                damage: 10,
                cost: 3,
                texture: () => p.enemyTextures.end_game_unit,

                init(unit) {
                    const wave = p.game.wave;
                    const slowResistance = Math.min(0.9, 0.1 + Math.floor(Math.max(0, wave - 16) / 10) * 0.1);
                    unit.hpMax = 10 + (p.game.wave * 10);
                    unit.hp = unit.hpMax;
                    unit.speed = 30 + (p.game.wave * 5);    
                    unit.r = 10 + Math.min(wave, 40);
                    unit.slowResistance = slowResistance;
                },
            },

            boss_tank: {
                id: "boss_tank",
                class: "boss",
                speed: 45,
                hp: 300,
                radius: 22,
                shieldVfxTheme: "medieval", //"tech" "medieval"
                cost: 15,
                reward: 40,
                damage: 15,

                // ⭐ ТРИ ФАЗЫ
                textures: p.enemyTextures.boss_tank,

                init(unit) {

                    unit.phase = 1;

                    unit.maxHp = this.hp;
                    unit.hp = unit.maxHp;

                    unit.baseSpeed = this.speed;
                    unit.speed = this.speed;

                    unit.shieldHits = 0;

                    unit.repairing = false;
                    unit.repairTimer = 0;

                    unit.texture = this.textures[0] || this.textures[this.textures.length - 1] || null;
                },

                onUpdate(unit, dt, game) {

                    const hpRatio = unit.hp / unit.maxHp;

                    // ===== ФАЗА 2: ЩИТ =====
                    if (hpRatio <= 0.7 && unit.phase === 1) {

                        unit.phase = 2;

                        unit.shieldHits = unit.tankPhase2ShieldHits ?? 6;
                        unit.speed *= unit.tankPhase2SpeedMult ?? 0.7;

                        unit.texture = this.textures[1] || this.textures[0] || null;
                    }

                    // ===== ФАЗА 3: РЕМОНТ =====
                    if (hpRatio <= 0.3 && unit.phase === 2) {
                        unit.shieldHits = unit.tankPhase3ShieldHits ?? 4;
                        unit.phase = 3;

                        unit.repairing = true;
                        unit.repairTimer = 0;

                        unit.speed = 0;
                        unit.baseSpeed = 0;
                        unit.texture = this.textures[2] || this.textures[1] || this.textures[0] || null;
                    }

                    // ===== РЕМОНТ =====
                    if (unit.repairing) {
                        
                        unit.repairTimer += dt;
                        // лечим 3 секунды
                        if (unit.repairTimer < 3) {
                        
                            unit.hp = Math.min(
                                unit.maxHp * 1,
                                unit.hp + (unit.tankRepairPerSecond ?? 35) * dt
                            );

                        } else {

                            // закончил чиниться
                            unit.repairing = false;
                            unit.baseSpeed = (unit.tankCruiseSpeed ?? this.speed) * (unit.tankPostRepairSpeedMult ?? 2);
                            unit.speed = unit.baseSpeed;
                        }
                    }
                }
            },

            boss_trio: {
                id: "boss_trio",
                class: "boss",
                speed: 55,
                hp: 90,
                trioReviveDuration: 12,
                radius: 18,
                reward: 10,
                damage: 15,
                cost: 3,

                textures: p.enemyTextures.boss_trio,

                init(unit) {
                    const textures = this.textures || [];
                    const idx = Number.isInteger(unit.trioIndex) ? unit.trioIndex : 0;
                    unit.texture = textures[idx] || textures[idx % textures.length] || textures[0] || null;
                }
            },

            boss_trio_elite: {
                id: "boss_trio_elite",
                class: "boss",
                speed: 70,
                hp: 260,
                radius: 24,
                reward: 10,
                damage: 15,
                cost: 6,

                texture: () => p.enemyTextures.boss_trio_elite
            },

            boss_split: {
                id: "boss_split",
                class: "boss",
                speed: 60,
                hp: 90,
                radius: 18,
                reward: 2, // 2*31 = 62
                damage: 5,

                cost: 14,
                maxSplit: 4, // сколько раз делится (0→1→2→3)    

                textures: p.enemyTextures.boss_split,


                // Инициализация при создании
                init(unit) {

                    const lvl = unit.splitLevel || 0;

                    // HP
                    unit.hpMax = this.hp * Math.pow(0.5, lvl);
                    unit.hp = unit.hpMax;

                    // Скорость
                    unit.speed = this.speed * (1 + lvl * 0.5);

                    // Размер
                    unit.r = this.radius * Math.pow(0.8, lvl);

                    // Текстура
                    unit.texture = this.textures[lvl] || this.textures[this.textures.length - 1] || null;
                },

                // Деление при смерти
                onDeath(unit, game) {

                    const lvl = unit.splitLevel || 0;

                    if (lvl >= this.maxSplit) return;

                    const noReward = unit.noRewardChildren || (unit.reward ?? 0) <= 0;
                    for (let i = 0; i < 2; i++) {

                        game.spawnSplitEnemy(
                            {
                                x: unit.x,
                                y: unit.y,
                                i: unit.i,
                                level: lvl + 1,
                                id: unit.id,
                                // Children keep endless wave scaling, but not the root boss role.
                                endlessTier: unit.endlessBossTier ?? 0,
                                endlessRole: "escort",
                                noRewardChildren: noReward,
                                noChestDrop: true
                            },
                            !noReward
                        );
                    }
                }
            },

            boss_summoner: {
                id: "boss_summoner",
                class: "boss",
                speed: 50,
                hp: 220,
                radius: 21,
                reward: 60,
                damage: 15,
                cost: 14,

                texture: () => p.enemyTextures.boss_summoner,

                init(unit) {
                    unit.portalCastTimer = 1.2;
                    unit.portalCooldown = 6.4;
                    unit.portalCastTime = 0.9;
                    unit.portalCharges = 3;
                    unit.portalLifetime = 4.4;
                    unit.portalOpenTime = 0.6;
                    unit.portalSpawnInterval = 0.8;
                    unit.portalMaxActive = 1;
                    unit.portalHp = 55;
                    unit.portalUnitThreshold = 11;
                    unit.portalCastMoveSpeedMult = 0.22;
                    unit.portalGuardDamageMult = 0.42;
                    unit.portalGuardDuration = 1.15;
                    unit.summonActiveCap = 6;
                    unit.portalCasting = false;
                    unit.portalGuardUntil = 0;
                    unit.summonFx = 0;
                    unit.moveBaseSpeed = null;
                },

                onUpdate(unit, dt, game) {
                    if (unit.moveBaseSpeed == null && unit.baseSpeed > 0) {
                        unit.moveBaseSpeed = unit.baseSpeed;
                    }

                    const now = game?.simTime ?? 0;
                    unit.summonFx = Math.max(0, (unit.summonFx || 0) - dt * 1.8);
                    unit.baseSpeed = unit.moveBaseSpeed || unit.baseSpeed;
                    unit.isPhased = false;

                    if ((unit.portalGuardUntil ?? 0) > now) {
                        unit.damageTakenMult = Math.min(
                            unit.damageTakenMult ?? 1,
                            unit.portalGuardDamageMult ?? 1
                        );
                    }

                    if (unit.portalCasting) {
                        unit.baseSpeed = (unit.moveBaseSpeed || unit.baseSpeed) * (unit.portalCastMoveSpeedMult ?? 0.2);
                        unit.portalCastTimer -= dt;
                        unit.damageTakenMult = Math.min(
                            unit.damageTakenMult ?? 1,
                            unit.portalGuardDamageMult ?? 1
                        );

                        if (unit.portalCastTimer <= 0) {
                            const activePortals = game.activeSummonPortals ?? 0;
                            const activeSummons = game.activeBossSummonedUnits ?? 0;
                            const activeCombatUnits = Math.max(0, (game.activeAliveUnits ?? 0) - activePortals);
                            const summonCap = Math.max(0, unit.summonActiveCap ?? 0);
                            const portalCharges = Math.max(0, Math.min(unit.portalCharges ?? 0, summonCap - activeSummons));

                            if (
                                portalCharges > 0 &&
                                activePortals < Math.max(1, unit.portalMaxActive ?? 1) &&
                                activeCombatUnits < (unit.portalUnitThreshold ?? 11)
                            ) {
                                game.spawnSummonPortal({
                                    x: unit.x,
                                    y: unit.y,
                                    i: unit.i,
                                    endlessTier: unit.endlessBossTier ?? 0,
                                    portalCharges,
                                    portalLifetime: unit.portalLifetime,
                                    portalOpenTime: unit.portalOpenTime,
                                    portalSpawnInterval: unit.portalSpawnInterval,
                                    portalHp: unit.portalHp,
                                    summonActiveCap: unit.summonActiveCap
                                }, true);
                            }

                            unit.portalCasting = false;
                            unit.portalCastTimer = unit.portalCooldown;
                            unit.baseSpeed = unit.moveBaseSpeed || unit.baseSpeed;
                            unit.summonFx = 1;
                        }

                        return;
                    }

                    unit.portalCastTimer -= dt;

                    if (unit.portalCastTimer <= 0) {
                        const activePortals = game.activeSummonPortals ?? 0;
                        const activeSummons = game.activeBossSummonedUnits ?? 0;
                        const activeCombatUnits = Math.max(0, (game.activeAliveUnits ?? 0) - activePortals);
                        if (
                            activePortals >= Math.max(1, unit.portalMaxActive ?? 1) ||
                            activeSummons >= Math.max(0, unit.summonActiveCap ?? 0) ||
                            activeCombatUnits >= (unit.portalUnitThreshold ?? 11)
                        ) {
                            unit.portalCastTimer = 0.4;
                            return;
                        }

                        unit.portalCasting = true;
                        unit.portalCastTimer = unit.portalCastTime;
                        unit.portalGuardUntil = now + Math.max(
                            unit.portalGuardDuration ?? 0,
                            unit.portalCastTime ?? 0
                        );
                        unit.summonFx = 1;
                    }
                }
            },

            summon_portal: {
                id: "summon_portal",
                class: "hero",
                speed: 0,
                hp: 26,
                radius: 20,
                reward: 0,
                damage: 0,
                cost: 0,
                noBaseDamage: true,
                noScore: true,
                chestDropChance: 0,
                noChestDrop: true,
                targetPriority: 18,
                texture: () => p.enemyTextures.portal,

                init(unit) {
                    unit.portalInvulnerable = true;
                    unit.hpMax = Math.max(1, unit.portalHp ?? 26);
                    unit.hp = unit.hpMax;
                    unit.portalLifetime = Math.max(0.8, unit.portalLifetime ?? 4.4);
                    unit.portalTimer = 0;
                    unit.portalOpenTime = Math.max(0.2, unit.portalOpenTime ?? 0.6);
                    unit.portalSpawnInterval = Math.max(0.3, unit.portalSpawnInterval ?? 0.82);
                    unit.portalSpawnTimer = unit.portalOpenTime;
                    unit.portalCharges = Math.max(0, Math.round(unit.portalCharges ?? 3));
                    unit.portalInitialCharges = Math.max(1, unit.portalCharges);
                    unit.portalFx = 1;
                    unit.summonActiveCap = Math.max(0, unit.summonActiveCap ?? 6);
                    unit.portalPulse = Math.random() * Math.PI * 2;
                },

                onUpdate(unit, dt, game) {
                    unit.baseSpeed = 0;
                    unit.speed = 0;
                    unit.portalTimer += dt;
                    unit.portalPulse += dt * 4;
                    unit.portalFx = Math.max(0, (unit.portalFx || 0) - dt * 1.5);

                    if (unit.portalTimer >= unit.portalLifetime) {
                        unit.die("portal");
                        return;
                    }

                    if (unit.portalCharges <= 0) {
                        if (unit.portalTimer >= unit.portalOpenTime + 0.2) {
                            unit.die("portal");
                        }
                        return;
                    }

                    unit.portalSpawnTimer -= dt;
                    if (unit.portalSpawnTimer > 0) return;

                    const activeSummons = game.activeBossSummonedUnits ?? 0;
                    if (activeSummons >= unit.summonActiveCap) {
                        unit.portalSpawnTimer = 0.25;
                        return;
                    }

                    game.spawnSplitEnemy({
                        x: unit.x,
                        y: unit.y,
                        i: unit.i,
                        level: 0,
                        id: "split",
                        endlessTier: unit.endlessBossTier ?? 0,
                        endlessRole: "escort",
                        bossSummoned: true,
                        targetPriority: 24,
                        noChestDrop: true
                    }, false, true);

                    unit.portalCharges -= 1;
                    unit.portalSpawnTimer = unit.portalCharges > 0
                        ? unit.portalSpawnInterval
                        : 0.2;
                    unit.portalFx = 1;
                }
            },
            
            boss_healer: {
                id: "boss_healer",
                class: "boss",
                speed: 50,
                hp: 350,
                radius: 20,
                reward: 60,
                damage: 15,
                cost: 16,

                texture: () => p.enemyTextures.boss_healer,
                
                init(unit) {
                    unit.healTimer = 0;
                    unit.healCooldown = 2;
                    unit.healRadius = 200;
                    unit.healAmount = 7;
                    unit.healNeighborCacheDuration = 0.18;

                    // ⭐ визуал
                    unit.healPulse = 0;
                    unit.healFlash = 0;
                },

                onUpdate(unit, dt, game) {
                  
                    unit.healTimer += dt;
                 
                    if (unit.healTimer >= unit.healCooldown) {

                        unit.healTimer = 0;

                        
                        // лечим союзников
                        const healedAllies = game.healNearby(
                            unit,
                            unit.healRadius,
                            unit.healAmount,
                            unit.healNeighborCacheDuration
                        );

                        // чуть лечим себя
                        const selfHealAmount = unit.getAdjustedHealing(unit.healAmount * 0.4);
                        const prevHp = unit.hp;
                        unit.hp = Math.min(
                            unit.hpMax,
                            unit.hp + selfHealAmount
                        );
                        if (unit.hp > prevHp || healedAllies > 0) {
                            if (unit.hp > prevHp) {
                                unit.healFxTimer = Math.max(unit.healFxTimer || 0, 0.6);
                            }
                            unit.healFlash = 1;
                        }
                    }
                    unit.healFlash = Math.max(0, unit.healFlash - dt * 2);
                }
            },

            boss_warp: {
                id: "boss_warp",
                class: "boss",
                speed: 55,
                hp: 400,
                radius: 20,
                reward: 60,
                damage: 15,
                cost: 15,

                texture: () => p.enemyTextures.boss_warp,

                init(unit) {
                    unit.tpCooldownMin = 4;
                    unit.tpCooldownMax = 6;
                    unit.tpTimer = 2 + Math.random() * 2;
                    unit.tpDistance = 160;
                    unit.teleportFx = 0;
                    unit.teleportFromX = unit.x;
                    unit.teleportFromY = unit.y;

                    unit.echoLifetime = 2;
                    unit.echoPriority = 12;
                },

                onUpdate(unit, dt, game) {
                    unit.tpTimer -= dt;
                    unit.teleportFx = Math.max(0, (unit.teleportFx || 0) - dt * 2.5);

                    if (unit.tpTimer > 0) return;
                    if (!unit.alive || unit.reachedBase) return;

                    const jumpDist = unit.tpDistance * (0.9 + Math.random() * 0.3);
                    const fromX = unit.x;
                    const fromY = unit.y;
                    const fromI = unit.i;

                    unit.teleportForward(jumpDist);

                    const moved = Math.hypot(unit.x - fromX, unit.y - fromY) > 0.5;
                    unit.tpTimer = unit.tpCooldownMin + Math.random() * (unit.tpCooldownMax - unit.tpCooldownMin);

                    if (!moved) return;

                    unit.teleportFromX = fromX;
                    unit.teleportFromY = fromY;
                    unit.teleportFx = 1;

                    const echoType = p.ENEMY_TYPES.decoy;
                    if (echoType) {
                        const echo = new Unit(
                            game,
                            unit.path,
                            echoType,
                            {
                                targetPriority: unit.echoPriority ?? 12,
                                noBaseDamage: true
                            },
                            false
                        );

                        echo.x = fromX;
                        echo.y = fromY;
                        echo.i = fromI;
                        echo.hpMax = Math.max(1, unit.hp);
                        echo.hp = echo.hpMax;
                        echo.decoyLifetime = unit.echoLifetime ?? 3;
                        echo.decoyTimer = 0;
                        echo.baseSpeed = 0;
                        echo.speed = 0;
                        echo.texture = p.enemyTextures.boss_warp || echo.texture;

                        game.units.push(echo);
                    }
                }
            },
        };

        // Boss ability modules (mix & match safely)
        p.BOSS_ABILITIES = {
            regen: {
                id: "regen",
                isActiveAbility: false,
                apply(unit) {
                    const base = p.ENEMY_TYPES?.regen;
                    const regenValue = base?.regen ?? 5;
                    unit.regen = Math.max(unit.regen || 0, regenValue);
                }
            },
            shield: {
                id: "shield",
                isActiveAbility: false,
                apply(unit) {
                    const base = p.ENEMY_TYPES?.shield;
                    const hits = base?.shieldHits ?? 6;
                    unit.shieldHits = Math.max(unit.shieldHits || 0, hits);
                    unit.shieldVfxTheme = unit.shieldVfxTheme || base?.shieldVfxTheme || "medieval";
                }
            },
            ghost: {
                id: "ghost",
                isActiveAbility: true,
                apply(unit) {
                    unit.hasGhostAbility = true;
                    unit.phaseDuration = unit.phaseDuration ?? 0.85;
                    unit.phaseActiveUntil = unit.phaseActiveUntil ?? 0;
                    unit.ghostAlpha = unit.ghostAlpha ?? 1;
                },

                update(unit, dt, game) {
                    const now = game?.simTime ?? 0;
                    const phasedByAbility = now < (unit.phaseActiveUntil ?? 0);
                    if (phasedByAbility) {
                        unit.isPhased = true;
                    }

                    const targetAlpha = (phasedByAbility || unit.isPhased) ? 0.45 : 1;
                    unit.ghostAlpha = p.lerp(
                        unit.ghostAlpha ?? 1,
                        targetAlpha,
                        Math.min(1, dt * 10)
                    );
                },

                activate(unit, game) {
                    const now = game?.simTime ?? 0;
                    const duration = Math.max(0.5, unit.phaseDuration ?? 0.85);
                    unit.phaseActiveUntil = now + duration;
                    return {
                        success: true,
                        lockDuration: duration,
                        cooldownScale: 0.5
                    };
                }
            },
            jammer: {
                id: "jammer",
                isActiveAbility: true,
                apply(unit) {
                    unit.hasJammerAbility = true;
                    unit.jamRadius = 170;
                    unit.jamDuration = 2;
                    unit.jamFireRateMult = 0.5;
                    unit.jamPulseFx = 0;
                },

                update(unit, dt) {
                    unit.jamPulseFx = Math.max(0, (unit.jamPulseFx || 0) - dt * 2.4);
                },

                activate(unit, game) {
                    if (!game) return false;

                    game.jamTowersNearby(
                        unit,
                        unit.jamRadius,
                        unit.jamFireRateMult,
                        unit.jamDuration
                    );

                    unit.jamPulseFx = 1;
                    return {
                        success: true,
                        lockDuration: Math.max(0.25, unit.jamDuration ?? 2),
                        cooldownScale: 0.5
                    };
                }
            },
            teleporter: {
                id: "teleporter",
                isActiveAbility: true,
                apply(unit) {
                    unit.hasTeleporterAbility = true;
                    unit.tpDistance = 115;
                    unit.teleportFx = 0;
                    unit.teleportFromX = unit.x;
                    unit.teleportFromY = unit.y;
                },

                update(unit, dt) {
                    unit.teleportFx = Math.max(0, (unit.teleportFx || 0) - dt * 2.5);
                },

                activate(unit) {
                    if (!unit.alive || unit.reachedBase) return false;

                    const jumpDist = unit.tpDistance * (0.9 + Math.random() * 0.25);
                    const fromX = unit.x;
                    const fromY = unit.y;
                    unit.teleportForward(jumpDist);

                    const moved = Math.hypot(unit.x - fromX, unit.y - fromY) > 0.5;
                    if (!moved) return false;

                    unit.teleportFromX = fromX;
                    unit.teleportFromY = fromY;
                    unit.teleportFx = 1;
                    return {
                        success: true
                    };
                }
            },
            decoy_master: {
                id: "decoy_master",
                isActiveAbility: true,
                apply(unit) {
                    unit.hasDecoyMasterAbility = true;
                    unit.decoyPerCast = 3;
                    unit.decoySpread = 26;
                    unit.decoyLifetime = 2.5;
                    unit.decoyCastFx = 0;
                },

                update(unit, dt) {
                    unit.decoyCastFx = Math.max(0, (unit.decoyCastFx || 0) - dt * 2.2);
                },

                activate(unit, game) {
                    if (!game) return false;

                    game.spawnDecoyPack(
                        unit,
                        unit.decoyPerCast,
                        unit.decoySpread,
                        unit.decoyLifetime
                    );
                    unit.decoyCastFx = 1;
                    return {
                        success: true,
                        lockDuration: Math.max(0.4, unit.decoyLifetime ?? 2.5),
                        cooldownScale: 0.5
                    };
                }
            }
        };

        p.applyBossAbilities = function(unit, abilityIds, game) {
            if (!unit) return;
            const list = Array.isArray(abilityIds)
                ? abilityIds
                : (abilityIds ? [abilityIds] : []);
            const clean = [];
            const seen = new Set();
            for (const id of list) {
                if (!id || seen.has(id)) continue;
                seen.add(id);
                clean.push(id);
            }

            unit.bossAbilities = clean;
            if (clean.length === 0) return;
            unit.bossActiveAbilityIds = clean.filter(id => p.BOSS_ABILITIES?.[id]?.isActiveAbility);
            unit.useRandomBossAbilityCycle = false;

            const addUpdateHook = (fn) => {
                if (typeof fn !== "function") return;
                const prev = unit.onUpdate;
                unit.onUpdate = (dt) => {
                    if (prev) prev(dt);
                    fn(unit, dt, game);
                };
            };

            for (const id of clean) {
                const ability = p.BOSS_ABILITIES?.[id];
                if (!ability || typeof ability.apply !== "function") continue;
                ability.apply(unit, game, { addUpdateHook });
            }

            addUpdateHook((u, dt, g) => {
                for (const id of clean) {
                    const ability = p.BOSS_ABILITIES?.[id];
                    ability?.update?.(u, dt, g);
                }

                if (!u.useRandomBossAbilityCycle) return;
                if (!Array.isArray(u.bossActiveAbilityIds) || u.bossActiveAbilityIds.length === 0) return;
                const now = g?.simTime ?? 0;
                if (now < (u.bossAbilityLockUntil ?? 0)) return;

                u.bossAbilityTimer = (u.bossAbilityTimer ?? p.rollBossAbilityCooldown(u)) - dt;
                if (u.bossAbilityTimer > 0) return;

                const result = p.activateRandomBossAbility(u, g);
                if (result?.success) {
                    const lockDuration = Math.max(0, result.lockDuration ?? 0);
                    const cooldownScale = Math.max(0.25, result.cooldownScale ?? 1);
                    u.bossAbilityLockUntil = now + lockDuration;
                    u.bossAbilityTimer = p.rollBossAbilityCooldown(u, cooldownScale);
                    return;
                }

                u.bossAbilityTimer = result
                    ? p.rollBossAbilityCooldown(u)
                    : Math.max(1.25, (u.bossAbilityCooldownMin ?? 4.8) * 0.45);
            });
        };

        p.rollBossAbilityCooldown = function(unit, scale = 1) {
            const min = Math.max(0.8, unit?.bossAbilityCooldownMin ?? 5.2);
            const max = Math.max(min, unit?.bossAbilityCooldownMax ?? min);
            return (min + Math.random() * (max - min)) * Math.max(0.25, scale || 1);
        };

        p.activateRandomBossAbility = function(unit, game) {
            const pool = Array.isArray(unit?.bossActiveAbilityIds) ? unit.bossActiveAbilityIds : [];
            if (pool.length === 0) return false;

            const freshPool = pool.filter(id => id !== unit.lastBossAbilityId);
            const groups = [
                freshPool,
                pool.filter(id => id === unit.lastBossAbilityId)
            ];

            for (const group of groups) {
                const candidates = [...group];
                while (candidates.length > 0) {
                    const idx = Math.floor(Math.random() * candidates.length);
                    const id = candidates.splice(idx, 1)[0];
                    const ability = p.BOSS_ABILITIES?.[id];
                    if (!ability || typeof ability.activate !== "function") continue;
                    const activation = ability.activate(unit, game);
                    const success = typeof activation === "object"
                        ? Boolean(activation?.success)
                        : Boolean(activation);
                    if (!success) continue;
                    unit.lastBossAbilityId = id;
                    if (typeof activation === "object") {
                        return {
                            success: true,
                            lockDuration: Math.max(0, activation.lockDuration ?? 0),
                            cooldownScale: Math.max(0.25, activation.cooldownScale ?? 1)
                        };
                    }
                    return { success: true };
                }
            }

            return false;
        };

        p.configureEndlessBossAbilityCycle = function(unit, tier = 1) {
            if (!unit) return;

            const activeAbilityIds = Array.isArray(unit.bossActiveAbilityIds)
                ? unit.bossActiveAbilityIds
                : [];
            unit.useRandomBossAbilityCycle = activeAbilityIds.length > 0;
            unit.lastBossAbilityId = null;
            unit.bossAbilityLockUntil = 0;

            if (!unit.useRandomBossAbilityCycle) {
                unit.bossAbilityTimer = 0;
                return;
            }

            const baseCooldown = Math.max(2.8, 6.2 - tier * 0.22);
            unit.bossAbilityCooldownMin = Math.max(2.4, baseCooldown - 0.4);
            unit.bossAbilityCooldownMax = Math.max(
                unit.bossAbilityCooldownMin + 0.3,
                baseCooldown + 0.45
            );
            unit.bossAbilityTimer = 2.24 + Math.random() * 0.96;
        };

        p.applyEndlessWaveScaling = function(unit, tier = 1, role = "escort") {
            if (!unit || tier <= 0) return;

            const isBossRole = role === "boss";
            const hpMult = isBossRole ? 1 : 1.35 + tier * 0.24;
            const speedMult = isBossRole
                ? 1 + Math.min(0.28, tier * 0.04)
                : 1 + Math.min(0.2, tier * 0.03);
            const rewardMult = isBossRole
                ? 1.5 + tier * 0.22
                : 1.1 + tier * 0.1;
            const damageMult = isBossRole
                ? 1.2 + tier * 0.08
                : 1.05 + tier * 0.05;
            const sizeMult = isBossRole
                ? 1 + Math.min(0.2, tier * 0.03)
                : 1 + Math.min(0.12, tier * 0.02);

            if (isBossRole) {
                const bossHpProfile = {
                    boss_trio: 0.42,
                    boss_tank: 1.05,
                    boss_summoner: 0.94,
                    boss_healer: 0.98,
                    boss_warp: 1
                };
                const profileMult = bossHpProfile[unit.id] ?? 1;
                const targetBossHp = (430 + tier * 95) * profileMult;

                if (typeof unit.hpMax === "number") {
                    unit.hpMax = Math.max(1, targetBossHp);
                }
                if (typeof unit.maxHp === "number") {
                    unit.maxHp = Math.max(1, targetBossHp);
                }

                const normalizedBossHp = unit.maxHp ?? unit.hpMax ?? targetBossHp;
                if (typeof unit.hp === "number") {
                    unit.hp = normalizedBossHp;
                }

                if (unit.id === "boss_trio") {
                    unit.trioReviveDuration = Math.max(unit.trioReviveDuration ?? 0, 16);
                }
            } else {
                if (typeof unit.hpMax === "number") {
                    unit.hpMax = Math.max(1, unit.hpMax * hpMult);
                }
                if (typeof unit.maxHp === "number") {
                    unit.maxHp = Math.max(1, unit.maxHp * hpMult);
                }

                const maxHpRef = unit.maxHp ?? unit.hpMax;
                if (typeof unit.hp === "number" && typeof maxHpRef === "number") {
                    unit.hp = Math.min(maxHpRef, unit.hp * hpMult);
                }
            }

            const maxHpRef = unit.maxHp ?? unit.hpMax;
            if (typeof unit.speed === "number") {
                unit.speed *= speedMult;
            }
            if (typeof unit.reward === "number") {
                unit.reward = unit.reward > 0
                    ? Math.max(1, Math.round(unit.reward * rewardMult))
                    : 0;
            }
            if (typeof unit.contactDamage === "number") {
                unit.contactDamage = Math.max(1, Math.round(unit.contactDamage * damageMult));
            }
            if (typeof unit.r === "number") {
                unit.r *= sizeMult;
            }
            if (typeof unit.regen === "number" && unit.regen > 0) {
                unit.regen *= isBossRole ? (1.32 + tier * 0.144) : (1.12 + tier * 0.064);
            }
            if (typeof unit.healAmount === "number" && unit.healAmount > 0) {
                unit.healAmount *= isBossRole ? (1.45 + tier * 0.18) : (1.1 + tier * 0.08);
            }
            if (typeof unit.shieldHits === "number" && unit.shieldHits > 0) {
                unit.shieldHits += isBossRole
                    ? (2 + tier * 2)
                    : Math.max(1, Math.floor(tier * 0.8));
            }

            if (!isBossRole) return;

            unit.isEndlessBoss = true;
            unit.endlessBossTier = tier;

            if (unit.id === "boss_tank") {
                unit.tankCruiseSpeed = unit.speed;
                unit.tankPhase2ShieldHits = 10 + tier * 3;
                unit.tankPhase3ShieldHits = 6 + tier * 2;
                unit.tankPhase2SpeedMult = Math.max(0.68, 0.84 - tier * 0.03);
                unit.tankRepairPerSecond = 60 + tier * 20;
                unit.tankPostRepairSpeedMult = 1.9 + tier * 0.08;
            }

            if (typeof unit.summonActiveCap === "number") {
                unit.summonActiveCap = unit.id === "boss_summoner"
                    ? Math.min(10, unit.summonActiveCap + Math.ceil(tier / 3))
                    : Math.min(14, unit.summonActiveCap + tier);
            }
            if (typeof unit.portalCharges === "number") {
                unit.portalCharges = Math.min(4, unit.portalCharges + Math.floor((tier + 1) / 4));
            }
            if (typeof unit.portalMaxActive === "number") {
                unit.portalMaxActive = tier >= 7
                    ? Math.max(unit.portalMaxActive, 2)
                    : unit.portalMaxActive;
            }
            if (typeof unit.portalSpawnInterval === "number") {
                unit.portalSpawnInterval = Math.max(0.55, unit.portalSpawnInterval - tier * 0.03);
            }
            if (typeof unit.portalLifetime === "number") {
                unit.portalLifetime = Math.min(6.2, unit.portalLifetime + tier * 0.16);
            }
            if (typeof unit.portalOpenTime === "number") {
                unit.portalOpenTime = Math.max(0.35, unit.portalOpenTime - tier * 0.015);
            }
            if (typeof unit.portalCooldown === "number") {
                unit.portalCooldown = Math.max(4.2, unit.portalCooldown - tier * 0.14);
            }
            if (typeof unit.portalCastTime === "number") {
                unit.portalCastTime = Math.max(0.6, unit.portalCastTime - tier * 0.02);
            }
            if (typeof unit.portalHp === "number") {
                unit.portalHp *= Math.min(2.2, 1 + tier * 0.16);
            }
            if (typeof unit.portalGuardDamageMult === "number") {
                unit.portalGuardDamageMult = Math.max(0.3, unit.portalGuardDamageMult - tier * 0.015);
            }

            if (typeof unit.healRadius === "number") {
                unit.healRadius += 35 + tier * 20;
            }

            if (unit.id === "boss_healer") {
                if (typeof unit.healCooldown === "number") {
                    unit.healCooldown = Math.min(3.2, unit.healCooldown + 0.2 * tier);
                }
                if (typeof unit.healRadius === "number") {
                    unit.healRadius = Math.min(unit.healRadius, 185 + tier * 14);
                }
                if (typeof unit.healAmount === "number") {
                    unit.healAmount = Math.min(unit.healAmount, 8.5 + tier * 1.6);
                }
            }

            if (typeof unit.tpDistance === "number") {
                unit.tpDistance += 8 + tier * 10;
            }
            if (typeof unit.tpCooldown === "number") {
                unit.tpCooldown = Math.max(3.4, unit.tpCooldown - tier * 0.12);
            }
            if (typeof unit.tpCooldownMin === "number") {
                unit.tpCooldownMin = Math.max(2.8, unit.tpCooldownMin - tier * 0.1);
            }
            if (typeof unit.tpCooldownMax === "number") {
                unit.tpCooldownMax = Math.max(
                    unit.tpCooldownMin + 0.45,
                    unit.tpCooldownMax - tier * 0.1
                );
            }
            if (typeof unit.echoLifetime === "number") {
                unit.echoLifetime += 0.35 * tier;
            }

            const abilities = new Set(unit.bossAbilities || []);

            if (abilities.has("regen") && typeof maxHpRef === "number") {
                const regenPct = 0.0144 + tier * 0.0028;
                unit.regen = Math.max(unit.regen || 0, maxHpRef * regenPct);
            }

            if (abilities.has("shield")) {
                unit.shieldHits = Math.max(unit.shieldHits || 0, 10 + tier * 3);
            }

            if (abilities.has("ghost")) {
                unit.phaseDuration = Math.max(unit.phaseDuration ?? 0.85, 0.85 + tier * 0.05);
            }

            if (abilities.has("jammer")) {
                unit.jamRadius = Math.max(unit.jamRadius || 0, 150 + tier * 10);
                unit.jamDuration = Math.max(unit.jamDuration || 0, 2.2 + tier * 0.2);
                unit.jamFireRateMult = Math.max(0.22, (unit.jamFireRateMult || 0.5) - tier * 0.03);
            }

            if (abilities.has("teleporter")) {
                unit.tpDistance = Math.max(unit.tpDistance || 0, 130 + tier * 12);
                if (typeof unit.tpCooldownMin === "number") {
                    unit.tpCooldownMin = Math.max(2.5, unit.tpCooldownMin - tier * 0.08);
                }
                if (typeof unit.tpCooldownMax === "number") {
                    unit.tpCooldownMax = Math.max(
                        (unit.tpCooldownMin || 2.5) + 0.35,
                        unit.tpCooldownMax - tier * 0.08
                    );
                }
            }

            if (abilities.has("decoy_master")) {
                unit.decoyPerCast = Math.max(unit.decoyPerCast || 0, 4 + Math.floor(tier / 2));
                unit.decoyCastCooldown = Math.max(2.2, (unit.decoyCastCooldown || 4) - tier * 0.22);
                unit.decoyLifetime = Math.max(unit.decoyLifetime || 0, 2.8 + tier * 0.25);
                unit.decoySpread = Math.max(unit.decoySpread || 0, 30 + tier * 4);
            }

            if (Array.isArray(unit.bossAbilities) && unit.bossAbilities.length > 0) {
                p.configureEndlessBossAbilityCycle?.(unit, tier);
            }
        };

        p.icons = {
            damage: p.loadImage("./img/icons/damage.png"),
            range: p.loadImage("./img/icons/range.png"),
            fireRate: p.loadImage("./img/icons/firerate.png"),
            info: p.loadImage("./img/icons/info.png"),
            multishot: p.loadImage("./img/icons/multishot.png"),
            aoe: p.loadImage("./img/icons/AOE.png"),
            slow: p.loadImage("./img/icons/slow.png"),
            // upgrade: p.loadImage("./img/icons/upgrade.png"),
            heal: p.variables.buttTexturePlus,
            // sell: p.loadImage("./img/icons/sell.svg"),
            bounce: p.loadImage("./img/icons/bounce.png"),
            crit: p.loadImage("./img/icons/crit.png"),
            fire: p.loadImage("./img/icons/fire.png"),
            gold: p.goldTexture,
        };
    };

    p.STEAM_LEVEL_COLORS = [
        [180, 180, 180], // 0–9
        [220, 60, 60], // 10–19
        [220, 130, 40], // 20–29
        [230, 200, 40], // 30–39
        [90, 200, 90], // 40–49
        [90, 170, 230], // 50–59
        [160, 120, 220], // 60–69
        [220, 120, 200], // 70–79
        [170, 80, 80], // 80–89
        [210, 180, 90], // 90–99
        [180, 180, 180], // 100–109
        [220, 60, 60], // 110–119
        [220, 130, 40], // 120–129
        [230, 200, 40], // 130–139
        [90, 200, 90], // 140–149
        [90, 170, 230], // 150–159
        [160, 120, 220], // 160–169
        [220, 120, 200], // 170–179
        [170, 80, 80], // 180–189
        [210, 180, 90], // 190–199
        [180, 180, 180], // 200–209
    ];

    const BOTTOM_PANEL_HEIGHT = 80;
    const FIELD_PAD = 6;
    const FIELD_SHIFT_X = 8;
    const FIELD_SHIFT_Y = 8;
    const BASE_WIDTH = 1000;
    const BASE_HEIGHT = 725;
    const BASE_FIELD_WIDTH = 725;
    let FIELD_WIDTH = BASE_FIELD_WIDTH;
    let UI_WIDTH = BASE_WIDTH - FIELD_WIDTH;
    const MAX_RENDER_SCALE = 1.0;
    const FULLSCREEN_SCALE_MODE = "contain"; // "contain" keeps aspect, "stretch" fills screen
    p.GRAPHICS_QUALITY_PRESETS = {
        low: { density: 1 },
        medium: { density: 1.2 },
        high: { density: 3 }
    };
    p.graphicsQuality = "low";
    p._appliedGraphicsQuality = null;
    p.displayRefreshRate = 60;
    p._displayRefreshRateDetecting = false;

    p.uiScaleX = 1;
    p.uiScaleY = 1;

    p.normalizeDisplayRefreshRate = function (rate = 60) {
        const commonRates = [50, 59.94, 60, 72, 75, 90, 100, 120, 144, 165, 180, 200, 240];
        const safeRate = Math.max(30, Math.min(240, Number(rate) || 60));
        let best = commonRates[0];
        let bestDiff = Math.abs(best - safeRate);

        for (const candidate of commonRates) {
            const diff = Math.abs(candidate - safeRate);
            if (diff < bestDiff) {
                best = candidate;
                bestDiff = diff;
            }
        }

        if (bestDiff <= Math.max(1.5, best * 0.06)) {
            return best;
        }
        return Math.round(safeRate * 2) / 2;
    };

    p.getQualityRenderFr = function (quality = p.graphicsQuality) {
        const nextQuality = p.GRAPHICS_QUALITY_PRESETS[quality] ? quality : "low";
        const refresh = Math.max(30, Math.min(240, p.displayRefreshRate || 60));
        const highTarget = Math.min(refresh, 144);
        return highTarget;
    };

    p.detectDisplayRefreshRate = function () {
        if (p._displayRefreshRateDetecting) return;
        if (typeof window === "undefined" || typeof window.requestAnimationFrame !== "function") return;

        p._displayRefreshRateDetecting = true;
        const samples = [];
        let prevTs = 0;
        const targetSamples = 24;

        const sampleFrame = (ts) => {
            if (prevTs > 0) {
                const delta = ts - prevTs;
                if (delta > 0 && delta < 100) {
                    samples.push(1000 / delta);
                }
            }
            prevTs = ts;

            if (samples.length < targetSamples) {
                window.requestAnimationFrame(sampleFrame);
                return;
            }

            const sorted = samples.slice().sort((a, b) => a - b);
            const trimStart = Math.floor(sorted.length * 0.15);
            const trimEnd = Math.ceil(sorted.length * 0.85);
            const trimmed = sorted.slice(trimStart, trimEnd);
            const avg = trimmed.reduce((sum, value) => sum + value, 0) / Math.max(1, trimmed.length);
            const detected = p.normalizeDisplayRefreshRate(avg);

            p._displayRefreshRateDetecting = false;
            if (Math.abs((p.displayRefreshRate || 60) - detected) < 0.25) return;

            p.displayRefreshRate = detected;
            p.applyGraphicsQuality(p.graphicsQuality, true);
        };

        window.requestAnimationFrame(sampleFrame);
    };

    p.applyGraphicsQuality = function (quality = p.graphicsQuality, force = false) {
        const nextQuality = p.GRAPHICS_QUALITY_PRESETS[quality] ? quality : "low";
        const nextPreset = p.GRAPHICS_QUALITY_PRESETS[nextQuality];
        const nextDensity = nextPreset.density;
        const changed = force || p._appliedGraphicsQuality !== nextQuality;

        p.graphicsQuality = nextQuality;
        p.renderFr = p.getQualityRenderFr(nextQuality);
        if (p._renderer) {
            p.frameRate(p.renderFr);
        }
        if (!changed) return;

        p._appliedGraphicsQuality = nextQuality;
        p.pixelDensity(nextDensity);

        if (p._renderer) {
            p.applyScreenScale(true);
            p.game?.invalidateUiGraphics?.();
            p.game?.rebuildFieldLayers?.(true);
        }
    };

    p.applyLanguage = function (lang = p.lang, force = false) {
        const nextLang = p.I18N[lang] ? lang : "ru";
        const changed = force || p.lang !== nextLang;
        p.lang = nextLang;
        if (!changed) return;

        const buttonTextMap = {
            Easy: "button.easy",
            Normal: "button.normal",
            Hard: "button.hard",
            close: "button.ok",
            end: "button.ok",
            finish: "button.finish",
            continue: "button.continue",
            startWave: "button.go",
            pause: "button.pause",
            towerStats: "button.stats"
        };

        for (const btn of p.buttonsArr || []) {
            const key = buttonTextMap[btn.name];
            if (key) {
                btn.text = p.t(key);
            }
        }

        if (p.game?.updatePauseButtonLabel) {
            p.game.updatePauseButtonLabel();
        }

        if (p.TOWER_TYPES) {
            for (const [key, towerType] of Object.entries(p.TOWER_TYPES)) {
                if (!towerType) continue;
                towerType.name = p.t(`tower.${towerType.id || key}`);
            }
        }

        if (p.game?.towers) {
            for (const tower of p.game.towers) {
                if (!tower?.type?.id) continue;
                tower.type.name = p.t(`tower.${tower.type.id}`);
                tower.displayName = p.t("tower.instance_display", {
                    name: tower.type.name,
                    number: tower.instanceNumber
                });
            }
            p.game.waveIntroText = p.t("wave.intro", { wave: p.game.wave });
            p.game._towerDamagePanelDirty = true;
            p.game._towerDamagePanelNextRefresh = 0;
            p.game.invalidateUiGraphics?.();
        }
    };

    p.applyScreenScale = function (force = false) {
        const container = document.getElementById("myContainer");
        if (!container) return;
        const isFullscreen = Boolean(p.fullscreen());
        const prevScaleX = p.uiScaleX || 1;
        const prevScaleY = p.uiScaleY || 1;

        const screenW = window.innerWidth || BASE_WIDTH;
        const screenH = window.innerHeight || BASE_HEIGHT;
        let scaleX = 1;
        let scaleY = 1;
        let displayW = BASE_WIDTH;
        let displayH = BASE_HEIGHT;

        if (isFullscreen) {
            if (FULLSCREEN_SCALE_MODE === "stretch") {
                scaleX = screenW / BASE_WIDTH;
                scaleY = screenH / BASE_HEIGHT;
                displayW = screenW;
                displayH = screenH;
            } else {
                const scale = Math.min(screenW / BASE_WIDTH, screenH / BASE_HEIGHT);
                scaleX = scale;
                scaleY = scale;
                displayW = Math.round(BASE_WIDTH * scale);
                displayH = Math.round(BASE_HEIGHT * scale);
            }
        }

        const renderScaleX = Math.min(MAX_RENDER_SCALE, Math.max(0.1, scaleX));
        const renderScaleY = Math.min(MAX_RENDER_SCALE, Math.max(0.1, scaleY));
        p.uiScaleX = renderScaleX;
        p.uiScaleY = renderScaleY;
        const uiScaleChanged =
            Math.abs(prevScaleX - renderScaleX) > 0.001 ||
            Math.abs(prevScaleY - renderScaleY) > 0.001;

        displayW = Math.round(displayW);
        displayH = Math.round(displayH);
        container.style.setProperty("--game-w", `${displayW}px`);
        container.style.setProperty("--game-h", `${displayH}px`);

        if (!p._renderer) return;
        const renderW = Math.round(BASE_WIDTH * renderScaleX);
        const renderH = Math.round(BASE_HEIGHT * renderScaleY);
        const needsResize = force || p._renderer.width !== renderW || p._renderer.height !== renderH;
        if (needsResize) {
            p.resizeCanvas(renderW, renderH, true);
            // Keep logical coords stable for layout and input.
            p.width = BASE_WIDTH;
            p.height = BASE_HEIGHT;
            p.game?.rebuildFieldLayers?.(true);
        }
        if (uiScaleChanged) {
            p.game?.invalidateUiGraphics?.();
        }
    };

    p.handleFullscreenChange = function () {
        const isFullscreen = Boolean(p.fullscreen());
        if (p.variables) {
            p.variables.fullscreen = isFullscreen;
        }
        const container = document.getElementById("myContainer");
        if (container) {
            container.classList.toggle("gameFullScreen", isFullscreen);
        }
        p.applyScreenScale(true);
    };

    p.toggleFullscreen = function () {
        const next = !p.fullscreen();
        p.fullscreen(next);
    };

    p.DIFFICULTY_PRESETS = {
        easy: {
            money: 150,
            lives: 150,
            spawnInterval: 0.7,
            waveBudgetMult: 0.9,
            enemyHpMult: 0.9, // добавил campaignEnemyHpMult и endlessEnemyHpMult, enemyHpMult осталось как заглушка
            campaignEnemyHpMult: 1.1,
            endlessEnemyHpMult: 1.05,
            bossHpMult: 0.9,
            enemySpeedMult: 0.92,
            rewardMult: 1.1,
            shieldMult: 0.85,
            heroCapMult: 1.0,
            heroHpMult: 1.2,
            heroSpeedMult: 1.03,
            heroRewardMult: 1.1,
            heroRegenMult: 1.15,
            heroShieldMult: 1.1,
            // unlockOffset: 1
        },
        normal: {
            money: 150,
            lives: 75,
            spawnInterval: 0.65,
            waveBudgetMult: 1.0,
            enemyHpMult: 1.0, // добавил campaignEnemyHpMult и endlessEnemyHpMult, enemyHpMult осталось как заглушка
            campaignEnemyHpMult: 1.2,
            endlessEnemyHpMult: 1.1,
            bossHpMult: 1.0,
            enemySpeedMult: 1.0,
            rewardMult: 1.0,
            shieldMult: 1.0,
            heroCapMult: 1.2,
            heroHpMult: 1.25,
            heroSpeedMult: 1.05,
            heroRewardMult: 1,
            heroRegenMult: 1.2,
            heroShieldMult: 1.15,
            // unlockOffset: 0
        },
        hard: {
            money: 150,
            lives: 50,
            spawnInterval: 0.6,
            waveBudgetMult: 1.05,
            enemyHpMult: 1.15, // добавил campaignEnemyHpMult и endlessEnemyHpMult, enemyHpMult осталось как заглушка
            campaignEnemyHpMult: 1.3,
            endlessEnemyHpMult: 1.2,
            bossHpMult: 1.15,
            enemySpeedMult: 1.05,
            rewardMult: 0.9,
            shieldMult: 1,
            heroCapMult: 1.35,
            heroHpMult: 1.30,
            heroSpeedMult: 1.08,
            heroRewardMult: 1,
            heroRegenMult: 1.25,
            heroShieldMult: 1.2,
            // unlockOffset: -1
        }
    };
    //ТЕСТ
    p.BUILD_SPECIAL_TILE_TYPES = {
        damage_up: {
            id: "damage_up",
            kind: "positive",
            label: "DMG+",
            textureKey: "damageBuff",
            damageMult: 1.25
        },
        range_up: {
            id: "range_up",
            kind: "positive",
            label: "RNG+",
            textureKey: "rangeBuff",
            rangeMult: 1.2
        },
        fire_rate_up: {
            id: "fire_rate_up",
            kind: "positive",
            label: "SPD+",
            textureKey: "speedBuff",
            fireRateMult: 1.2
        },
        gold_on_kill: {
            id: "gold_on_kill",
            kind: "positive",
            label: "GOLD+",
            textureKey: "goldBuff",
            killGoldBonus: 1
        },
        damage_down: {
            id: "damage_down",
            kind: "negative",
            label: "DMG-",
            textureKey: "damageDebuff",
            damageMult: 0.75
        },
        range_down: {
            id: "range_down",
            kind: "negative",
            label: "RNG-",
            textureKey: "rangeDebuff",
            rangeMult: 0.8
        },
        fire_rate_down: {
            id: "fire_rate_down",
            kind: "negative",
            label: "SPD-",
            textureKey: "speedDebuff",
            fireRateMult: 0.8
        },
        cell_debuff: {
            id: "cell_debuff",
            kind: "negative",
            label: "BLOCK",
            textureKey: "cellDebuff",
            buildBlocked: true
        }
    };

    p.setup =  function () 
    {
        p.restoreAssetLoadTracker();
        p.setAttributes("alpha", true);
        p.pixelDensity(p.GRAPHICS_QUALITY_PRESETS[p.graphicsQuality]?.density || 1);

        let myCanvas = p.createCanvas(FIELD_WIDTH + UI_WIDTH, BASE_HEIGHT, p.WEBGL);
       
        p.frameRate(p.renderFr);

        myCanvas.parent("myContainer");
        p._gameCanvas = myCanvas;
        myCanvas.elt.style.cursor = 'url("./img/cursor-small.png") 6 6, auto';
        myCanvas.elt.addEventListener("contextmenu", (e) => e.preventDefault());
        p.menu = new Menu();
        p.textFont(p.variables.textFontFontick);

        p.menu.generateArrButtons();
        p.variables.gameMusic.volume = 0.2;
        p.localStorage.load();
        p.gl = p._renderer.GL;

        p.game = new Game();
        p.menu.randomizeTestLevelSelections?.();
        p._gameInited = false;

        p.applyScreenScale(true);
        p.detectDisplayRefreshRate();
        window.addEventListener("resize", () => p.applyScreenScale(false));
        document.addEventListener("fullscreenchange", p.handleFullscreenChange);
        p.updateLoadingOverlay("Starting game...");
        p.finishLoadingOverlay();
    };
    
    p.draw = function () 
    {
        if (p.gameStarted && p.game?.beginPerfFrame) {
            p.game.beginPerfFrame();
        }
        p.push();
        p.scale(p.uiScaleX || 1, p.uiScaleY || 1);

            p.menu.background();
            p.menu.showSetting();
              
            if(!p.gameStarted && !p.gameEnded && !p.menu.settingModal)
                p.menu.showMainMenu()

            
            if(!p.gameStarted)
                p.menu.bottomPanel();
          
            if(p.gameStarted && !p.gameEnded && !p.menu.settingModal ) 
            {
                p.deltaPerm = p.deltaTime;  

                let delta = (p.deltaPerm / 1000) * p.gameSpeed;
                p.update(delta);
                p.menu.bottomPanel();
                p.game?.drawWaveIntroOverlay?.();
            }

            if (p.gameEnded) {
                p.menu.showGameEndScreen();
            } else if (p.gameStarted && p.game?.waitingEndChoice) {
                p.menu.showWinChoice();
            }
        p.pop();
        if (p.gameStarted && p.game?.endPerfFrame) {
            p.game.endPerfFrame();
        }
    };

    p.keyPressed = function () {
        if (p.keyCode === p.ESCAPE && p.game) {
            p.game.selectedTowerType = null;
            p.game.buildMode = null;
            p.game.upgradeMode = null;
        }
    };

    p.mousePressed = function () 
    {
        let clicked = false;
      
        // игра еще не начата, выбираем сложность 
        if(!p.gameStarted && !p.menu.settingModal) {
            clicked = p.menu.handleTestLevelPickerClick?.(p.mouseX, p.mouseY) || clicked;
            clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'dif') || clicked;
        } else if (!p.game?.waitingEndChoice) {
            if (p.game && p.game.waveState === "prep") {
                clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'wave') || clicked;
            } else {
                clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'pause') || clicked;
            }
            clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'stats') || clicked;
        }
        // Клик на fullscreen / настройки только после выбора сложности
        if (p.gameStarted) {
            clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'set') || clicked;
        }
        if (p.game?.waitingEndChoice && !p.gameEnded) {
            clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'postWin') || clicked;
        }
       
        // Клик при конце игры
        if (p.gameEnded) {
            clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'gameEnd') || clicked;
        }

         // Клик в мюню настроек
        if(p.menu.settingModal )
            clicked = p.checkClickButtons(p.mouseX, p.mouseY, 'sets') || clicked;

        if (!clicked && p.game?.handleTowerDamagePanelClick(p.mouseX, p.mouseY)) {
            return;
        }

        if (p.mouseButton === p.RIGHT) {
            if (p.game) {
                p.game.selectedTowerType = null;
                p.game.buildMode = null;
                p.game.upgradeMode = null;
            }
            return;
        }
        //VIBE: ставим башню только если клик не попал в UI
        if (!clicked && p.gameStarted && !p.gameEnded && !p.menu.settingModal && !p.game?.waitingEndChoice && !p.game?.paused) {
            if (p.game.handleLootChestClick(p.mouseX, p.mouseY)) return;
            if (p.game.handleUpgradeMenuClick(p.mouseX, p.mouseY)) return;
            // if (p.game.handleBuildMenuClick(p.mouseX, p.mouseY)) return;
            if (p.game.handleTowerPanelClick(p.mouseX, p.mouseY)) return;
            p.game.handleClick(p.mouseX, p.mouseY);
        }
       
        //VIBE

    };
   
    class Variables 
    {
        constructor(){
            this.clockImg = p.loadImage('./img/clock.png');
            this.scoreTexture = p.loadImage('./img/score.png');
            this.buttTextureFS =  p.loadImage('./img/fullscreen.png');
            this.buttTextureFsHov =  p.loadImage('./img/fullscreenhover.png');
            this.buttTextureS =  p.loadImage('./img/settings.png');
            this.buttTextureSHov =  p.loadImage('./img/settingshover.png');

  
           
            this.buttTexture = p.loadImage('./img/buttonnormal.png');
            this.buttTextureHov = p.loadImage('./img/buttonhover.png');
            this.buttTextureStart = p.loadImage('./img/buttonstartnormal.png');
           
            this.buttStartWave = this.buttTexture;//p.loadImage('./img/startWave.png');
            this.buttStartWaveHov = this.buttTextureHov;//p.loadImage('./img/startWaveHov.png');
            this.buttTextureStartHov = p.loadImage('./img/buttonstarthover.png');
            this.buttTexturePlus = p.loadImage('./img/plus.png');
            this.textureWinLose = p.loadImage('./img/winloseback.png');
            this.buttTextureMinus = p.loadImage('./img/minus.png');
            this.settingsTexture = p.loadImage('./img/settingsback.png'); 

            this.textFontFontick = p.loadFont("fonts/fontick/fontick.otf");
            this.textFontMP = p.loadFont("fonts/mpro/multiroundpro.otf");

            this.fullscreen = false;
            this.diff = null;
            this.score = 0;
            this.gameMusic;
            this.gameLoseMusic;
            this.soundGameWin;

            this.soundBound = new Audio('sounds/bound.wav');

   
  
        }
    
    }

    class Buttons{
        constructor(name, settingsButton, x , y , z , w , h , d , type , cb, t = 'rect')
        {
            this.w = w;
            this.h= h;
            this.x = x + this.w/2 -p.width/2;
            this.y = y + this.h/2 -p.height/2;
            this.type = type;
            this.cb = cb;
            this.name = name;
            this.text = settingsButton[0];
            
            this.textY = settingsButton[2];
            this.textSize = settingsButton[3];
            this.textX = 0 
            this.textureOn =  settingsButton[4];

            this.textureHov = settingsButton[5] != undefined? settingsButton[5] : settingsButton[4];
            this.texture = settingsButton[4];

            this.d = d;
            this.z = z + this.d/2;
            this.hovered = false;
            this.t = t;
        
        }
        hover(){
            if (p.mouseX >= this.x - this.w/2 +p.width/2 && p.mouseX <= this.x - this.w/2 +p.width/2 + this.w &&
            p.mouseY >= this.y - this.h/2 +p.height/2 && p.mouseY <= this.y - this.h/2 +p.height/2 + this.h ) 
                this.hovered = true; 
            else
                this.hovered = false; 
        }
        click()
        {

            this.d = this.d/2;
            this.cb();
            setTimeout(() => {
                this.d = this.d * 2
            }, 100);
            p.redraw();
        }
        show()
        { 
            
            this.hover()
            p.push();
                p.rectMode(p.CENTER);
                p.push();
                        if(this.hovered)
                            p.texture(this.textureHov)
                        else 
                            p.texture(this.texture)
                        p.noStroke();
                    if( this.t == 'box'){
                        p.translate( this.x, this.y, this.z);
                        p.box(  this.w ,   this.h ,   this.d );
                    } 
                    if( this.t == 'rect'){
                        p.translate(0, 0,  this.z);
                        p.rect(this.x, this.y,  this.w ,   this.h  );
                    }
                    
                p.pop();

                p.push();
                  
                    p.textSize(this.textSize)
                    p.textAlign(p.CENTER)
                    p.fill('#fff');
                    p.translate(this.x +  this.textX, this.y +  this.h/2 + this.textY, this.z + this.d/2+1);
                    p.text(this.text, 0, 0,  this.w ,  this.h-this.textSize/2);
                p.pop();
            p.pop();
        }
    }

    class Menu {
        constructor(){
            this.time = 0;
            this.settingModal = false;
            this.endScoreGoldBonus = 0;
            this.endScoreGoldBonusApplied = false;
            this.testLevelPickerEnabled = ENABLE_TEST_START_LEVEL_PICKER;
            this.testUnlockAllTowersEnabled = false;
            this.testLevelByDifficulty = {
                easy: 1,
                normal: 1,
                hard: 1
            };
            this.testStartMoneyByDifficulty = {
                easy: p.DIFFICULTY_PRESETS?.easy?.money ?? 150,
                normal: p.DIFFICULTY_PRESETS?.normal?.money ?? 150,
                hard: p.DIFFICULTY_PRESETS?.hard?.money ?? 150
            };
            // this.intervalTime;
            this.textureBackground = p.loadImage('./img/gameBack.png');
            // this.floor = 0;
            this.floorCoord = {x:0, y: p.height -75, w:p.width, h:20};

        }
        prepStartGame(diff = null){
            if (diff) {
                p.variables.diff = diff;
                this.applyTestLevelSelectionToGame(diff);
            }
            this.resetEndScoreConversion();
            p.gameStarted = true;
        }

        resetEndScoreConversion() {
            this.endScoreGoldBonus = 0;
            this.endScoreGoldBonusApplied = false;
        }

        finalizeEndScore() {
            if (this.endScoreGoldBonusApplied) return this.endScoreGoldBonus;

            const remainingGold = Math.max(0, Number(p.game?.money ?? 0));
            const goldBonus = Math.floor(remainingGold / 2);
            this.endScoreGoldBonus = goldBonus;
            if (goldBonus > 0) {
                p.variables.score += goldBonus;
            }
            this.endScoreGoldBonusApplied = true;
            return goldBonus;
        }

        formatScoreValue(value) {
            const safe = Number(value) || 0;
            const normalized = Math.round(safe * 10) / 10;
            return Number.isInteger(normalized) ? `${normalized}` : normalized.toFixed(1);
        }

        formatElapsedTime(totalSeconds = 0) {
            const total = Math.max(0, Math.floor(Number(totalSeconds) || 0));
            const hours = Math.floor(total / 3600);
            const minutes = Math.floor((total % 3600) / 60);
            const seconds = total % 60;

            if (hours > 0) {
                return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
            }
            if (minutes > 0) {
                return `${minutes}:${String(seconds).padStart(2, "0")}`;
            }
            return p.t("time.seconds", { value: seconds });
        }

        getEndScoreGoldBonusBadgeMetrics(value, textSize = 14, iconSize = 12) {
            if (!(value > 0)) return;

            const label = `+${this.formatScoreValue(value)}`;
            const gap = 5;
            const padX = 8;
            const padY = 4;
            p.textSize(textSize);
            const textW = p.textWidth(label);
            return {
                label,
                iconSize,
                textSize,
                gap,
                padX,
                padY,
                textW,
                w: padX * 2 + iconSize + gap + textW,
                h: Math.max(iconSize, textSize) + padY * 2
            };
        }

        drawEndScoreGoldBonusBadge(x, y, value, align = "center") {
            const metrics = this.getEndScoreGoldBonusBadgeMetrics(value);
            if (!metrics) return;

            let startX = x - metrics.w / 2;
            if (align === "right") {
                startX = x - metrics.w;
            } else if (align === "left") {
                startX = x;
            }

            p.push();
                p.rectMode(p.CORNER);
                p.noStroke();
                p.fill(22, 24, 42, 228);
                p.rect(startX, y - metrics.h / 2, metrics.w, metrics.h, 9);

                p.stroke(255, 214, 110, 70);
                p.strokeWeight(1);
                p.noFill();
                p.rect(startX, y - metrics.h / 2, metrics.w, metrics.h, 9);
            p.pop();

            const textX = startX + metrics.padX;
            const iconX = startX + metrics.w - metrics.padX - metrics.iconSize / 2;
            const textY = y - 1;
            const iconY = y;

            p.push();
                p.noStroke();
                p.fill(255, 220, 120);
                p.textAlign(p.LEFT, p.CENTER);
                p.textSize(metrics.textSize);
                p.text(metrics.label, textX, textY);
            p.pop();

            if (p.goldTexture) {
                p.push();
                    p.noStroke();
                    p.texture(p.goldTexture);
                    p.rect(iconX, iconY, metrics.iconSize, metrics.iconSize);
                p.pop();
            } else {
                p.push();
                    p.noStroke();
                    p.fill(232, 188, 64);
                    p.circle(iconX, iconY, metrics.iconSize);
                    p.fill(255, 225, 120);
                    p.circle(iconX - 1.5, iconY - 1.5, 4.5);
                p.pop();
            }
        }

        drawEndScoreInlineValue(x, y, value, bonusValue = 0, options = {}) {
            const align = options.align || "center";
            const valueSize = options.valueSize || 20;
            const gap = options.gap ?? 8;
            const valueColor = options.valueColor || [255, 255, 255];
            const valueText = this.formatScoreValue(value);

            p.textSize(valueSize);
            const valueW = p.textWidth(valueText);
            const bonusMetrics = bonusValue > 0 ? this.getEndScoreGoldBonusBadgeMetrics(bonusValue) : null;
            const totalW = valueW + (bonusMetrics ? gap + bonusMetrics.w : 0);
            let startX = x - totalW / 2;
            if (align === "right") {
                startX = x - totalW;
            } else if (align === "left") {
                startX = x;
            }

            p.push();
                p.noStroke();
                p.fill(valueColor[0], valueColor[1], valueColor[2]);
                p.textAlign(p.LEFT, p.CENTER);
                p.textSize(valueSize);
                p.text(valueText, startX, y);
            p.pop();

            if (bonusMetrics) {
                this.drawEndScoreGoldBonusBadge(startX + valueW + gap, y + 3, bonusValue, "left");
            }
        }

        drawEndScoreGoldBonus(x, y, value, align = "center") {
            this.drawEndScoreGoldBonusBadge(x, y, value, align);
        }
        background(){
           
            p.push();
                p.noStroke();
                p.texture(this.textureBackground)
                p.rect(-p.width/2,-p.height/2, p.width, p.height+20)
      
                // if(this.floor)
                // {
                
                //     p.texture(this.textureFloor[this.chosenPath -1])
                //     p.rect( this.floorCoord.x  - p.width/2,  this.floorCoord.y - p.height/2,  this.floorCoord.w,  this.floorCoord.h)
                 
                // }
            p.pop();
          
        }
        generateArrButtons()
        {
           
            p.buttonsArr.push(new Buttons('fullScreen', ['' , 0 , 0, 20 , p.variables.buttTextureFS,  p.variables.buttTextureFsHov], 640, 690 , 0 , 30 , 30 , 1 , 'set', () =>{  
                p.toggleFullscreen();
    
            }));
            p.buttonsArr.push(new Buttons('Settings', ['' , 0 , 0, 20 , p.variables.buttTextureS,  p.variables.buttTextureSHov], 680, 690 , 0 , 30 , 30 , 1 , 'set', () =>{  
                this.settingModal = true;
            }));

            const diffBtnW = Math.round(p.width * 0.55);
            const diffBtnH = Math.round(p.height * 0.09);
            console.log(diffBtnW, diffBtnH)
            const diffBtnX = Math.round((p.width - diffBtnW) / 2);
            const diffStartY = Math.round(p.height * 0.22);
            const diffGap = Math.round(diffBtnH * 0.7);
            const diffTextSize = Math.max(20, Math.round(diffBtnH * 0.45));

            p.buttonsArr.push(new Buttons('Easy', [p.t("button.easy") , 0 , 0, diffTextSize , p.variables.buttTextureStart, p.variables.buttTextureStartHov], diffBtnX, diffStartY , 0 , diffBtnW , diffBtnH , 1 , 'dif', () =>{  
                p.menu.prepStartGame("easy");
            }));
            p.buttonsArr.push(new Buttons('Normal', [p.t("button.normal") , 0 , 0, diffTextSize , p.variables.buttTextureStart, p.variables.buttTextureStartHov], diffBtnX, diffStartY + diffBtnH + diffGap , 0 , diffBtnW , diffBtnH , 1 , 'dif', () =>{  
                p.menu.prepStartGame("normal");
            }));
            p.buttonsArr.push(new Buttons('Hard', [p.t("button.hard") , 0 , 0, diffTextSize , p.variables.buttTextureStart, p.variables.buttTextureStartHov], diffBtnX, diffStartY + (diffBtnH + diffGap) * 2, 0 , diffBtnW , diffBtnH , 1 , 'dif', () =>{  
                p.menu.prepStartGame("hard");
            }));

            p.buttonsArr.push(new Buttons('close', [p.t("button.ok") , 0 , 0, 20, p.variables.buttTexture, p.variables.buttTextureHov], 310, 450 , 30 , 100 , 40 , 2 , 'sets', () =>{ 
                p.menu.settingModal = false; 

            }));
            p.buttonsArr.push(new Buttons('musPlus', ['+' , 0 , 0, 20, p.variables.buttTexturePlus/*,  p.variables.gameMusic.volume == 1?true : false*/], 450, 290 , 30 , 30 , 30 , 2 , 'sets', () =>{   
                p.menu.changeMusicVolume(1);
            }));
            p.buttonsArr.push(new Buttons('musMinus', ['-' , 0 , 0, 20, p.variables.buttTextureMinus/*, p.variables.gameMusic.volume == 0? true : false*/], 380, 290 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.changeMusicVolume(-1);
            }));  
            p.buttonsArr.push(new Buttons('volPlus', ['+' , 0 , 0, 20, p.variables.buttTexturePlus/*, p.variables.soundClickButton.volume == 1? true : false*/], 450, 340 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.changeSoundVolume(1);
                p.variables.soundBound.play();
            }));
            p.buttonsArr.push(new Buttons('volMinus', ['-' , 0 , 0, 20, p.variables.buttTextureMinus/*, p.variables.soundClickButton.volume ==0? true : false*/], 380, 340 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.changeSoundVolume(-1);
                p.variables.soundBound.play();
            }));
            p.buttonsArr.push(new Buttons('gfxPlus', ['+' , 0 , 0, 20, p.variables.buttTexturePlus], 450, 390 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.changeGraphicsQuality(1);
            }));
            p.buttonsArr.push(new Buttons('gfxMinus', ['-' , 0 , 0, 20, p.variables.buttTextureMinus], 380, 390 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.changeGraphicsQuality(-1);
            }));
            p.buttonsArr.push(new Buttons('langPlus', ['+' , 0 , 0, 20, p.variables.buttTexturePlus], 450, 440 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.changeLanguage(1);
            }));
            p.buttonsArr.push(new Buttons('langMinus', ['-' , 0 , 0, 20, p.variables.buttTextureMinus], 380, 440 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.changeLanguage(-1);
            }));
            p.buttonsArr.push(new Buttons('readinessPlus', ['+' , 0 , 0, 20, p.variables.buttTexturePlus], 450, 490 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.toggleTowerAttackReadinessBar();
            }));
            p.buttonsArr.push(new Buttons('readinessMinus', ['-' , 0 , 0, 20, p.variables.buttTextureMinus], 380, 490 , 30 , 30 , 30 , 2 , 'sets', () =>{  
                p.menu.toggleTowerAttackReadinessBar();
            }));
            p.buttonsArr.push(new Buttons('end', [p.t("button.ok") , 0 ,0, 24, p.variables.buttTexture, p.variables.buttTextureHov], p.width/2+10, p.height/2 +120 , 36 , 100 , 40 , 1 , 'gameEnd', () =>{
                location.reload()
            }, 'rect' 
            ));
            p.buttonsArr.push(new Buttons('endStats', [p.t("button.stats") , 0 ,0, 20, p.variables.buttTexture, p.variables.buttTextureHov], p.width/2-200, p.height/2 +120 , 36 , 100 , 40 , 1 , 'gameEnd', () =>{
                if (!p.game) return;
                p.game.towerDamagePanelOpen = !p.game.towerDamagePanelOpen;
                p.game._towerDamagePanelDirty = true;
                p.game._towerDamagePanelNextRefresh = 0;
            }, 'rect' 
            ));

            p.buttonsArr.push(new Buttons('finish', [p.t("button.finish") , 0 ,0, 20, p.variables.buttTexture, p.variables.buttTextureHov], p.width/2-200, p.height/2 +120 , 36 , 140 , 40 , 1 , 'postWin', () =>{
                if (!p.game) return;
                p.game.waitingEndChoice = false;
                p.gameEnded = true;
                p.gameWon = true;
                p.menu.showGameEndScreen();
            }, 'rect' 
            ));
            p.buttonsArr.push(new Buttons('continue', [p.t("button.continue") , 0 ,0, 20, p.variables.buttTexture, p.variables.buttTextureHov], p.width/2+30, p.height/2 +120 , 36 , 140 , 40 , 1 , 'postWin', () =>{
                if (!p.game) return;
                p.game.waitingEndChoice = false;
                p.game.endlessMode = true;
            }, 'rect' 
            ));
           
        }

        getWrappedIndex(currentIndex, step, total) {
            if (!total) return 0;
            return (((currentIndex + step) % total) + total) % total;
        }

        getVolumeStepIndex(volume) {
            const safeVolume = Math.max(0, Math.min(1, Number(volume) || 0));
            return Math.max(0, Math.min(10, Math.round(safeVolume * 10)));
        }

        changeMusicVolume(step) {
            const currentIndex = this.getVolumeStepIndex(p.variables.gameMusic.volume);
            const nextIndex = this.getWrappedIndex(currentIndex, step, 11);
            p.variables.gameMusic.volume = nextIndex / 10;
            p.localStorage.save();
        }

        syncLoseSoundVolume() {
            const soundVolumeRaw = Number(p.variables.soundBound?.volume);
            const soundVolume = Math.max(0, Math.min(1, Number.isFinite(soundVolumeRaw) ? soundVolumeRaw : 1));
            if (p.variables.gameLoseMusic) {
                p.variables.gameLoseMusic.volume = soundVolume;
            }
        }

        changeSoundVolume(step){
            const currentIndex = this.getVolumeStepIndex(p.variables.soundBound.volume);
            const nextIndex = this.getWrappedIndex(currentIndex, step, 11);
            p.variables.soundBound.volume = nextIndex / 10;
            this.syncLoseSoundVolume();
            p.localStorage.save();
        }

        getGraphicsQualityOptions() {
            return ["low", "medium", "high"];
        }

        getGraphicsQualityLabel() {
            return p.t(`graphics.${p.graphicsQuality || "low"}`);
        }

        changeGraphicsQuality(step) {
            const options = this.getGraphicsQualityOptions();
            const currentIndex = Math.max(0, options.indexOf(p.graphicsQuality || "low"));
            const nextIndex = this.getWrappedIndex(currentIndex, step, options.length);
            const nextQuality = options[nextIndex];
            if (nextQuality === (p.graphicsQuality || "low")) return;
            p.applyGraphicsQuality(nextQuality);
            p.localStorage.save();
        }

        getLanguageOptions() {
            return ["ru", "en"];
        }

        getLanguageLabel() {
            return p.t(`lang.${p.lang || "ru"}`);
        }

        changeLanguage(step) {
            const options = this.getLanguageOptions();
            const currentIndex = Math.max(0, options.indexOf(p.lang || "ru"));
            const nextIndex = this.getWrappedIndex(currentIndex, step, options.length);
            const nextLanguage = options[nextIndex];
            if (nextLanguage === (p.lang || "ru")) return;
            p.applyLanguage(nextLanguage);
            p.localStorage.save();
        }

        getTowerAttackReadinessBarLabel() {
            return p.t(p.showTowerAttackReadinessBar ? "toggle.on" : "toggle.off");
        }

        toggleTowerAttackReadinessBar() {
            p.showTowerAttackReadinessBar = !p.showTowerAttackReadinessBar;
            p.localStorage.save();
        }

        getSettingsModalMetrics(){
            const modalW = Math.round(p.width * 0.58);
            const modalH = Math.max(470, Math.round(p.height * 0.6));
            const modalLeft = Math.round((p.width - modalW) / 2);
            const modalTop = Math.round((p.height - modalH) / 2);
            return { modalW, modalH, modalLeft, modalTop };
        }

        getSettingsPanelLayout() {
            const { modalW, modalH, modalLeft, modalTop } = this.getSettingsModalMetrics();
            const rowX = modalLeft + 28;
            const rowW = modalW - 56;
            const rowH = 54;
            const rowGap = 14;
            const headerH = 62;
            const firstRowY = modalTop + headerH + 18;
            const controlRight = modalLeft + modalW - 36;
            const btnSize = 30;
            const btnGap = 10;
            const valueBoxW = 132;

            const rows = [
                {
                    key: "music",
                    label: p.t("menu.music"),
                    value: `${Math.round(p.variables.gameMusic.volume * 10)}`,
                    valueW: valueBoxW,
                    minusBtn: "musMinus",
                    plusBtn: "musPlus",
                    accent: [255, 170, 230]
                },
                {
                    key: "sounds",
                    label: p.t("menu.sounds"),
                    value: `${Math.round(p.variables.soundBound.volume * 10)}`,
                    valueW: valueBoxW,
                    minusBtn: "volMinus",
                    plusBtn: "volPlus",
                    accent: [255, 210, 120]
                },
                {
                    key: "graphics",
                    label: p.t("menu.graphics"),
                    value: this.getGraphicsQualityLabel(),
                    valueW: valueBoxW,
                    minusBtn: "gfxMinus",
                    plusBtn: "gfxPlus",
                    accent: [140, 210, 255]
                },
                {
                    key: "language",
                    label: p.t("menu.language"),
                    value: this.getLanguageLabel(),
                    valueW: valueBoxW,
                    minusBtn: "langMinus",
                    plusBtn: "langPlus",
                    accent: [170, 245, 190]
                },
                {
                    key: "attack_readiness_bar",
                    label: p.t("menu.attack_readiness_bar"),
                    value: this.getTowerAttackReadinessBarLabel(),
                    valueW: valueBoxW,
                    minusBtn: "readinessMinus",
                    plusBtn: "readinessPlus",
                    accent: [130, 255, 205]
                }
            ].map((row, index) => {
                const y = firstRowY + index * (rowH + rowGap);
                const plusX = controlRight - btnSize;
                const valueX = plusX - btnGap - row.valueW;
                const minusX = valueX - btnGap - btnSize;
                return {
                    ...row,
                    x: rowX,
                    y,
                    w: rowW,
                    h: rowH,
                    valueX,
                    plusX,
                    minusX,
                    controlY: y + Math.round((rowH - btnSize) / 2)
                };
            });

            const closeBtn = p.buttonsArr.find(b => b.name === "close");
            const closeX = modalLeft + Math.round((modalW - (closeBtn?.w || 100)) / 2);
            const closeY = modalTop + modalH - 52;

            return {
                modalW,
                modalH,
                modalLeft,
                modalTop,
                headerH,
                rows,
                closeX,
                closeY
            };
        }
        
        bottomPanel(){
            if(p.gameStarted)
            {
                p.push()
                    p.translate(0,0,2)
                    p.textSize(20)
                    p.push();
                        p.text(this.formatElapsedTime(p.menu.time), -p.width/2 + 65,p.height/2 - 13);
                        p.noStroke();
                        p.texture( p.variables.clockImg);
                        p.rect(-p.width/2 + 15,p.height/2 - 35, 28 , 30);
                    p.pop();

                    p.push();
                        p.noStroke();
                        p.texture( p.variables.scoreTexture);
                        p.rect(-p.width/2 + 115,p.height/2 - 35, 28 , 30);
                        p.text(p.variables.score, -p.width/2 + 165,p.height/2 - 13);

                    p.pop();

                   
                    if (p.game) {
                        p.push();
                            p.textAlign(p.RIGHT);
                            p.fill('#fff');
                            const baseX = p.width/4 ;
                            const y = p.height/2 - 13;
                            const waveX = baseX - 340;
                            p.textSize(20);
                            const targetWaves = p.game.mainCampaignWaves || 0;
                            const waveLabel = (!p.game.endlessMode && targetWaves > 0)
                                ? p.t("hud.wave_full", { wave: p.game.wave, total: targetWaves })
                                : p.t("hud.wave_short", { wave: p.game.wave });
                            p.text(waveLabel, waveX, y);

                            if (p.game.perfMonitorEnabled) {
                                const fpsLabel = `FPS ${p.game.perfStats.fps.toFixed(1)}`;
                                p.textAlign(p.LEFT);
                                p.textSize(14);
                                p.fill(220, 235, 255);
                                p.text(fpsLabel, waveX + 98, y - 1);
                            }
                        
                        p.pop();
                    }

                 
                p.pop();
            }
            if (p.gameStarted) {
                p.drawButtons('set');
            }
            if (
                p.game &&
                !p.menu.settingModal &&
                !p.gameEnded
                && p.gameStarted
                && !p.game.waitingEndChoice
            ) {
                if (p.game.waveState === "prep") {
                    p.drawButtons('wave');
                    p.game.drawWavePrepIndicator?.();
                } else {
                    p.drawButtons('pause');
                }
                p.drawButtons('stats');
            }
        
        }

        showMainMenu(){
            p.push();
                p.noStroke();
                p.texture(this.textureBackground)
                p.rect(-p.width/2, -p.height/2 , p.width , p.height+20);
               
            p.pop();
      
            p.drawButtons('dif');
            this.drawTestLevelPicker();
           
        }

        // ===== Test start-menu level picker =====
        getTestLevelPickerDifficultyRows() {
            return [
                { id: "easy", pathDifficulty: "easy", label: p.t("button.easy"), accent: [104, 214, 128] },
                { id: "normal", pathDifficulty: "medium", label: p.t("button.normal"), accent: [104, 176, 255] },
                { id: "hard", pathDifficulty: "hard", label: p.t("button.hard"), accent: [255, 108, 108] }
            ];
        }

        getTestLevelCount(diffId) {
            const row = this.getTestLevelPickerDifficultyRows().find((item) => item.id === diffId);
            if (!row || !p.game) return 1;
            const presets = p.game.getPathPresetsForDifficulty(row.pathDifficulty);
            return Math.max(1, presets.length || 1);
        }

        normalizeTestLevelSelections() {
            for (const row of this.getTestLevelPickerDifficultyRows()) {
                const maxLevel = this.getTestLevelCount(row.id);
                const current = this.testLevelByDifficulty[row.id] || 1;
                this.testLevelByDifficulty[row.id] = p.constrain(current, 1, maxLevel);
            }
        }

        randomizeTestLevelSelections() {
            if (!this.testLevelPickerEnabled) return;
            for (const row of this.getTestLevelPickerDifficultyRows()) {
                const maxLevel = this.getTestLevelCount(row.id);
                this.testLevelByDifficulty[row.id] = Math.max(1, Math.floor(Math.random() * maxLevel) + 1);
            }
        }

        changeTestLevelSelection(diffId, delta) {
            if (!this.testLevelPickerEnabled) return false;
            const maxLevel = this.getTestLevelCount(diffId);
            const current = this.testLevelByDifficulty[diffId] || 1;
            const next = p.constrain(current + delta, 1, maxLevel);
            if (next === current) return false;
            this.testLevelByDifficulty[diffId] = next;
            p.localStorage?.save?.();
            return true;
        }

        getTestStartMoney(diffId) {
            const fallback = p.DIFFICULTY_PRESETS?.[diffId]?.money ?? 0;
            const value = this.testStartMoneyByDifficulty?.[diffId];
            return Math.max(0, Math.round(Number.isFinite(value) ? value : fallback));
        }

        changeTestStartMoney(diffId, delta) {
            if (!this.testLevelPickerEnabled) return false;
            const current = this.getTestStartMoney(diffId);
            const step = 25;
            const next = Math.max(0, current + delta * step);
            if (next === current) return false;
            this.testStartMoneyByDifficulty[diffId] = next;
            p.localStorage?.save?.();
            return true;
        }

        applyTestLevelSelectionToGame(diffId) {
            if (!this.testLevelPickerEnabled || !p.game) return;
            const row = this.getTestLevelPickerDifficultyRows().find((item) => item.id === diffId);
            if (!row) return;
            const localLevel = this.testLevelByDifficulty[diffId] || 1;
            p.game.setLevelPathByDifficulty(row.pathDifficulty, localLevel);
        }

        getTestLevelPreviewPoints(diffId) {
            const row = this.getTestLevelPickerDifficultyRows().find((item) => item.id === diffId);
            if (!row || !p.game) return [];
            const localLevel = this.testLevelByDifficulty[diffId] || 1;
            const entry = p.game.getPathPresetEntryByDifficulty(row.pathDifficulty, localLevel);
            return entry?.preset?.() || [];
        }

        getTestLevelPickerLayout() {
            if (!this.testLevelPickerEnabled) return null;

            const diffBtnH = Math.round(p.height * 0.09);
            const diffStartY = Math.round(p.height * 0.22);
            const diffGap = Math.round(diffBtnH * 0.7);
            const cardsTop = diffStartY + (diffBtnH + diffGap) * 2 + diffBtnH + 24;
            const panelX = 18;
            const panelY = cardsTop;
            const panelW = p.width - panelX * 2;
            const panelH = Math.max(150, p.height - panelY - 20);
            const titleH = 30;
            const cardsY = panelY + titleH + 8;
            const cardsH = panelH - titleH - 12;
            const toggleW = 86;
            const toggleH = 28;
            const toggleRect = {
                x: panelX + panelW - 14 - toggleW,
                y: panelY + 10,
                w: toggleW,
                h: toggleH
            };
            const gap = 12;
            const rows = this.getTestLevelPickerDifficultyRows();
            const cardW = Math.floor((panelW - gap * (rows.length - 1)) / rows.length);
            const cardH = cardsH;
            const cards = rows.map((row, index) => {
                const x = panelX + index * (cardW + gap);
                const y = cardsY;
                const previewX = x + 12;
                const previewY = y + 82;
                const previewW = cardW - 24;
                const previewH = Math.max(52, cardH - 94);
                const arrowSize = 24;
                const rightX = x + cardW - 12 - arrowSize;
                const leftX = rightX - arrowSize - 6;
                const arrowY = y + 10;
                const moneyArrowY = y + 42;
                return {
                    ...row,
                    x,
                    y,
                    w: cardW,
                    h: cardH,
                    previewX,
                    previewY,
                    previewW,
                    previewH,
                    minusHit: { x: leftX, y: arrowY, w: arrowSize, h: arrowSize },
                    plusHit: { x: rightX, y: arrowY, w: arrowSize, h: arrowSize },
                    minusMoneyHit: { x: leftX, y: moneyArrowY, w: arrowSize, h: arrowSize },
                    plusMoneyHit: { x: rightX, y: moneyArrowY, w: arrowSize, h: arrowSize }
                };
            });

            return {
                x: panelX,
                y: panelY,
                w: panelW,
                h: panelH,
                titleH,
                toggleRect,
                cards
            };
        }

        pointInRect(px, py, rect) {
            if (!rect) return false;
            return px >= rect.x && px <= rect.x + rect.w && py >= rect.y && py <= rect.y + rect.h;
        }

        handleTestLevelPickerClick(x, y) {
            if (!this.testLevelPickerEnabled) return false;

            this.normalizeTestLevelSelections();
            const layout = this.getTestLevelPickerLayout();
            if (!layout) return false;

            if (this.pointInRect(x, y, layout.toggleRect)) {
                this.testUnlockAllTowersEnabled = !this.testUnlockAllTowersEnabled;
                p.localStorage?.save?.();
                return true;
            }

            for (const card of layout.cards) {
                if (this.pointInRect(x, y, card.minusHit)) {
                    return this.changeTestLevelSelection(card.id, -1);
                }
                if (this.pointInRect(x, y, card.plusHit)) {
                    return this.changeTestLevelSelection(card.id, 1);
                }
                if (this.pointInRect(x, y, card.minusMoneyHit)) {
                    return this.changeTestStartMoney(card.id, -1);
                }
                if (this.pointInRect(x, y, card.plusMoneyHit)) {
                    return this.changeTestStartMoney(card.id, 1);
                }
            }

            return false;
        }

        drawTestLevelPreview(points, x, y, w, h, accent) {
            p.noStroke();
            p.fill(14, 20, 34, 220);
            p.rect(x, y, w, h, 12);

            p.stroke(255, 255, 255, 14);
            p.strokeWeight(1);
            for (let i = 1; i < 4; i++) {
                const gx = x + (w / 4) * i;
                p.line(gx, y + 8, gx, y + h - 8);
            }
            for (let i = 1; i < 3; i++) {
                const gy = y + (h / 3) * i;
                p.line(x + 8, gy, x + w - 8, gy);
            }

            if (!points || points.length === 0) return;

            let minX = Infinity;
            let minY = Infinity;
            let maxX = -Infinity;
            let maxY = -Infinity;
            for (const pt of points) {
                minX = Math.min(minX, pt.x);
                minY = Math.min(minY, pt.y);
                maxX = Math.max(maxX, pt.x);
                maxY = Math.max(maxY, pt.y);
            }

            const spanX = Math.max(1, maxX - minX);
            const spanY = Math.max(1, maxY - minY);
            const pad = 12;
            const scale = Math.min((w - pad * 2) / spanX, (h - pad * 2) / spanY);
            const offsetX = x + (w - spanX * scale) / 2 - minX * scale;
            const offsetY = y + (h - spanY * scale) / 2 - minY * scale;

            p.noFill();
            p.stroke(...accent, 245);
            p.strokeWeight(3);
            p.strokeJoin(p.ROUND);
            p.strokeCap(p.ROUND);
            p.beginShape();
            for (const pt of points) {
                p.vertex(offsetX + pt.x * scale, offsetY + pt.y * scale);
            }
            p.endShape();

            const start = points[0];
            const finish = points[points.length - 1];
            if (start) {
                p.noStroke();
                p.fill(106, 236, 140, 255);
                p.circle(offsetX + start.x * scale, offsetY + start.y * scale, 7);
            }
            if (finish) {
                p.noStroke();
                p.fill(255, 108, 108, 255);
                p.circle(offsetX + finish.x * scale, offsetY + finish.y * scale, 7);
            }
        }

        drawTestLevelPicker() {
            if (!this.testLevelPickerEnabled) return;

            this.normalizeTestLevelSelections();
            const layout = this.getTestLevelPickerLayout();
            if (!layout) return;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 6);

                p.noStroke();
                p.fill(9, 14, 26, 178);
                p.rect(layout.x, layout.y, layout.w, layout.h, 18);

                p.fill(228, 236, 255);
                p.textAlign(p.LEFT, p.TOP);
                p.textSize(20);
                p.text(p.t("menu.test_level_picker"), layout.x + 14, layout.y + 10);

                p.fill(170, 190, 225);
                p.textAlign(p.LEFT, p.TOP);
                p.textSize(16);
                p.text(p.t("menu.test_level_hint"), layout.x + 340, layout.y + 10);

                p.textAlign(p.RIGHT, p.TOP);
                p.fill(205, 216, 240);
                p.textSize(12);
                p.text(
                    p.t("menu.test_unlock_all_towers"),
                    layout.toggleRect.x - 10,
                    layout.toggleRect.y + 7
                );

                const toggleHovered = this.pointInRect(p.mouseX, p.mouseY, layout.toggleRect);
                const toggleOn = this.testUnlockAllTowersEnabled;
                p.noStroke();
                p.fill(
                    toggleOn ? 62 : 34,
                    toggleOn ? 126 : 48,
                    toggleOn ? 88 : 72,
                    toggleHovered ? 255 : 238
                );
                p.rect(
                    layout.toggleRect.x,
                    layout.toggleRect.y,
                    layout.toggleRect.w,
                    layout.toggleRect.h,
                    14
                );

                p.fill(245, 248, 255);
                p.textAlign(p.CENTER, p.CENTER);
                p.textSize(13);
                p.text(
                    p.t(toggleOn ? "toggle.on" : "toggle.off"),
                    layout.toggleRect.x + layout.toggleRect.w / 2,
                    layout.toggleRect.y + layout.toggleRect.h / 2 + 1
                );

                for (const card of layout.cards) {
                    const selectedLevel = this.testLevelByDifficulty[card.id] || 1;
                    const maxLevel = this.getTestLevelCount(card.id);
                    const startMoney = this.getTestStartMoney(card.id);
                    const previewPoints = this.getTestLevelPreviewPoints(card.id);

                    p.noStroke();
                    p.fill(24, 34, 56, 235);
                    p.rect(card.x, card.y, card.w, card.h, 16);

                    p.fill(...card.accent, 40);
                    p.rect(card.x + 8, card.y + 8, 7, card.h - 16, 8);

                    p.fill(245, 248, 255);
                    p.textAlign(p.LEFT, p.TOP);
                    p.textSize(18);
                    p.text(card.label, card.x + 20, card.y + 12);

                    p.fill(...card.accent, 220);
                    p.textSize(13);
                    p.text(`${p.t("menu.level_short")} ${selectedLevel}/${maxLevel}`, card.x + 20, card.y + 34);

                    p.fill(255, 220, 120);
                    p.textSize(13);
                    p.text(`${p.t("menu.money_short")} ${startMoney}`, card.x + 20, card.y + 66);

                    for (const control of [card.minusHit, card.plusHit, card.minusMoneyHit, card.plusMoneyHit]) {
                        const hovered = this.pointInRect(p.mouseX, p.mouseY, control);
                        p.noStroke();
                        p.fill(
                            hovered ? 62 : 42,
                            hovered ? 88 : 64,
                            hovered ? 132 : 98,
                            hovered ? 250 : 228
                        );
                        p.rect(control.x, control.y, control.w, control.h, 8);
                    }

                    p.fill(255);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(18);
                    p.text("-", card.minusHit.x + card.minusHit.w / 2, card.minusHit.y + card.minusHit.h / 2 - 1);
                    p.text("+", card.plusHit.x + card.plusHit.w / 2, card.plusHit.y + card.plusHit.h / 2 - 1);
                    p.text("-", card.minusMoneyHit.x + card.minusMoneyHit.w / 2, card.minusMoneyHit.y + card.minusMoneyHit.h / 2 - 1);
                    p.text("+", card.plusMoneyHit.x + card.plusMoneyHit.w / 2, card.plusMoneyHit.y + card.plusMoneyHit.h / 2 - 1);

                    this.drawTestLevelPreview(
                        previewPoints,
                        card.previewX,
                        card.previewY,
                        card.previewW,
                        card.previewH,
                        card.accent
                    );
                }
            p.pop();
        }
        // ===== End test start-menu level picker =====

        showSetting(){
            if(!this.settingModal)
              return
            this.updateSettingsButtonsLayout();
            const { modalW, modalH, modalLeft, modalTop, headerH, rows } = this.getSettingsPanelLayout();
            const modalX = -p.width / 2 + modalLeft;
            const modalY = -p.height / 2 + modalTop;
            p.push();
                p.noStroke();
                if(!p.gameStarted){
                    p.texture(this.textureBackground)
                    p.rect(-p.width/2,-p.height/2, p.width, p.height+20)
                }
            p.pop();

            p.push();
                p.translate(0, 0, 29);
                p.noStroke();
                p.fill(8, 8, 18, 120);
                p.rect(-p.width/2, -p.height/2, p.width, p.height);
            p.pop();

            p.push();
                p.translate(0, 0, 30);
                p.noStroke();
                p.fill(18, 12, 40, 228);
                p.rect(modalX, modalY , modalW , modalH, 24);

                p.stroke(255, 255, 255, 28);
                p.strokeWeight(1.6);
                p.noFill();
                p.rect(modalX + 1, modalY + 1, modalW - 2, modalH - 2, 24);

                p.noStroke();
                p.fill(208, 122, 236, 235);
                p.rect(modalX + 14, modalY + 14, modalW - 28, headerH, 20);
            p.pop();


            p.push();
                p.fill('#fff') 
                p.translate(0,0,31)
                p.textFont(p.variables.textFontFontick)
                p.textAlign(p.CENTER, p.CENTER)
                p.textSize(26)
                p.text(p.t("menu.settings"), modalX + modalW / 2, modalY + 14 + headerH / 2 + 2)

                rows.forEach((row) => {
                    const rx = -p.width / 2 + row.x;
                    const ry = -p.height / 2 + row.y;
                    const valueX = -p.width / 2 + row.valueX;

                    p.noStroke();
                    p.fill(33, 22, 67, 215);
                    p.rect(rx, ry, row.w, row.h, 18);

                    p.fill(...row.accent, 42);
                    p.rect(rx + 10, ry + 10, 8, row.h - 20, 6);

                    p.fill(244, 245, 255);
                    p.textAlign(p.LEFT, p.CENTER);
                    p.textSize(17);
                    p.text(row.label, rx + 28, ry + row.h / 2 + 1);

                    p.fill(14, 10, 31, 230);
                    p.stroke(...row.accent, 90);
                    p.strokeWeight(1.2);
                    p.rect(valueX, ry + 9, row.valueW, row.h - 18, 12);

                    p.noStroke();
                    p.fill(255, 255, 255);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(row.key === "graphics" ? 14 : 18);
                    p.text(row.value, valueX + row.valueW / 2, ry + row.h / 2 + 1);
                });
            p.pop();
            p.drawButtons('sets');
   
        }
        updateSettingsButtonsLayout(){
            const { rows, closeX, closeY } = this.getSettingsPanelLayout();

            const setPos = (name, x, y) => {
                const btn = p.buttonsArr.find(b => b.name === name);
                if (!btn) return;
                btn.x = x + btn.w / 2 - p.width / 2;
                btn.y = y + btn.h / 2 - p.height / 2;
            };

            const closeBtn = p.buttonsArr.find(b => b.name === "close");
            if (closeBtn) {
                setPos("close", closeX, closeY);
            }
            rows.forEach((row) => {
                setPos(row.minusBtn, row.minusX, row.controlY);
                setPos(row.plusBtn, row.plusX, row.controlY);
            });
        }
        updateGameEndButtonsLayout(mode = "lose") {
            const setPos = (name, x, y) => {
                const btn = p.buttonsArr.find(b => b.name === name);
                if (!btn) return;
                btn.x = x + btn.w / 2 - p.width / 2;
                btn.y = y + btn.h / 2 - p.height / 2;
            };

            if (mode === "choice") {
                const layout = {
                    centerY: p.height / 2 - 18,
                    cardH: 292,
                    finishX: p.width / 2 - 148,
                    continueX: p.width / 2 + 8,
                    btnYGap: 18
                };
                const buttonY = Math.round(layout.centerY + layout.cardH / 2 + layout.btnYGap);
                setPos("finish", layout.finishX, buttonY);
                setPos("continue", layout.continueX, buttonY);
                return;
            }

            const layout = mode === "lose"
                ? { centerY: p.height / 2 - 8, cardH: 252, statsX: p.width / 2 - 150, okX: p.width / 2 + 10, btnYGap: 16 }
                : { centerY: p.height / 2 - 50, cardH: 310, statsX: p.width / 2 - 150, okX: p.width / 2 + 10, btnYGap: 18 };

            const buttonY = Math.round(layout.centerY + layout.cardH / 2 + layout.btnYGap);
            setPos("endStats", layout.statsX, buttonY);
            setPos("end", layout.okX, buttonY);
        }
        showGameEndScreen(){
            const endScoreGoldBonus = this.finalizeEndScore();
            if(p.gamePassed)
            {
                this.updateGameEndButtonsLayout("win");
                p.push()
                    p.push(); 
                        p.noStroke();
                        p.angleMode(p.DEGREES);
                        p.rectMode(p.CENTER);
                        p.texture(p.variables.textureWinLose)
                        p.translate( 0, -50, 36);
                        p.rect(0, 0, 400, 310);
                    
                        p.translate( 0, 0, 2);
                        p.textSize(26)
                        p.fill('#fff');
                        p.textAlign(p.CENTER);
                        p.text(p.t("game.completed_title"), 0, 30, p.width/2 , 300  );
                        p.textSize(20)
                        p.text(p.t("game.endless_unlocked"), 0, 75, p.width/2 , 300  );
                        p.textSize(26)

                        p.push();
                            p.noStroke();
                            p.texture( p.variables.scoreTexture)
                            p.rect(-92, -5, 24 , 26) 
                        p.pop();
                        this.drawEndScoreInlineValue(-16, 180, p.variables.score, endScoreGoldBonus, {
                            align: "center",
                            valueSize: 26,
                            gap: 10
                        });

                        p.push();
                            p.noStroke();
                            p.texture( p.variables.clockImg)
                            p.rect(60, -5, 28 , 30) 
                        p.pop();
                        p.text(this.formatElapsedTime(p.menu.time), 60, 180, p.width/2, 300 );
                    p.pop(); 
                    p.drawButtons('gameEnd');
                p.pop()
            }
            else if(p.gameWon)
            {
                this.updateGameEndButtonsLayout("win");
                p.push()
                    p.push(); 
                        p.noStroke();
                        p.angleMode(p.DEGREES);
                        p.rectMode(p.CENTER);
                        p.texture(p.variables.textureWinLose)
                        p.translate( 0, -50, 36);
                        p.rect(0, 0, 400, 310);
                    
                        p.translate( 0, 0, 2);
                        p.textSize(28)
                        p.fill('#fff');
                        p.textAlign(p.CENTER);
                        p.text(p.t("game.congratulations") , 0, 30, p.width/2 , 300  );
                        p.textSize(22)
                        p.text(p.t("game.completed"), 0, 75, p.width/2, 300  );
                        p.textSize(26)

                        p.push();
                            p.noStroke();
                            p.texture( p.variables.scoreTexture)
                            p.rect(-92, -5, 24 , 26) 
                        p.pop();
                        this.drawEndScoreInlineValue(-16, 180, p.variables.score, endScoreGoldBonus, {
                            align: "center",
                            valueSize: 26,
                            gap: 10
                        });

                        p.push();
                            p.noStroke();
                            p.texture( p.variables.clockImg)
                            p.rect(60, -5, 28 , 30) 
                        p.pop();
                        p.text(this.formatElapsedTime(p.menu.time), 60, 180, p.width/2, 300 );

                        // p.text(`НАГРАДА:`,0, 240, p.width/2, 300 );
                        // p.fill('rgba(255, 0, 229, 1)')
                        // p.text(`EXP`,-30, 270, p.width/2, 300 );
                        // p.fill('#fff');
                        // p.text(p.variables.rewards[p.variables.diff].r, 30, 270, p.width/2, 300 );//
                    p.pop(); 
                    p.drawButtons('gameEnd');
                p.pop()
            }
            if(!p.gameWon && !p.gamePassed)
            {
                this.updateGameEndButtonsLayout("lose");
                const loseRows = [
                    {
                        label: p.t("game.summary_score"),
                        value: p.variables.score,
                        isScore: true,
                        bonusGold: endScoreGoldBonus,
                        icon: p.variables.scoreTexture,
                        iconTint: [255, 220, 120]
                    },
                    {
                        label: p.t("game.summary_time"),
                        value: this.formatElapsedTime(p.menu.time),
                        icon: p.variables.clockImg,
                        iconTint: [150, 210, 255]
                    },
                    {
                        label: p.t("panel.wave"),
                        value: `${p.game?.wave ?? 0}`,
                        icon: null,
                        iconTint: [255, 180, 180]
                    }
                ];

                p.push()
                    p.push(); 
                        p.noStroke();
                        p.angleMode(p.DEGREES);
                        p.rectMode(p.CENTER);
                        p.texture(p.variables.textureWinLose)
                    
                        p.translate( 0, -8, 36);
                        p.rect(0, 0, 380, 252);
                    
                        p.translate( 0, 0, 2);
                        p.textSize(28)
                        p.fill('#fff'); 
                        p.textAlign(p.CENTER);
                        p.text(p.t("game.lost"), 0, 50, p.width/2, 300);

                        const rowStartY = -32;
                        const rowGap = 50;
                        loseRows.forEach((row, index) => {
                            const rowY = rowStartY + index * rowGap;

                            p.push();
                                p.noStroke();
                                p.fill(16, 22, 34, 205);
                                p.rect(0, rowY, 272, 42, 14);
                            p.pop();

                            if (row.icon) {
                                p.push();
                                    p.noStroke();
                                    p.tint(row.iconTint[0], row.iconTint[1], row.iconTint[2], 255);
                                    p.texture(row.icon);
                                    p.rect(-96, rowY, 22, 22);
                                    p.noTint();
                                p.pop();
                            } else {
                                p.push();
                                    p.noStroke();
                                    p.fill(row.iconTint[0], row.iconTint[1], row.iconTint[2], 230);
                                    p.circle(-96, rowY, 12);
                                p.pop();
                            }

                            p.push();
                                p.textAlign(p.LEFT, p.CENTER);
                                p.textSize(14);
                                p.fill(186, 198, 226);
                                p.text(row.label, -66, rowY - 2);

                                if (row.isScore) {
                                    this.drawEndScoreInlineValue(104, rowY - 1, row.value, row.bonusGold, {
                                        align: "right",
                                        valueSize: 20,
                                        gap: 8
                                    });
                                } else {
                                    p.textAlign(p.RIGHT, p.CENTER);
                                    p.textSize(20);
                                    p.fill(255);
                                    p.text(row.value, 104, rowY - 1);
                                }
                            p.pop();
                        });
                    p.pop(); 
                    p.drawButtons('gameEnd');
                p.pop()
            } 
            if (p.game?.towerDamagePanelOpen) {
                p.game.drawTowerDamagePanel();
            }
            p.angleMode(p.RADIANS);
            }

        showWinChoice(){
            if(!p.gameStarted || p.gameEnded) return;
            const targetWaves = p.game?.mainCampaignWaves || 0;
            this.updateGameEndButtonsLayout("choice");
            const choiceRows = [
                {
                    label: p.t("game.summary_score"),
                    value: `${p.variables.score}`,
                    icon: p.variables.scoreTexture,
                    iconTint: [255, 220, 120]
                },
                {
                    label: p.t("game.summary_time"),
                    value: this.formatElapsedTime(p.menu.time),
                    icon: p.variables.clockImg,
                    iconTint: [150, 210, 255]
                },
                {
                    label: p.t("panel.wave"),
                    value: `${targetWaves}`,
                    icon: null,
                    iconTint: [140, 255, 208]
                }
            ];
            p.push()
                p.push(); 
                    p.noStroke();
                    p.angleMode(p.DEGREES);
                    p.rectMode(p.CENTER);
                    p.texture(p.variables.textureWinLose)
                    p.translate( 0, -18, 36);
                    p.rect(0, 0, 400, 292);
                
                    p.translate( 0, 0, 2);
                    p.textSize(26)
                    p.fill('#fff');
                    p.textAlign(p.CENTER);
                    p.text(p.t("game.cleared_waves", { waves: targetWaves }), 0, 34, p.width/2 , 300  );
                    p.textSize(18)
                    p.fill(196, 210, 235);
                    p.text(p.t("game.finish_or_continue"), 0, 68, p.width/2 , 300  );

                    const rowStartY = -16;
                    const rowGap = 48;
                    choiceRows.forEach((row, index) => {
                        const rowY = rowStartY + index * rowGap;

                        p.push();
                            p.noStroke();
                            p.fill(16, 22, 34, 205);
                            p.rect(0, rowY, 284, 42, 14);
                        p.pop();

                        if (row.icon) {
                            p.push();
                                p.noStroke();
                                p.tint(row.iconTint[0], row.iconTint[1], row.iconTint[2], 255);
                                p.texture(row.icon);
                                p.rect(-102, rowY, 22, 22);
                                p.noTint();
                            p.pop();
                        } else {
                            p.push();
                                p.noStroke();
                                p.fill(row.iconTint[0], row.iconTint[1], row.iconTint[2], 230);
                                p.circle(-102, rowY, 12);
                            p.pop();
                        }

                        p.push();
                            p.textAlign(p.LEFT, p.CENTER);
                            p.textSize(14);
                            p.fill(186, 198, 226);
                            p.text(row.label, -72, rowY - 2);

                            p.textAlign(p.RIGHT, p.CENTER);
                            p.textSize(20);
                            p.fill(255);
                            p.text(row.value, 110, rowY - 1);
                        p.pop();
                    });
                p.pop(); 
                p.drawButtons('postWin');
            p.pop()
            p.angleMode(p.RADIANS);
        }
    }

    class LocalStorage
    {
        load(){
            p.localObject = JSON.parse(localStorage.getItem("levelDefence"));
            if(!p.localObject){
                this.save();
                return
            }
            p.variables.gameMusic.volume =  p.localObject.music;
            p.variables.soundBound.volume = Math.max(0, Math.min(1, Number(p.localObject.sound) || 0));
            p.menu?.syncLoseSoundVolume?.();
            // p.variables.soundGameWin.volume = p.variables.gameMusic.volume;
            p.applyLanguage(p.localObject.lang || "ru", true);
            p.applyGraphicsQuality(p.localObject.graphics || "low", true);
            p.showTowerAttackReadinessBar = p.localObject.showTowerAttackReadinessBar !== false;

            const testMenu = p.localObject.testStartMenu || {};
            if (p.menu?.testLevelPickerEnabled) {
                const savedMoney = testMenu.startMoney || {};
                p.menu.testUnlockAllTowersEnabled = Boolean(testMenu.unlockAllTowers);
                for (const diffId of ["easy", "normal", "hard"]) {
                    const savedStartMoney = Math.round(Number(savedMoney[diffId]));
                    if (Number.isFinite(savedStartMoney) && savedStartMoney >= 0) {
                        p.menu.testStartMoneyByDifficulty[diffId] = savedStartMoney;
                    }
                }
            }
        }
        save(){
            const testStartMenu = p.menu?.testLevelPickerEnabled ? {
                unlockAllTowers: Boolean(p.menu.testUnlockAllTowersEnabled),
                startMoney: {
                    easy: p.menu.getTestStartMoney?.("easy") ?? (p.DIFFICULTY_PRESETS?.easy?.money ?? 0),
                    normal: p.menu.getTestStartMoney?.("normal") ?? (p.DIFFICULTY_PRESETS?.normal?.money ?? 0),
                    hard: p.menu.getTestStartMoney?.("hard") ?? (p.DIFFICULTY_PRESETS?.hard?.money ?? 0)
                }
            } : null;

            localStorage.setItem('levelDefence', JSON.stringify({
                music: p.variables.gameMusic.volume,
                sound: p.variables.soundBound.volume,
                graphics: p.graphicsQuality || "low",
                lang: p.lang || "ru",
                showTowerAttackReadinessBar: p.showTowerAttackReadinessBar !== false,
                testStartMenu
            }));
        }
    }

    // ======== TOWER DEFENCE CORE (Waypoints + Grid25) ========

    class Path {
        constructor(points) {
            this.points = points; // [{x,y}, ...] в координатах 0..p.width / 0..p.height
        }
        getPoint(i) { return this.points[i]; }
        lastIndex() { return this.points.length - 1; }
        draw() {
            p.push();
            p.translate(-p.width/2, -p.height/2, 2);
            p.noFill();
            p.stroke(255, 120);
            p.strokeWeight(25); // ширина визуально соответствует ширине запрета установки
            p.beginShape();
            for (const pt of this.points) 
                p.vertex(pt.x, pt.y)
            p.endShape();
            p.pop();
        }
    }

    class Unit {
        constructor(game, path, type, data = {}, get_reward = true) {
            this.game = game;
            this.path = path;
            this.i = 0; // текущая цель waypoint index
            const start = path.getPoint(0);
            this.x = start.x;
            this.y = start.y;

            this.speed = type.speed;
            this.hpMax = type.hp + p.game.wave;
            this.hp = this.hpMax;
            this.cost = Math.max(0, Math.round(type.cost ?? 0));
            this.reward = get_reward? type.reward: 0;
            this.contactDamage = type.damage ?? 1;
            this.r = type.radius;
            this.id = type.id;
            this.enemyClass = type.class || "normal";
            this.targetPriority = data?.targetPriority ?? type.targetPriority ?? 0;
            this.noBaseDamage = data?.noBaseDamage ?? Boolean(type.noBaseDamage);
            this.noRewardChildren = Boolean(data?.noRewardChildren);
            this.noChestDrop = Boolean(data?.noChestDrop);
            this.bossSummoned = Boolean(data?.bossSummoned);
            this.baseDamageTakenMult = Math.max(0.05, data?.damageTakenMult ?? type.damageTakenMult ?? 1);
            this.damageTakenMult = this.baseDamageTakenMult;
            this.trioGroupId = data?.trioGroupId ?? null;
            this.trioIndex = data?.trioIndex ?? null;
            this.trioDown = false;
            this.trioDownStartedAt = 0;
            this.trioDownOrder = 0;
            this.trioReviveDuration = Math.max(0.1, data?.trioReviveDuration ?? type.trioReviveDuration ?? 12);
            this.trioReviveTimer = 0;
            this.trioNormalBaseSpeed = 0;
            this.trioNormalRegen = 0;
            this.trioActiveTargetPriority = this.targetPriority;
            this.spawnInvulnerabilityDuration = Math.max(0, data?.spawnInvulnerabilityDuration ?? 0);
            this.spawnInvulnerableUntil = this.spawnInvulnerabilityDuration > 0
                ? (this.game?.simTime ?? 0) + this.spawnInvulnerabilityDuration
                : 0;
            this.chestDropChance = data?.chestDropChance ?? type.chestDropChance ?? 0.05;
            this.chestGold = data?.chestGold ?? type.chestGold ?? 20;
            this.chestLifetime = data?.chestLifetime ?? type.chestLifetime ?? 5;
            this.noScore = data?.noScore ?? Boolean(type.noScore);

            this.alive = true;
            this.reachedBase = false;
            // Текстура по умолчанию (поддержка одиночной и массива текстур)
            if (type.texture) {
                const textureSource = type.texture();
                if (Array.isArray(textureSource)) {
                    const validTextures = textureSource.filter(Boolean);
                    this.texture = validTextures.length > 0
                        ? validTextures[Math.floor(Math.random() * validTextures.length)]
                        : null;
                } else {
                    this.texture = textureSource;
                }
            }

            this.splitLevel = data?.splitLevel || 0;
            // Если тип умеет сам инициализироваться
            if (type.init)
                type.init(this);
         
            if (type.onDeath)
                this.onDeath = () => type.onDeath(this, game);

            if (type.onUpdate)
                this.onUpdate = (dt) => type.onUpdate(this, dt, game);

            this.walkPhase = 0;

            this.hpBasedSpeedBoostMax = type.hpBasedSpeedBoostMax || 0;
            this.slowTimer = 0;
            this.slowFactor = 1;
            this.auraSpeedUntil = 0;
            this.auraSpeedMult = 1;
            this.dirX = 1;

            this.burnTimer = 0;
            this.burnDamage = 0;
            this.burnStacks = 0;
            this.burnPerStack = 0;
            // this.burnDps = 0;
            this.maxBurnStacks = 5;
            // if (isNaN(this.hp) || isNaN(this.speed)) {
            //     console.error("Broken unit:", this);
            // }

            this.regen = type.regen || 0;
            this.regenFxPhase = Math.random() * Math.PI * 2;
            this.healFxTimer = 0;
            this.shieldHits = type.shieldHits || 0;

            const bossAbilities = data?.bossAbilities ?? type.bossAbilities ?? [];
            if (bossAbilities && p.applyBossAbilities) {
                p.applyBossAbilities(this, bossAbilities, game);
            }
            const shouldEnableBossAbilityCycle = Boolean(
                data?.enableBossAbilityCycle ?? type.enableBossAbilityCycle
            );
            const bossAbilityCycleTier = Math.max(
                1,
                Math.round(data?.bossAbilityCycleTier ?? type.bossAbilityCycleTier ?? 1)
            );
            if (
                shouldEnableBossAbilityCycle &&
                Array.isArray(this.bossActiveAbilityIds) &&
                this.bossActiveAbilityIds.length > 0
            ) {
                p.configureEndlessBossAbilityCycle?.(this, bossAbilityCycleTier);
            }
            this.isEndlessEliteHero = this.id === "end_game_unit" && (
                shouldEnableBossAbilityCycle ||
                (Array.isArray(this.bossAbilities) && this.bossAbilities.length > 0)
            );
            if (this.isEndlessEliteHero && p.enemyTextures?.end_game_unit_hero) {
                this.texture = p.enemyTextures.end_game_unit_hero;
            }

            const diffCfg = this.game?.difficultyProfile || p.DIFFICULTY_PRESETS.normal;
            const endlessTier = data?.endlessTier ?? 0;
            const isEndlessWave = (this.game?.wave ?? 0) > (this.game?.mainCampaignWaves ?? 15);
            const isEndlessUnit = endlessTier > 0 || isEndlessWave;
            const campaignEnemyHpMult = diffCfg.campaignEnemyHpMult ?? diffCfg.enemyHpMult ?? 1;
            const endlessEnemyHpMult = diffCfg.endlessEnemyHpMult ?? diffCfg.enemyHpMult ?? 1;
            const enemyHpMult = isEndlessUnit ? endlessEnemyHpMult : campaignEnemyHpMult;
            const isBoss = this.enemyClass === "boss" || this.id.startsWith("boss_");
            const bossHpMult = isBoss ? (diffCfg.bossHpMult || 1) : 1;
            const hpMult = enemyHpMult * bossHpMult;

            if (typeof this.hpMax === "number") {
                this.hpMax = Math.max(1, this.hpMax * hpMult);
            }
            if (typeof this.maxHp === "number") {
                this.maxHp = Math.max(1, this.maxHp * hpMult);
            }
            if (typeof this.hp === "number") {
                this.hp *= hpMult;
                const maxHpRef = this.maxHp ?? this.hpMax;
                if (typeof maxHpRef === "number") {
                    this.hp = Math.min(maxHpRef, this.hp);
                }
            }
            if (typeof this.speed === "number") {
                this.speed *= diffCfg.enemySpeedMult || 1;
            }
            if (typeof this.reward === "number") {
                this.reward = this.reward > 0
                    ? Math.max(1, Math.round(this.reward * (diffCfg.rewardMult || 1)))
                    : 0;
            }
            if (typeof this.regen === "number" && this.regen > 0) {
                this.regen *= hpMult;
            }
            if (typeof this.healAmount === "number") {
                this.healAmount *= hpMult;
            }

            if (this.shieldHits > 0) {
                this.shieldHits = Math.max(1, Math.round(this.shieldHits * (diffCfg.shieldMult || 1)));
            }

            if (this.enemyClass === "hero") {
                const heroHpMult = diffCfg.heroHpMult || 1.25;
                const heroSpeedMult = diffCfg.heroSpeedMult || 1.05;
                const heroRewardMult = diffCfg.heroRewardMult || 1.25;
                const heroRegenMult = diffCfg.heroRegenMult || 1.2;
                const heroShieldMult = diffCfg.heroShieldMult || 1.15;

                if (typeof this.hpMax === "number") {
                    this.hpMax = Math.max(1, this.hpMax * heroHpMult);
                }
                if (typeof this.maxHp === "number") {
                    this.maxHp = Math.max(1, this.maxHp * heroHpMult);
                }
                if (typeof this.hp === "number") {
                    this.hp *= heroHpMult;
                    const maxHpRef = this.maxHp ?? this.hpMax;
                    if (typeof maxHpRef === "number") {
                        this.hp = Math.min(maxHpRef, this.hp);
                    }
                }
                if (typeof this.speed === "number") {
                    this.speed *= heroSpeedMult;
                }
                if (typeof this.reward === "number") {
                    this.reward = this.reward > 0
                        ? Math.max(1, Math.round(this.reward * heroRewardMult))
                        : 0;
                }
                if (typeof this.regen === "number" && this.regen > 0) {
                    this.regen *= heroRegenMult;
                }
                if (typeof this.healAmount === "number") {
                    this.healAmount *= heroRegenMult;
                }
                if (typeof this.shieldHits === "number" && this.shieldHits > 0) {
                    this.shieldHits = Math.max(1, Math.round(this.shieldHits * heroShieldMult));
                }
            }

            const endlessRole = data?.endlessRole ?? "escort";
            if (endlessTier > 0 && p.applyEndlessWaveScaling) {
                p.applyEndlessWaveScaling(this, endlessTier, endlessRole);
            }
            if (this.isEndlessEliteHero) {
                const eliteHeroHpMult = 1.25;
                if (typeof this.hpMax === "number") {
                    this.hpMax = Math.max(1, this.hpMax * eliteHeroHpMult);
                }
                if (typeof this.maxHp === "number") {
                    this.maxHp = Math.max(1, this.maxHp * eliteHeroHpMult);
                }
                if (typeof this.hp === "number") {
                    this.hp *= eliteHeroHpMult;
                    const maxHpRef = this.maxHp ?? this.hpMax;
                    if (typeof maxHpRef === "number") {
                        this.hp = Math.min(maxHpRef, this.hp);
                    }
                }
            }

            this.baseSpeed = this.speed;
            this.maxShieldHits = this.shieldHits;
            this.trioNormalBaseSpeed = this.baseSpeed;
            this.trioNormalRegen = this.regen ?? 0;
            this.trioActiveTargetPriority = this.targetPriority;
            this.shieldVfxTheme = this.shieldVfxTheme || type.shieldVfxTheme || "medieval"; // tech | medieval

            this.deathFx = null;
            this.deathFxTime = 0;
            this.deathFxDuration = 0;
            this.deathDone = false;

            this.walkSide = 0;
            this.walkStep = 1;
            this.walkSway = 0;
            this.walkTilt = 0;
            this.walkLift = 0;
            this.walkLiftN = 1;
            this.walkRotX = -p.PI / 4;
            this.shadowWobble = 1.1;
            this.shadowScaleY = 0.41;
            this.refreshWalkVisuals();
        }

        refreshWalkVisuals(target = this.path?.getPoint?.(this.i + 1)) {
            const phase = this.walkPhase || 0;
            const side = Math.sin(phase);
            const step = Math.cos(phase);
            const liftN = Math.max(0, step);

            this.walkSide = side;
            this.walkStep = step;
            this.walkSway = side * 1;
            this.walkTilt = side * 0.15;
            this.walkLift = liftN * 2;
            this.walkLiftN = liftN;

            const tX = p.constrain(this.y / p.height, 0, 1);
            this.walkRotX = -p.PI / p.lerp(3, 6, tX);

            if (target) {
                const dx = target.x - this.x;
                this.dirX = Math.sign(dx) || this.dirX || 1;
            }

            const stride = Math.abs(side);
            this.shadowWobble = 1 + stride * 0.08 + liftN * 0.02;
            this.shadowScaleY = p.constrain(0.45 - liftN * 0.04, 0.39, 0.45);
        }

        drawShadow() {

            if (!this.alive) return;

            p.push();
            p.translate(-p.width / 2, -p.height / 2, 4);

            // Ноги
            const footX = this.x;
            const footY = this.y + this.r * 1.5;

            const s = this.r * 3;

            // ===== Позиция =====
            p.translate(footX, footY);
            p.translate(this.walkSway, 0);
            p.scale(this.dirX ?? 1, 1);
            p.rotateZ(this.walkTilt * 0.9);

            const shadowAlpha = 95; // стабильная альфа без мерцания

            p.scale(this.shadowWobble, this.shadowScaleY);
            p.rotateX(p.PI)
            // ===== Цвет =====
            // if(this.slowTimer > 0)
            //     p.tint(0, 0, 255, 120);
            // else
            const untargetableAlpha = this.getUntargetableAlpha();
            if (untargetableAlpha < 0.999 || this.id === "ghost" || this.hasGhostAbility) {
                p.tint(0, 0, 0, shadowAlpha * untargetableAlpha);
            } else {
                p.tint(0, 0, 0, shadowAlpha);
            }


       
            p.noStroke();
            if (this.texture) {
                p.texture(this.texture);
            } else {
                p.fill(90, 90, 90, shadowAlpha);
            }
            p.plane(s, s);

            p.noTint();
            p.pop();
        }

        isSpawnInvulnerable() {
            const now = this.game?.simTime ?? 0;
            return (this.spawnInvulnerableUntil ?? 0) > now;
        }

        isUntargetable() {
            return this.trioDown || this.isPhased || this.isSpawnInvulnerable() || this.portalInvulnerable === true;
        }

        getUntargetableAlpha() {
            let alpha = 1;
            const now = this.game?.simTime ?? 0;

            if (this.trioDown) {
                const blink = (Math.sin(now * 8 + this.x * 0.04 + this.y * 0.03) + 1) * 0.5;
                alpha = Math.min(alpha, p.lerp(0.42, 0.86, blink));
            }

            if (this.id === "ghost" || this.hasGhostAbility) {
                alpha = Math.min(alpha, this.ghostAlpha ?? (this.isPhased ? 0.45 : 1));
            }

            if (this.isSpawnInvulnerable()) {
                const duration = Math.max(0.001, this.spawnInvulnerabilityDuration || 0.3);
                const remaining = Math.max(0, (this.spawnInvulnerableUntil ?? 0) - now);
                const fade = p.constrain(remaining / duration, 0, 1);
                const pulse = (Math.sin(now * 28 + this.x * 0.05 + this.y * 0.03) + 1) * 0.5;
                const spawnAlpha = p.lerp(1, p.lerp(0.32, 0.5, pulse), fade);
                alpha = Math.min(alpha, spawnAlpha);
            }

            return p.constrain(alpha, 0.2, 1);
        }

        damage(dmg, sourceTower = null) {
            if (!this.alive) return 0;
            if (this.isUntargetable()) return 0;
            if (this.trioDown) return 0;

            if (this.shieldHits > 0) {
                this.shieldHits--;
                return 0; // полностью съели удар
            }

            const scaledDamage = Math.max(0, dmg * (this.damageTakenMult ?? 1));
            const appliedDamage = Math.max(0, Math.min(this.hp, scaledDamage));
            this.hp -= scaledDamage;
            if (appliedDamage > 0 && sourceTower?.recordDamage) {
                sourceTower.recordDamage(appliedDamage);
                this.lastHitTower = sourceTower;
            }
            if (this.hp <= 0) {
                if (this.handleTrioDown("hit")) return appliedDamage;
                this.die("hit");
            }
            return appliedDamage;
        }

        handleTrioDown(reason = "hit") {
            if (!this.trioGroupId) return false;
            if (this.trioDown) return true;

            const now = this.game?.simTime ?? 0;
            this.trioDown = true;
            this.trioDownStartedAt = now;
            this.trioDownOrder = ((this.game?.trioDownSeq ?? 0) + 1);
            if (this.game) {
                this.game.trioDownSeq = this.trioDownOrder;
            }
            this.trioReviveTimer = this.trioReviveDuration;
            this.hp = 0;
            this.regen = 0;
            this.baseSpeed = 0;
            this.speed = 0;
            this.targetPriority = -1000000;
            this.isPhased = false;
            this.ghostAlpha = 1;
            this.teleportFx = 0;
            this.jamPulseFx = 0;
            this.decoyCastFx = 0;
            this.summonFx = 0;
            this.healFlash = 0;
            this.healFxTimer = 0;
            this.slowTimer = 0;
            this.slowFactor = 1;
            this.auraSpeedUntil = 0;
            this.auraSpeedMult = 1;
            this.burnTimer = 0;
            this.burnDamage = 0;
            this.burnStacks = 0;
            this.burnPerStack = 0;
            this.burnSourceTower = null;
            this.trioDownReason = reason;

            if (this.game?.trioDownAnchors) {
                const existingAnchor = this.game.trioDownAnchors[this.trioGroupId];
                if (!existingAnchor || (existingAnchor.order ?? Infinity) > this.trioDownOrder) {
                    this.game.trioDownAnchors[this.trioGroupId] = {
                        x: this.x,
                        y: this.y,
                        i: this.i,
                        order: this.trioDownOrder,
                        trioIndex: this.trioIndex ?? 0,
                        bossAbilities: Array.isArray(this.bossAbilities) ? [...this.bossAbilities] : [],
                        endlessBossTier: this.endlessBossTier ?? 0
                    };
                }
            }

            if (this.game?.resolveTrioGroup) {
                this.game.resolveTrioGroup(this.trioGroupId);
            }

            return true;
        }

        reviveFromTrioDown() {
            if (!this.alive || !this.trioDown) return false;

            const now = this.game?.simTime ?? 0;
            const maxHp = Math.max(1, this.hpMax ?? this.maxHp ?? 1);
            const prevDownOrder = this.trioDownOrder ?? 0;
            const prevTrioIndex = this.trioIndex ?? 0;
            const groupId = this.trioGroupId;

            this.trioDown = false;
            this.trioDownStartedAt = 0;
            this.trioDownOrder = 0;
            this.trioReviveTimer = 0;
            this.hp = maxHp * 0.5;
            this.regen = this.trioNormalRegen ?? 0;
            this.baseSpeed = this.trioNormalBaseSpeed ?? this.baseSpeed ?? 0;
            this.speed = this.baseSpeed * (this.slowFactor ?? 1);
            this.targetPriority = this.trioActiveTargetPriority ?? 0;
            this.trioDownReason = null;
            this.spawnInvulnerableUntil = Math.max(
                this.spawnInvulnerableUntil ?? 0,
                now + Math.max(0.2, Math.min(0.45, this.trioReviveDuration * 0.03))
            );
            this.healFlash = Math.max(this.healFlash ?? 0, 1);
            this.healFxTimer = Math.max(this.healFxTimer ?? 0, 0.45);

            const anchor = groupId && this.game?.trioDownAnchors
                ? this.game.trioDownAnchors[groupId]
                : null;
            const wasAnchor = !!anchor &&
                (anchor.order ?? 0) === prevDownOrder &&
                (anchor.trioIndex ?? 0) === prevTrioIndex;

            if (wasAnchor) {
                const nextAnchor = this.game?.units
                    ?.filter(u =>
                        u?.trioGroupId === groupId &&
                        u.alive &&
                        !u.reachedBase &&
                        u.trioDown
                    )
                    .sort((a, b) => {
                        const aOrder = a.trioDownOrder ?? 0;
                        const bOrder = b.trioDownOrder ?? 0;
                        if (aOrder !== bOrder) return aOrder - bOrder;
                        const aIndex = Number.isFinite(a.trioIndex) ? a.trioIndex : 0;
                        const bIndex = Number.isFinite(b.trioIndex) ? b.trioIndex : 0;
                        return aIndex - bIndex;
                    })?.[0];

                if (nextAnchor) {
                    this.game.trioDownAnchors[groupId] = {
                        x: nextAnchor.x,
                        y: nextAnchor.y,
                        i: nextAnchor.i,
                        order: nextAnchor.trioDownOrder ?? 0,
                        trioIndex: nextAnchor.trioIndex ?? 0,
                        bossAbilities: Array.isArray(nextAnchor.bossAbilities) ? [...nextAnchor.bossAbilities] : [],
                        endlessBossTier: nextAnchor.endlessBossTier ?? 0
                    };
                } else {
                    delete this.game.trioDownAnchors[groupId];
                }
            }

            return true;
        }

        die(reason = "hit") {
            if (!this.alive) return;
            this.alive = false;
            this.startDeathFx(reason);

            if (this.onDeath) {
                this.onDeath();
            }
        }

        startDeathFx(reason = "hit") {
            const style = this.getDeathFxStyle(reason);

            this.deathFxTime = 0;
            this.deathDone = false;
            this.deathFxDuration = style.duration;
            this.deathFx = {
                style: style.id,
                particles: style.particles,
                ring: style.ring
            };
        }

        getDeathFxStyle(reason = "hit") {
            const mkParticles = (count, speedMin, speedMax, lifeMin, lifeMax, sizeMin, sizeMax, gravity, colorA, colorB) => {
                const arr = [];
                for (let i = 0; i < count; i++) {
                    const a = Math.random() * Math.PI * 2;
                    const speed = p.random(speedMin, speedMax);
                    arr.push({
                        x: this.x,
                        y: this.y,
                        vx: Math.cos(a) * speed,
                        vy: Math.sin(a) * speed,
                        life: p.random(lifeMin, lifeMax),
                        maxLife: 0,
                        size: p.random(sizeMin, sizeMax),
                        gravity,
                        color: [
                            p.random(colorA[0], colorB[0]),
                            p.random(colorA[1], colorB[1]),
                            p.random(colorA[2], colorB[2])
                        ]
                    });
                    arr[i].maxLife = arr[i].life;
                }
                return arr;
            };

            if (reason === "burn" || this.id === "burn") {
                return {
                    id: "burn",
                    duration: 0.45,
                    ring: null,
                    particles: mkParticles(14, 30, 120, 0.2, 0.45, 2, 5, 90, [255, 120, 20], [255, 240, 120])
                };
            }

            if (this.id === "shield") {
                return {
                    id: "shield",
                    duration: 0.38,
                    ring: { r0: this.r * 0.8, r1: this.r * 2.4 },
                    particles: mkParticles(10, 40, 120, 0.16, 0.34, 2, 4, 60, [110, 180, 255], [200, 235, 255])
                };
            }

            if (this.id === "split" || this.id === "boss_split") {
                return {
                    id: "split",
                    duration: 0.28,
                    ring: { r0: this.r * 0.4, r1: this.r * 1.7 },
                    particles: mkParticles(8, 30, 90, 0.14, 0.26, 2, 4, 80, [220, 220, 220], [255, 255, 255])
                };
            }

            if (this.id === "tank" || this.id === "boss_tank") {
                return {
                    id: "tank",
                    duration: 0.5,
                    ring: { r0: this.r * 0.6, r1: this.r * 2.6 },
                    particles: mkParticles(16, 40, 130, 0.2, 0.45, 3, 6, 140, [110, 95, 70], [180, 160, 120])
                };
            }

            return {
                id: "default",
                duration: 0.3,
                ring: { r0: this.r * 0.5, r1: this.r * 1.8 },
                particles: mkParticles(8, 30, 100, 0.12, 0.3, 2, 4, 100, [170, 170, 170], [240, 240, 240])
            };
        }

        updateDeathFx(dt) {
            if (!this.deathFx || this.deathDone) return;

            this.deathFxTime += dt;

            for (const pfx of this.deathFx.particles) {
                if (pfx.life <= 0) continue;
                pfx.life -= dt;
                pfx.vy += pfx.gravity * dt;
                pfx.x += pfx.vx * dt;
                pfx.y += pfx.vy * dt;
            }

            if (this.deathFxTime >= this.deathFxDuration) {
                this.deathDone = true;
            }
        }

        get shouldRemove() {
            if (this.reachedBase) return true;
            return !this.alive && this.deathDone;
        }

        teleportForward(distance) {
            if (!this.alive || this.reachedBase) return;

            let remain = Math.max(0, distance || 0);
            if (remain <= 0) return;

            while (remain > 0 && !this.reachedBase) {
                const target = this.path.getPoint(this.i + 1);
                if (!target) {
                    this.reachedBase = true;
                    return;
                }

                const dx = target.x - this.x;
                const dy = target.y - this.y;
                const dist = Math.hypot(dx, dy);

                if (dist < 0.0001) {
                    this.x = target.x;
                    this.y = target.y;
                    this.i += 1;
                    if (this.i >= this.path.lastIndex()) {
                        this.reachedBase = true;
                        return;
                    }
                    continue;
                }

                if (remain >= dist) {
                    this.x = target.x;
                    this.y = target.y;
                    this.i += 1;
                    remain -= dist;

                    if (this.i >= this.path.lastIndex()) {
                        this.reachedBase = true;
                        return;
                    }
                } else {
                    const k = remain / dist;
                    this.x += dx * k;
                    this.y += dy * k;
                    remain = 0;
                }
            }
        }

        applySlow(factor, duration) {
            if (this.isUntargetable()) return;
            if (this.trioDown) return;

            const clampedFactor = Math.max(0, Math.min(1, factor ?? 1));
            const slowResistance = Math.max(0, Math.min(0.9, this.slowResistance ?? 0));
            const slowAmount = 1 - clampedFactor;
            const adjustedFactor = 1 - slowAmount * (1 - slowResistance);
            if (adjustedFactor >= this.slowFactor) return; // не усиливаем более слабым

            this.slowFactor = adjustedFactor;
            this.slowTimer = duration;
            this.speed = this.baseSpeed * adjustedFactor;
        }

        applyAuraSpeed(mult, duration = 0.2) {
            if (this.trioDown) return;
            const safeMult = Math.max(1, mult || 1);
            const now = this.game?.simTime ?? 0;
            const safeDuration = Math.max(0, duration || 0);
            const activeUntil = (this.auraSpeedUntil ?? 0) > now ? (this.auraSpeedUntil ?? 0) : now;
            const activeMult = activeUntil > now ? Math.max(1, this.auraSpeedMult || 1) : 1;
            const nextUntil = Math.max(activeUntil, now + safeDuration);
            const nextMult = Math.max(activeMult, safeMult);

            if (nextUntil <= activeUntil && nextMult <= activeMult) return;

            this.auraSpeedUntil = nextUntil;
            this.auraSpeedMult = nextMult;
        }

        getBurnHealingReduction() {
            if ((this.burnTimer ?? 0) <= 0 || (this.burnStacks ?? 0) <= 0) return 0;
            return Math.min(0.7, this.burnStacks * 0.15);
        }

        getAdjustedHealing(amount) {
            const safeAmount = Math.max(0, Number(amount) || 0);
            if (safeAmount <= 0) return 0;
            return safeAmount * (1 - this.getBurnHealingReduction());
        }

        applyBurn(dps, duration, sourceTower = null) {
            // this.burnDamage += dmg; // стакается
            // this.burnTimer = Math.max(this.burnTimer, duration);
            if (this.isUntargetable()) return;
            if (this.trioDown) return;

            const incomingDps = Math.max(0, dps || 0);
            if (incomingDps <= 0) return;

            if (this.burnStacks < this.maxBurnStacks) {
                this.burnStacks++;
            }

            // Обновляем таймер
            this.burnTimer = Math.max(this.burnTimer, duration || 0);

            // Более слабый burn не может ослабить уже активный эффект
            this.burnPerStack = Math.max(this.burnPerStack || 0, incomingDps);

            // Пересчитываем DPS
            this.burnDamage = this.burnStacks * this.burnPerStack;
            if (sourceTower) {
                this.burnSourceTower = sourceTower;
            }
        }

        update(dt) {
            if (!this.alive) {
                this.updateDeathFx(dt);
                return;
            }
            if (this.reachedBase) return;

            this.damageTakenMult = this.baseDamageTakenMult;

            if (this.healFxTimer > 0) {
                this.healFxTimer = Math.max(0, this.healFxTimer - dt);
            }

            if (this.shieldHits > this.maxShieldHits) {
                this.maxShieldHits = this.shieldHits;
            }

            if (this.trioDown) {
                this.isPhased = false;
                this.teleportFx = Math.max(0, (this.teleportFx || 0) - dt * 2.5);
                this.jamPulseFx = Math.max(0, (this.jamPulseFx || 0) - dt * 2.4);
                this.decoyCastFx = Math.max(0, (this.decoyCastFx || 0) - dt * 2.2);
                this.summonFx = Math.max(0, (this.summonFx || 0) - dt * 1.8);
                this.trioReviveTimer = Math.max(0, (this.trioReviveTimer ?? this.trioReviveDuration) - dt);
                if (this.trioReviveTimer <= 0) {
                    this.reviveFromTrioDown();
                }
                return;
            }

            this.isPhased = false;
            if (this.onUpdate)
                this.onUpdate(dt);

            // Fast: ускоряется, когда у живых юнитов на поле падает средний %HP
            let effectiveBaseSpeed = this.baseSpeed;
            if (this.id === "fast" && this.hpBasedSpeedBoostMax > 0) {
                const avgHpRatio = this.game?.aliveUnitHpRatioAvg ?? 1;
                const missingHpRatio = 1 - avgHpRatio;
                effectiveBaseSpeed = this.baseSpeed * (1 + missingHpRatio * this.hpBasedSpeedBoostMax);
            }
            
            if (this.slowTimer > 0) {
                this.slowTimer -= dt;

                if (this.slowTimer <= 0) {
                    this.slowFactor = 1;
                }
            }

            const now = this.game?.simTime ?? 0;
            if ((this.auraSpeedUntil ?? 0) <= now) {
                this.auraSpeedUntil = 0;
                this.auraSpeedMult = 1;
            }

            this.speed = effectiveBaseSpeed * this.auraSpeedMult * this.slowFactor;

            if (this.burnTimer > 0) {
                this.burnTimer -= dt;

                if (!this.isUntargetable() && !this.trioDown) {
                    const scaledBurn = this.burnDamage * (this.damageTakenMult ?? 1);
                    const burnApplied = Math.max(0, Math.min(this.hp, scaledBurn * dt));
                    this.hp -= scaledBurn * dt;
                    if (burnApplied > 0 && this.burnSourceTower?.recordDamage) {
                        this.burnSourceTower.recordDamage(burnApplied);
                        this.lastHitTower = this.burnSourceTower;
                    }
                    
                    if (this.hp <= 0) {
                        if (!this.handleTrioDown("burn")) {
                            this.die("burn");
                        }
                    }
                }

                if (this.burnTimer <= 0) {
                    // Сброс
                    this.burnStacks = 0;
                    this.burnDamage = 0;
                    this.burnPerStack = 0;
                    this.burnSourceTower = null;
                }
            }

            const target = this.path.getPoint(this.i + 1);
            if (!target) {
                this.reachedBase = true;
                return;
            }

            const dx = target.x - this.x;
            const dy = target.y - this.y;
            const dist = Math.hypot(dx, dy);

            this.walkPhase = dist * 0.2 ;
     
            const step = this.speed * dt;
            if (dist <= step || dist < 0.001) {
                this.x = target.x;
                this.y = target.y;
                this.i += 1;
                this.refreshWalkVisuals(this.path.getPoint(this.i + 1));
                if (this.i >= this.path.lastIndex()) {
                    this.reachedBase = true;
                }
                return;
            }

            // 💚 Regen
            if (this.regen > 0 && this.alive) {
                const regenAmount = this.getAdjustedHealing(this.regen * dt);
                this.hp = Math.min(
                    this.hpMax,
                    this.hp + regenAmount
                );
            }

            this.x += (dx / dist) * step;
            this.y += (dy / dist) * step;
            this.refreshWalkVisuals(target);
        }

        draw() {
            if (!this.alive) {
                this.drawDeathFx();
                return;
            }

            this.drawShadow();

            // ===== Speed Aura Buff =====
            const now = this.game?.simTime ?? 0;
            if ((this.auraSpeedUntil ?? 0) > now && this.auraSpeedMult > 1) {
                const pulse = (Math.sin(p.frameCount * 0.35 + this.y * 0.02) + 1) * 0.5;
                const alpha = 95 + pulse * 65;
                const dir = -(this.dirX || 1);
                const baseY = this.y + this.r * 0.2;

                p.push();
                    p.translate(
                        -p.width / 2,
                        -p.height / 2,
                        2
                    );

                    p.stroke(130, 205, 255, alpha);
                    p.strokeWeight(2.2);
                    p.line(this.x + dir * (this.r * 1.2), baseY - 2, this.x + dir * (this.r * 2.3), baseY - 2);
                    p.line(this.x + dir * (this.r * 1.0), baseY + 3, this.x + dir * (this.r * 1.9), baseY + 3);

                    p.stroke(190, 235, 255, alpha * 0.65);
                    p.strokeWeight(1.4);
                    p.line(this.x + dir * (this.r * 1.35), baseY - 6, this.x + dir * (this.r * 2.0), baseY - 6);
                p.pop();
            }

            // ===== Heal Aura =====
            if (this.healRadius) {

                this.healPulse += 0.05;

                const pulse =
                    Math.sin(this.healPulse) * 4;

                const alpha =
                    40 + pulse * 3;

                p.push();
                    p.translate(
                        -p.width/2,
                        -p.height/2,
                        1
                    );

                    p.noFill();
                    p.stroke(80, 255, 120, alpha);
                    p.strokeWeight(2);

                    p.circle(
                        this.x,
                        this.y,
                        (this.healRadius * 2) + pulse
                    );
                p.pop();

                  // ===== Heal Flash =====
                if (this.healFlash > 0) {

                    const a = this.healFlash * 120;

                    p.push();
                        p.translate(
                            -p.width/2,
                            -p.height/2,
                            2
                        );

                        p.noStroke();
                        p.fill(100, 255, 150, a);

                        p.circle(
                            this.x,
                            this.y,
                            (this.healRadius * 2) + pulse
                        );
                    p.pop();
                }
            }

            if (this.speedAuraRadius) {
                const pulse = Math.sin(p.frameCount * 0.12 + (this.speedAuraPhase || 0) * 5) * 3;
                const auraAlpha = 55;

                p.push();
                    p.translate(
                        -p.width / 2,
                        -p.height / 2,
                        1
                    );

                    p.noFill();
                    p.stroke(90, 180, 255, auraAlpha);
                    p.strokeWeight(2);
                    p.circle(
                        this.x,
                        this.y,
                        (this.speedAuraRadius * 2) + pulse
                    );
                p.pop();
            }

            if ((this.id === "jammer" || this.hasJammerAbility) && this.jamPulseFx > 0 && this.jamRadius > 0) {
                const fx = p.constrain(this.jamPulseFx, 0, 1);
                const pulseR = this.jamRadius * (1 + (1 - fx) * 0.35);
                const alpha = 160 * fx;

                p.push();
                    p.translate(
                        -p.width / 2,
                        -p.height / 2,
                        2
                    );
                    p.noFill();
                    p.stroke(255, 120, 120, alpha);
                    p.strokeWeight(1.5 + 2 * fx);
                    p.circle(this.x, this.y, pulseR * 2);
                p.pop();
            }

            if ((this.id === "decoy_master" || this.hasDecoyMasterAbility) && this.decoyCastFx > 0) {
                const fx = p.constrain(this.decoyCastFx, 0, 1);
                const r = this.r * (2 + (1 - fx) * 1.3);

                p.push();
                    p.translate(
                        -p.width / 2,
                        -p.height / 2,
                        2
                    );
                    p.noFill();
                    p.stroke(210, 170, 255, 180 * fx);
                    p.strokeWeight(1.6 + fx * 1.4);
                    p.circle(this.x, this.y, r * 2);
                p.pop();
            }

            if (this.id === "boss_summoner" && this.summonFx > 0) {
                const fx = p.constrain(this.summonFx, 0, 1);
                this.drawSummonSigilFx({
                    fx,
                    color: [255, 196, 110],
                    accent: [255, 238, 205],
                    spreadX: this.r * (1.9 + (1 - fx) * 0.35),
                    spreadY: this.r * (1.55 + (1 - fx) * 0.22),
                    runeScale: 1.04,
                    runeCount: 5,
                    sparkCount: 3,
                    verticalOffset: -this.r * 0.1,
                    showCenterGlyph: true
                });
            }

            if (this.id === "summon_portal") {
                // Portal VFX is handled by sprite pulsing to keep it clean and lightweight.
            }

            if ((this.id === "teleporter" || this.id === "boss_warp" || this.hasTeleporterAbility) && this.teleportFx > 0) {
                const fx = p.constrain(this.teleportFx, 0, 1);
                const fromX = this.teleportFromX ?? this.x;
                const fromY = this.teleportFromY ?? this.y;
                const toX = this.x;
                const toY = this.y;
                const lineAlpha = 180 * fx;
                const ringR = this.r * (1 + (1 - fx) * 0.85);

                p.push();
                    p.translate(
                        -p.width / 2,
                        -p.height / 2,
                        2
                    );

                    p.stroke(120, 210, 255, lineAlpha);
                    p.strokeWeight(1.2 + fx * 2);
                    p.line(fromX, fromY, toX, toY);

                    p.noStroke();
                    p.fill(120, 210, 255, 70 * fx);
                    p.circle(fromX, fromY, this.r * (1 + fx * 0.4));

                    p.noFill();
                    p.stroke(185, 235, 255, 220 * fx);
                    p.strokeWeight(1.4 + fx * 1.6);
                    p.circle(toX, toY, ringR * 2);

                    p.noStroke();
                    p.fill(170, 235, 255, 90 * fx);
                    p.circle(toX, toY, ringR * 1.1);
                p.pop();
            }

                p.push();
                    p.translate(-p.width/2 + this.x , -p.height/2 + this.y , 5);

                    p.push();
                        p.translate(this.walkSway, 0, this.walkLift);
                        p.rotateX(this.walkRotX);
                        p.rotateZ(this.walkTilt);

                        const isSummonPortalSprite = this.id === "summon_portal";
                        const portalOpenProgress = isSummonPortalSprite
                            ? p.constrain((this.portalTimer ?? 0) / Math.max(0.001, this.portalOpenTime ?? 0.6), 0, 1)
                            : 0;
                        const portalPulse = isSummonPortalSprite
                            ? (Math.sin((this.portalPulse ?? 0) + p.frameCount * 0.05) + 1) * 0.5
                            : 0;
                        const portalScale = isSummonPortalSprite
                            ? 1 + (0.04 + portalOpenProgress * 0.035) * portalPulse + Math.max(0, this.portalFx || 0) * 0.035
                            : 1;

                        p.scale(this.dirX * portalScale, portalScale, 1); //  РАЗВОРОТ / пульсация портала

                        p.noStroke();
                        const untargetableAlpha = this.getUntargetableAlpha();
                        if (this.trioDown) {
                            const blink = (Math.sin((this.game?.simTime ?? 0) * 8 + this.x * 0.05 + this.y * 0.04) + 1) * 0.5;
                            p.tint(255, 145 + blink * 90, 145 + blink * 90, 140 + blink * 115);
                        }
                        else if (untargetableAlpha < 0.999 || this.id === "ghost" || this.hasGhostAbility) {
                            p.tint(175, 220, 255, untargetableAlpha * 255);
                        }
                        else if (this.isDecoy) {
                            const a = 145 + (Math.sin(p.frameCount * 0.5 + this.x * 0.04) + 1) * 40;
                            p.tint(205, 205, 255, a);
                        }
                        else if(this.slowTimer > 0 && this.burnTimer > 0)
                            p.tint(255, 100, 255);
                        else if (this.slowTimer > 0) {
                            p.tint(120, 200, 255);
                        }
                        else if (this.burnTimer > 0) {
                            p.tint(255, 100, 100);
                        }
                        if (this.texture) {
                            p.texture(this.texture);
                        } else {
                            p.fill(170, 170, 170);
                        }
                        p.plane(this.r * 3, this.r * 3);
                    p.pop();

                    if (this.shieldHits > 0) {
                        const shieldCharge = this.maxShieldHits > 0
                            ? this.shieldHits / this.maxShieldHits
                            : 0;
                        this.drawShieldAura(this.r, shieldCharge);
                    }

                    this.drawRegenFx();

                p.pop();

        
        }

        drawStatusBars() {
            if (!this.alive || this.reachedBase || this.isPhased) return;

            p.push();
                p.translate(-p.width / 2 + this.x, -p.height / 2 + this.y, 6);

                const isHero = this.enemyClass === "hero";
                const isBoss = this.enemyClass === "boss";
                const maxHp = Math.max(1, this.hpMax || 0);
                const t = p.constrain(Math.max(0, this.hp) / maxHp, 0, 1);
                const isSummonPortal = this.id === "summon_portal";
                const w = isBoss ? 72 : (isHero ? 44 : 30);
                const h = isBoss ? 8 : (isHero ? 6 : 4);
                let hpY = -this.r - (isBoss ? 34 : (isHero ? 25 : 18));

                // If unit is near the top edge, push the HP bar down a bit.
                const grid = this.game?.grid || 0;
                const topZone = grid > 0 ? grid * 2.2 : 0;
                if (topZone > 0 && this.y < topZone) {
                    const topBoost = isBoss ? 30 : (isHero ? 24 : 18);
                    hpY += p.map(this.y, 0, topZone, topBoost, 0);
                }
                const barWorldY = this.y + hpY;
                if (barWorldY < 8) {
                    hpY += (8 - barWorldY);
                }
                const textWorldY = this.y + (hpY - h - 3);
                const minTextY = isBoss ? 16 : (isHero ? 14 : 12);
                if (textWorldY < minTextY) {
                    hpY += (minTextY - textWorldY);
                }

                if (this.trioDown) {
                    const reviveDuration = Math.max(0.001, this.trioReviveDuration || 0.001);
                    const reviveProgress = p.constrain(1 - ((this.trioReviveTimer ?? 0) / reviveDuration), 0, 1);

                    p.noStroke();
                    p.fill(30, 12, 12, 190);
                    p.rect(-w / 2, hpY, w, h);

                    p.fill(255, 185, 70);
                    p.rect(-w / 2, hpY, w * reviveProgress, h);

                    p.noFill();
                    p.stroke(255, 120, 120, 220);
                    p.strokeWeight(isBoss ? 1.8 : 1.2);
                    p.rect(-w / 2 - 1, hpY - 1, w + 2, h + 2);

                    p.noStroke();
                    p.fill(255, 215, 185);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(isBoss ? 10 : 9);
                    p.text(p.t("label.boss"), 0, hpY - 8);
                } else if (isSummonPortal) {
                    const portalCharges = Math.max(0, Math.round(this.portalCharges ?? 0));
                    const isOpening = (this.portalTimer ?? 0) < Math.max(0.001, this.portalOpenTime ?? 0.6);
                    const cycleDuration = Math.max(
                        0.001,
                        isOpening
                            ? (this.portalOpenTime ?? 0.6)
                            : (this.portalSpawnInterval ?? 0.82)
                    );
                    const spawnProgress = portalCharges > 0
                        ? p.constrain(1 - ((this.portalSpawnTimer ?? 0) / cycleDuration), 0, 1)
                        : 1;
                    const portalW = Math.max(w + 8, 38);
                    const portalH = Math.max(h + 1, 5);

                    p.noStroke();
                    p.fill(12, 22, 38, 180);
                    p.rect(-portalW / 2, hpY, portalW, portalH, 3);

                    p.fill(90, 220, 255, 230);
                    p.rect(-portalW / 2, hpY, portalW * spawnProgress, portalH, 3);

                    p.noFill();
                    p.stroke(180, 245, 255, 210);
                    p.strokeWeight(1.1);
                    p.rect(-portalW / 2 - 1, hpY - 1, portalW + 2, portalH + 2, 4);

                    if (portalCharges > 0) {
                        p.noStroke();
                        p.fill(195, 245, 255);
                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(10);
                        p.text(`x${portalCharges}`, 0, hpY - 8);
                    }
                } else {
                    p.noStroke();
                    p.fill(isBoss ? 35 : 0, isBoss ? 20 : 0, isBoss ? 20 : 0, 170);
                    p.rect(-w / 2, hpY, w, h);

                    if (isHero || isBoss) {
                        p.noFill();
                        p.stroke(isBoss ? 255 : 255, isBoss ? 90 : 235, isBoss ? 90 : 170, 220);
                        p.strokeWeight(isBoss ? 1.8 : 1.2);
                        p.rect(-w / 2 - 1, hpY - 1, w + 2, h + 2);
                    }
                    p.fill(0, 255, 0);
                    if (isBoss) {
                        p.noStroke();

                        p.textAlign(p.CENTER, p.CENTER);
                        p.textSize(10);
                        p.text(p.t("label.boss"), 0, hpY - 8);
                    }
                    p.rect(-w / 2, hpY, w * t, h);

                    p.textAlign(p.LEFT, p.CENTER);
                    p.textSize(isBoss ? 15 : (isHero ? 14 : 13));
                    p.text(Math.ceil(this.hp), -w / 2, hpY - h - 3);

                    if (this.burnTimer > 0) {
                        p.fill(255, 80, 120);
                        p.textAlign(p.RIGHT, p.CENTER);
                        p.text(`- ${Math.round(this.burnDamage)}`, w / 2, hpY - h - 3);
                    }
                }

                if (this.shieldHits > 0) {
                    const totalShield = Math.max(this.maxShieldHits, this.shieldHits);
                    const segCount = Math.max(1, Math.round(totalShield));
                    const activeCount = Math.max(0, Math.round(this.shieldHits));
                    const maxVisualSegments = 12;
                    const visualSegCount = Math.min(segCount, maxVisualSegments);
                    const visualActiveCount = segCount > maxVisualSegments
                        ? Math.max(0, Math.round((activeCount / Math.max(1, segCount)) * visualSegCount))
                        : activeCount;

                    const shieldY = hpY;
                    const segH = h;
                    const segW = w / visualSegCount;
                    const shieldTheme = this.shieldVfxTheme;
                    const palette = shieldTheme === "medieval"
                        ? { active: [175, 175, 175, 235], empty: [90, 90, 90, 80], split: [230, 230, 230, 120] }
                        : { active: [100, 230, 255, 235], empty: [40, 80, 110, 70], split: [180, 245, 255, 130] };

                    p.push();
                        p.translate(0, 0, 1);
                        p.noStroke();
                        p.fill(...palette.empty);
                        p.rect(-w / 2, shieldY, w, segH);

                        for (let i = 0; i < visualActiveCount; i++) {
                            const sx = -w / 2 + i * segW;
                            p.fill(...palette.active);
                            p.rect(sx, shieldY, segW, segH);
                        }

                        p.stroke(...palette.split);
                        p.strokeWeight(1);
                        for (let i = 1; i < visualSegCount; i++) {
                            const x = -w / 2 + i * segW;
                            p.line(x, shieldY, x, shieldY + segH);
                        }

                        const shieldLabel = `x${activeCount}`;
                        const labelSize = Math.max(10, isBoss ? 12 : 10);
                        const labelPadX = 4;
                        const labelPadY = 2;
                        const labelX = w / 2 + 6;
                        const labelY = shieldY + segH / 2;
                        const labelTextY = labelY - 1;

                        p.textSize(labelSize);
                        const labelW = p.textWidth(shieldLabel) + labelPadX * 2;
                        const labelH = labelSize + labelPadY * 2;

                        p.noStroke();
                        p.fill(16, 22, 34, 220);
                        p.rect(labelX, labelY - labelH / 2, labelW, labelH, 4);

                        p.fill(...palette.active);
                        p.textAlign(p.LEFT, p.CENTER);
                        p.text(shieldLabel, labelX + labelPadX, labelTextY);
                    p.pop();
                }
            p.pop();
        }

        drawSummonSigilFx({
            fx = 1,
            color = [255, 210, 120],
            accent = [255, 245, 220],
            spreadX = this.r * 1.8,
            spreadY = this.r * 1.45,
            runeScale = 1,
            runeCount = 4,
            sparkCount = 2,
            verticalOffset = 0,
            showCenterGlyph = true
        } = {}) {
            const intensity = p.constrain(fx, 0, 1);
            if (intensity <= 0) return;

            const now = this.game?.simTime ?? (p.frameCount / 60);
            const t = now * 3.8 + this.x * 0.017 + this.y * 0.011;
            const pulse = (Math.sin(t * 1.3) + 1) * 0.5;
            const alpha = 95 + intensity * 135;
            const safeRuneCount = Math.max(3, Math.floor(runeCount || 4));
            const orbitX = spreadX * (0.9 + pulse * 0.08);
            const orbitY = spreadY * (0.82 + pulse * 0.1);
            const runeH = (6 + 5 * intensity) * runeScale;
            const runeW = runeH * 0.58;
            const glowW = runeW * 1.85;
            const glowH = runeH * 1.85;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 2);
                for (let i = 0; i < safeRuneCount; i++) {
                    const a = t * 0.8 + (i * Math.PI * 2) / safeRuneCount;
                    const wave = Math.sin(t * 1.6 + i * 1.9);
                    const cx = this.x + Math.cos(a) * orbitX;
                    const cy = this.y + verticalOffset + Math.sin(a) * orbitY * 0.72 + wave * 1.6;
                    const rot = a + Math.PI / 4 + wave * 0.12;
                    const ux = Math.cos(rot);
                    const uy = Math.sin(rot);
                    const vx = -uy;
                    const vy = ux;

                    p.noStroke();
                    p.fill(color[0], color[1], color[2], alpha * 0.16);
                    p.quad(
                        cx + ux * glowH, cy + uy * glowH,
                        cx + vx * glowW, cy + vy * glowW,
                        cx - ux * glowH, cy - uy * glowH,
                        cx - vx * glowW, cy - vy * glowW
                    );

                    p.fill(accent[0], accent[1], accent[2], alpha * 0.28);
                    p.quad(
                        cx + ux * runeH, cy + uy * runeH,
                        cx + vx * runeW, cy + vy * runeW,
                        cx - ux * runeH, cy - uy * runeH,
                        cx - vx * runeW, cy - vy * runeW
                    );

                    p.stroke(accent[0], accent[1], accent[2], alpha * 0.92);
                    p.strokeWeight(1.05 + intensity * 0.55);
                    p.line(cx - ux * runeH * 0.75, cy - uy * runeH * 0.75, cx + ux * runeH * 0.75, cy + uy * runeH * 0.75);
                    p.line(cx - vx * runeW * 0.75, cy - vy * runeW * 0.75, cx + vx * runeW * 0.75, cy + vy * runeW * 0.75);
                }

                if (showCenterGlyph) {
                    const glyphH = this.r * (0.58 + intensity * 0.2 + pulse * 0.06);
                    const glyphW = glyphH * 0.62;

                    p.noStroke();
                    p.fill(color[0], color[1], color[2], alpha * 0.18);
                    p.quad(
                        this.x, this.y + verticalOffset - glyphH * 1.45,
                        this.x + glyphW * 1.6, this.y + verticalOffset,
                        this.x, this.y + verticalOffset + glyphH * 1.45,
                        this.x - glyphW * 1.6, this.y + verticalOffset
                    );

                    p.fill(accent[0], accent[1], accent[2], alpha * 0.22);
                    p.quad(
                        this.x, this.y + verticalOffset - glyphH,
                        this.x + glyphW, this.y + verticalOffset,
                        this.x, this.y + verticalOffset + glyphH,
                        this.x - glyphW, this.y + verticalOffset
                    );

                    p.stroke(accent[0], accent[1], accent[2], alpha * 0.9);
                    p.strokeWeight(1.15 + intensity * 0.6);
                    p.line(this.x - glyphW * 0.9, this.y + verticalOffset, this.x + glyphW * 0.9, this.y + verticalOffset);
                    p.line(this.x, this.y + verticalOffset - glyphH * 0.85, this.x, this.y + verticalOffset + glyphH * 0.85);
                }

                p.stroke(accent[0], accent[1], accent[2], alpha * 0.68);
                p.strokeWeight(1 + intensity * 0.7);
                for (let i = 0; i < sparkCount; i++) {
                    const side = i % 2 === 0 ? -1 : 1;
                    const sparkPhase = t * 2.1 + i * 1.8;
                    const sx = this.x + side * spreadX * 0.3 + Math.sin(sparkPhase) * 4;
                    const sy = this.y + verticalOffset - this.r * (0.8 + i * 0.22) - ((sparkPhase * 8) % (this.r * 0.5 + 7));
                    const ex = sx + side * (3.5 + intensity * 2);
                    const ey = sy - (3 + pulse * 2.4);
                    p.line(sx, sy, ex, ey);
                }
            p.pop();
        }

        drawRegenFx() {
            if (!this.alive) return;
            if ((this.regen ?? 0) <= 0 && this.healFxTimer <= 0) return;

            const t = p.frameCount * 0.06 + this.regenFxPhase;
            const spread = this.r * 0.8;
            const baseX = 0;
            const baseY = 0;

            p.push();
                p.translate(0, 0, 2);
                for (let i = 0; i < 3; i++) {
                    const a = t + i * (Math.PI * 2 / 3);
                    const ox = Math.cos(a) * spread;
                    const oy = Math.sin(a) * (spread * 0.6);
                    const pulse = (Math.sin(t * 2 + i * 1.2) + 1) * 0.5;
                    const alpha = 120 + pulse * 100;
                    const size = this.r * 0.65 + pulse * 3;

                    const x = baseX + ox;
                    const y = baseY + oy;

                    p.stroke(80, 255, 120, alpha);
                    p.strokeWeight(4);
                    p.line(x - size, y, x + size, y);
                    p.line(x, y - size, x, y + size);
                }
            p.pop();
        }

        drawShieldAura(baseR, charge = 1) {
            const t = p.frameCount * 0.05 + this.x * 0.01 + this.y * 0.005;
            const outer = baseR * 1.9;
            const inner = baseR * 1.5;

            p.push();
            p.translate(0, 0, 1.2);
            p.noFill();

            if (this.shieldVfxTheme === "medieval") {
                const alpha = 100 + 120 * charge;
                const runePulse = 0.8 + 0.2 * Math.sin(t * 1.2);

                p.stroke(185, 185, 185, alpha);
                p.strokeWeight(1.6);
                p.circle(0, 0, outer * 2);

                p.stroke(130, 130, 130, alpha * 0.75);
                p.circle(0, 0, inner * 2);

                const runeCount = 6;
                for (let i = 0; i < runeCount; i++) {
                    const a = t * 0.45 + (i * Math.PI * 2) / runeCount;
                    const x1 = Math.cos(a) * (inner - 1.5);
                    const y1 = Math.sin(a) * (inner - 1.5);
                    const x2 = Math.cos(a) * (outer + 1.5);
                    const y2 = Math.sin(a) * (outer + 1.5);
                    p.line(x1, y1, x2, y2);

                    const lit = i < Math.ceil(runeCount * charge);
                    if (lit) {
                        p.noStroke();
                        p.fill(205, 205, 205, 180 * runePulse);
                        p.circle(x2, y2, 2.2);
                        p.noFill();
                        p.stroke(130, 130, 130, alpha * 0.75);
                    }
                }
            } else {
                const alpha = 110 + 130 * charge;

                // Outer rotating segments
                p.push();
                p.rotate(t);
                p.stroke(95, 230, 255, alpha);
                p.strokeWeight(2);
                p.arc(0, 0, outer * 2, outer * 2, -0.9, -0.2);
                p.arc(0, 0, outer * 2, outer * 2, 0.4, 1.15);
                p.pop();

                // Inner counter-rotating segments
                p.push();
                p.rotate(-t * 1.35);
                p.stroke(170, 245, 255, alpha * 0.85);
                p.strokeWeight(1.4);
                p.arc(0, 0, inner * 2, inner * 2, -1.9, -1.1);
                p.arc(0, 0, inner * 2, inner * 2, 1.0, 1.85);
                p.pop();

                // Electric sparks
                p.stroke(190, 250, 255, 140 + 80 * charge);
                p.strokeWeight(1.1);
                for (let i = 0; i < 3; i++) {
                    const a = t * 2.1 + i * 2.05;
                    const r = outer * (0.78 + 0.06 * Math.sin(t * 3 + i));
                    const x1 = Math.cos(a) * r;
                    const y1 = Math.sin(a) * r;
                    const x2 = Math.cos(a + 0.2) * (r + 3.5);
                    const y2 = Math.sin(a + 0.2) * (r + 3.5);
                    p.line(x1, y1, x2, y2);
                }
            }

            p.pop();
        }

        drawDeathFx() {
            if (!this.deathFx || this.deathDone || this.reachedBase) return;

            const t = p.constrain(this.deathFxTime / this.deathFxDuration, 0, 1);

            p.push();
            p.translate(-p.width / 2, -p.height / 2, 8);

            if (this.deathFx.ring) {
                const rr = p.lerp(this.deathFx.ring.r0, this.deathFx.ring.r1, t);
                const a = 180 * (1 - t);
                const ringColor = this.deathFx.style === "shield"
                    ? [120, 200, 255]
                    : (this.deathFx.style === "burn" ? [255, 160, 60] : [180, 180, 180]);

                p.noFill();
                p.stroke(ringColor[0], ringColor[1], ringColor[2], a);
                p.strokeWeight(2 + (1 - t) * 2);
                p.circle(this.x, this.y, rr * 2);
            }

            p.noStroke();
            for (const part of this.deathFx.particles) {
                if (part.life <= 0) continue;
                const a = 255 * (part.life / part.maxLife);
                p.fill(part.color[0], part.color[1], part.color[2], a);
                p.circle(part.x, part.y, part.size);
            }

            p.pop();
        }
    }

    class Projectile {
        constructor(x, y, target, opts) {
            this.x = x; this.y = y;
            this.target = target;
            this.ownerTower = opts.ownerTower ?? null;
            this.speed = opts.speed ; // px/sec
            this.damage = opts.damage ;
            this.r = opts.r;
            this.bounces = opts.bounces;
            this.chainRange = opts.chainRange;
            this.alive = true;
            this.isCrit = !!opts.isCrit;

            this.hitTargets = new Set(); // чтобы не бить одну и ту же цель

            this.slowFactor = opts.slowFactor;
            this.slowDuration = opts.slowDuration;
            this.primaryTarget = target;
            this.primarySlowFactor = opts.primarySlowFactor ?? null;
            this.primarySlowDuration = opts.primarySlowDuration ?? 0;
            
            this.type = opts.type;
            this.life = 0; // для визуальных эффектов
            this.maxLife = 0.2;
            
            //для burn эффекта
            this.burnDamage = opts.burnDamage;
            this.burnDuration = opts.burnDuration;
            this.splashRadius = opts.splashRadius ?? 0;
            this.exploding = false;
            this.explodeTimer = 0;
            this.explodeDuration = 0.18;
        }

        playImpactSound() {
            if (this.ownerTower?.type?.id !== "slow") return;

            const variantPools = p.variables.soundSlowHitPools;
            if (!Array.isArray(variantPools) || variantPools.length === 0) return;

            const variantIndex = Math.floor(Math.random() * variantPools.length);
            const pool = variantPools[variantIndex];
            if (!Array.isArray(pool) || pool.length === 0) return;

            const poolIndexes = p.variables.soundSlowHitPoolIndex || [];
            const instanceIndex = poolIndexes[variantIndex] || 0;
            const clip = pool[instanceIndex % pool.length];
            poolIndexes[variantIndex] = (instanceIndex + 1) % pool.length;
            p.variables.soundSlowHitPoolIndex = poolIndexes;
            if (!clip) return;

            const baseVol = p.variables.soundBound?.volume;
            if (typeof baseVol === "number") {
                clip.volume = baseVol;
            }

            try {
                clip.currentTime = 0;
                clip.play();
            } catch (e) {}
        }

        retargetSplashProjectile(units) {
            if (this.type !== "splash" && this.type !== "basic_bomb") return false;

            const tower = this.ownerTower;
            if (!tower) return false;

            const attackRange = Math.max(0, tower.range || 0);
            const attackRangeSq = attackRange * attackRange;
            let best = null;
            let bestPriority = -Infinity;
            let bestDistSq = Infinity;

            for (const unit of units) {
                if (!unit?.alive || unit.reachedBase) continue;
                if (unit.isUntargetable?.()) continue;

                const towerDx = unit.x - tower.x;
                const towerDy = unit.y - tower.y;
                const towerDistSq = towerDx * towerDx + towerDy * towerDy;
                if (towerDistSq > attackRangeSq) continue;

                const dx = unit.x - this.x;
                const dy = unit.y - this.y;
                const distSq = dx * dx + dy * dy;
                const priority = unit.targetPriority ?? 0;

                if (priority > bestPriority || (priority === bestPriority && distSq < bestDistSq)) {
                    best = unit;
                    bestPriority = priority;
                    bestDistSq = distSq;
                }
            }

            if (!best) return false;

            this.target = best;
            this.primaryTarget = best;
            return true;
        }

        update(dt, units) {
            if (!this.alive) return;
            // if (!Number.isFinite(this.x) || !Number.isFinite(this.y)) {
            //     this.alive = false;
            //     return;
            // }
           
            if (this.exploding) {
                this.explodeTimer += dt;
                if (this.explodeTimer >= this.explodeDuration) {
                    this.alive = false;
                }
                return;
            }

            // 🔫 HITSCAN (снайпер)
            if (this.type === 'sniper') {
                if (this.target && this.target.alive && !this.target.reachedBase && !this.target.isUntargetable() && this.life === 0) {
                    this.target.damage(this.damage, this.ownerTower);
                    if (this.isCrit && this.target?.game) {
                        this.target.game.critPopups.push(
                            new CritDamagePopup(this.target.x, this.target.y - 24, this.damage)
                        );
                    }
                }
                this.life += dt;

                if (this.life >= this.maxLife) {
                    this.alive = false;
                }

                return;
            }

            this.life += dt;
            // обычные снаряды
            if (!this.target || !this.target.alive || this.target.reachedBase || this.target.isUntargetable()) {
                if (this.retargetSplashProjectile(units)) {
                    return;
                }
                this.alive = false;
                return;
            }

         
            const dx = this.target.x - this.x;
            const dy = this.target.y - this.y;
            const dist = Math.hypot(dx, dy);

            const step = this.speed * dt;

            if (dist <= step || dist < 0.001) {
                // 💥 Попадание
                if (this.splashRadius > 0) {
                    this.playImpactSound();
                    const hitX = this.target.x;
                    const hitY = this.target.y;
                    if (this.type === "melee_splash") {
                        this.ownerTower?.triggerCleaverImpactFx?.(hitX, hitY, this.splashRadius, this.isCrit);
                    }
                    const targets = units.slice();
                    for (const u of targets) {
                        if (!u.alive || u.reachedBase) continue;
                        if (u.isUntargetable()) continue;
                        const d = Math.hypot(u.x - hitX, u.y - hitY);
                        if (d <= this.splashRadius) {
                            const splashDamage = u === this.primaryTarget ? this.damage : this.damage * 0.5;
                            u.damage(splashDamage, this.ownerTower);
                            if (this.isCrit && u?.game) {
                                u.game.critPopups.push(
                                    new CritDamagePopup(u.x, u.y - 24, splashDamage)
                                );
                            }
                            if (this.burnDamage) {
                                u.applyBurn(this.burnDamage, this.burnDuration, this.ownerTower);
                            }
                            if (this.slowFactor) {
                                u.applySlow(this.slowFactor, this.slowDuration);
                            }
                            if (u === this.primaryTarget && this.primarySlowFactor != null && this.primarySlowDuration > 0) {
                                u.applySlow(this.primarySlowFactor, this.primarySlowDuration);
                            }
                        }
                    }

                    this.x = hitX;
                    this.y = hitY;
                    this.target = null;
                    this.exploding = true;
                    this.explodeTimer = 0;
                    return;
                }

                this.playImpactSound();
                if (this.type === "melee_splash") {
                    this.ownerTower?.triggerCleaverImpactFx?.(this.target.x, this.target.y, this.r * 8, this.isCrit);
                }
                this.target.damage(this.damage, this.ownerTower);
                if (this.isCrit && this.target?.game) {
                    this.target.game.critPopups.push(
                        new CritDamagePopup(this.target.x, this.target.y - 24, this.damage)
                    );
                }

                //burn эффект
                if (this.burnDamage) {
                    this.target.applyBurn(this.burnDamage, this.burnDuration, this.ownerTower);
                }
                this.hitTargets.add(this.target);
               

                if (this.slowFactor) {
                    this.target.applySlow(this.slowFactor, this.slowDuration);
                }
                if (this.target === this.primaryTarget && this.primarySlowFactor != null && this.primarySlowDuration > 0) {
                    this.target.applySlow(this.primarySlowFactor, this.primarySlowDuration);
                }

                // ⚡ Chain
                if ( this.bounces > 0) {
                    const next = this.findNextTarget(units);

                    if (next) {
                        this.x = this.target.x;
                        this.y = this.target.y;

                        this.target = next;
                        this.damage *= 0.7;
                        this.bounces -= 1;
                        return;
                    }
                }

                this.alive = false;
                return;
            }

            this.x += (dx / dist) * step;
            this.y += (dy / dist) * step;
        }

        findNextTarget(units) {
            let best = null;
            let bestDist = Infinity;

            for (const u of units) {
                if (!u.alive || u.reachedBase) continue;
                if (u.isUntargetable()) continue;
                if (this.hitTargets.has(u)) continue;

              
                const d = Math.hypot(u.x - this.x, u.y - this.y);
                if (d <= this.chainRange && d < bestDist) {
                    best = u;
                    bestDist = d;
                }
            }
            return best;
        }

        draw() {
            if (!this.alive) return;
            // if (!Number.isFinite(this.x) || !Number.isFinite(this.y)) return;

            p.push();
            p.translate(-p.width/2, -p.height/2, 12);

            if (this.isCrit && this.type !== 'sniper' && this.type !== 'melee_splash') {
                const pulse = 0.65 + 0.35 * Math.sin(p.frameCount * 0.35 + this.life * 30);
                const glowR = (this.r || 3) * (4.5 + pulse * 2);
                p.noStroke();
                p.fill(255, 210, 130, 140);
                p.circle(this.x, this.y, glowR);
            }

            if (this.exploding) {
                const t = p.constrain(this.explodeTimer / this.explodeDuration, 0, 1);
                const r = (this.splashRadius || 0) * t;
                const alpha = 220 * (1 - t);

                p.noFill();
                p.stroke(255, 150, 90, alpha);
                p.strokeWeight(4 - 2.5 * t);
                p.circle(this.x, this.y, r * 2);

                p.stroke(255, 210, 160, alpha * 0.6);
                p.strokeWeight(8 - 5 * t);
                p.circle(this.x, this.y, r * 1.4);

                p.pop();
                return;
            }

            const projectileDx = (this.target?.x ?? this.x + 1) - this.x;
            const projectileDy = (this.target?.y ?? this.y) - this.y;
            const projectileAngle = Math.atan2(projectileDy, projectileDx);
            const drawBasicOrbProjectile = (palette = {}) => {
                const scale = (palette.scale ?? 1) * (this.isCrit ? 1.16 : 1);
                const pulse = 0.7 + 0.3 * Math.sin(p.frameCount * 0.28 + this.life * 26);

                p.translate(this.x, this.y);
                p.rotate(projectileAngle);
                p.noStroke();

                if (palette.aura) {
                    for (let i = 0; i < 10; i++) {
                        const a = (Math.PI * 2 * i) / 10;
                        const radius = (9 + pulse * 2) * scale;
                        const spikeX = Math.cos(a) * radius;
                        const spikeY = Math.sin(a) * radius;
                        p.fill(...palette.aura, 150);
                        p.ellipse(spikeX, spikeY, 3.2 * scale, 8 * scale);
                    }
                }

                if (palette.tail) {
                    p.fill(...palette.tail, 170);
                    p.ellipse(-8 * scale, 0, 11 * scale, 7 * scale);
                }

                if (palette.shadow) {
                    p.fill(...palette.shadow, 115);
                    p.ellipse(-2.5 * scale, 1.8 * scale, 13.5 * scale, 11 * scale);
                }

                p.fill(...(palette.body ?? [132, 170, 249]));
                p.circle(0, 0, 12.5 * scale);

                if (palette.rim) {
                    p.fill(...palette.rim, 105);
                    p.circle(0, 0, 13.5 * scale);
                }

                if (palette.core) {
                    p.fill(...palette.core);
                    p.circle(-0.2 * scale, 0.2 * scale, 7.2 * scale);
                }

                if (palette.highlight) {
                    p.fill(...palette.highlight, 245);
                    p.ellipse(2.2 * scale, -2.8 * scale, 4.8 * scale, 3.1 * scale);
                }

                if (palette.spark) {
                    p.fill(...palette.spark, 185);
                    p.circle(-4.5 * scale, -2.6 * scale, 2.2 * scale);
                    p.circle(-5.2 * scale, 2.5 * scale, 1.9 * scale);
                }
            };

            // 🔫 Снайпер — линия
            if (this.type === 'sniper') {
                const t = p.constrain(this.life / this.maxLife, 0, 1);
                const alpha = 255 * (1 - t);
                const pulse = 0.75 + 0.25 * Math.sin(p.frameCount * 0.7);
                const x1 = this.x;
                const y1 = this.y;
                const x2 = this.target.x;
                const y2 = this.target.y;

                if (this.isCrit) {
                    // Полностью желтая гамма для крита
                    p.stroke(255, 230, 140, alpha * 0.55);
                    p.strokeWeight(12 * pulse);
                    p.line(x1, y1, x2, y2);

                    p.stroke(255, 220, 120, alpha * 0.55);
                    p.strokeWeight(7 * pulse);
                    p.line(x1, y1, x2, y2);

                    p.stroke(255, 245, 170, alpha * 0.85);
                    p.strokeWeight(3);
                    p.line(x1, y1, x2, y2);

                    p.stroke(255, 255, 230, alpha);
                    p.strokeWeight(1.1);
                    p.line(x1, y1, x2, y2);
                } else {
                    // Мягкое внешнее свечение
                    p.stroke(255, 70, 70, alpha * 0.28);
                    p.strokeWeight(7 * pulse);
                    p.line(x1, y1, x2, y2);

                    // Основной луч
                    p.stroke(255, 95, 95, alpha * 0.8);
                    p.strokeWeight(3);
                    p.line(x1, y1, x2, y2);

                    // Ядро луча
                    p.stroke(255, 235, 235, alpha);
                    p.strokeWeight(1.1);
                    p.line(x1, y1, x2, y2);
                }

                // Вспышки на концах
                // p.noStroke();
                // p.fill(255, 120, 120, alpha * 0.45);
                // p.circle(x1, y1, 8 * pulse);
                // p.circle(x2, y2, 10 * pulse);

                p.pop();
                return;
            }

            // ⚡ Chain — молния
            if (this.type === 'chain') {
                const x1 = this.x;
                const y1 = this.y;
                const x2 = this.target.x;
                const y2 = this.target.y;
                const dx = x2 - x1;
                const dy = y2 - y1;
                const dist = Math.hypot(dx, dy) || 1;
                const nx = -dy / dist;
                const ny = dx / dist;
                const segCount = Math.max(4, Math.floor(dist / 14));
                const pulse = (Math.sin(p.frameCount * 0.45 + this.life * 40) + 1) * 0.5;
                const jitterAmp = 8 + pulse * 4;

                if (this.isCrit) {
                    // Красная крит-молния
                    p.stroke(255, 90, 90, 210);
                    p.strokeWeight(4);
                    p.beginShape();
                    for (let i = 0; i <= segCount; i++) {
                        const t = i / segCount;
                        let px = p.lerp(x1, x2, t);
                        let py = p.lerp(y1, y2, t);
                        if (i !== 0 && i !== segCount) {
                            const edgeFade = 1 - Math.abs(t - 0.5) * 2;
                            const wave = Math.sin(i * 1.9 + p.frameCount * 0.65 + this.life * 60);
                            const off = wave * (jitterAmp * 0.35) * edgeFade;
                            px += nx * off;
                            py += ny * off;
                        }
                        p.vertex(px, py);
                    }
                    p.endShape();
                }

                // Ядро молнии
                if (this.isCrit) {
                    p.stroke(255, 130, 130, 230);
                } else {
                    p.stroke(255, 245, 170, 230);
                }
                p.strokeWeight(2);
                p.beginShape();
                for (let i = 0; i <= segCount; i++) {
                    const t = i / segCount;
                    let px = p.lerp(x1, x2, t);
                    let py = p.lerp(y1, y2, t);
                    if (i !== 0 && i !== segCount) {
                        const edgeFade = 1 - Math.abs(t - 0.5) * 2;
                        const wave = Math.sin(i * 1.9 + p.frameCount * 0.65 + this.life * 60);
                        const off = wave * (jitterAmp * 0.45) * edgeFade;
                        px += nx * off;
                        py += ny * off;
                    }
                    p.vertex(px, py);
                }
                p.endShape();

                // Точки контакта
                p.noStroke();
                if (this.isCrit) {
                    p.fill(255, 120, 120, 190);
                } else {
                    p.fill(255, 230, 120, 160);
                }
                p.circle(x1, y1, 8 + pulse * 3);
                p.circle(x2, y2, 8 + pulse * 3);

                p.pop();
                return;
            }

            // 🔥 Rapid — трассер
            if (this.type === 'rapid') {
                // p.stroke(255);
                // p.fill(145, 100, 20);
                // p.circle(this.x, this.y, this.r * 2);
                // p.pop();
                // return;
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const ang = Math.atan2(dy, dx);

                p.translate(this.x, this.y);
                p.rotate(ang);
                p.noStroke();

                // Корпус
                if (this.isCrit) {
                    p.fill(255, 215, 120);
                    p.rect(-7, -2.5, 14, 5, 2);
                } else {
                    p.fill(220, 180, 80);
                    p.rect(-6, -2, 12, 4, 2);
                }

                // Носик
                p.fill(255, 220, 120);
                p.ellipse(6, 0, 4, 4);

                p.pop();
                return;
            }

            // 🏹 Arrow
            if (this.type === 'arrow') {
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const ang = Math.atan2(dy, dx);

                p.translate(this.x, this.y);
                p.rotate(ang);

                p.stroke(this.isCrit ? [255, 235, 170] : [210, 170, 110]);
                p.strokeWeight(this.isCrit ? 3 : 2.2);
                p.line(-10, 0, 7, 0);

                p.noStroke();
                p.fill(this.isCrit ? [255, 220, 120] : [235, 235, 240]);
                p.triangle(7, 0, 1, -4, 1, 4);

                p.fill(170, 95, 65);
                p.rect(-9, -1.2, 5, 2.4, 1);

                p.fill(this.isCrit ? [255, 190, 120] : [120, 200, 255]);
                p.triangle(-10, 0, -15, -4, -12, 0);
                p.triangle(-10, 0, -15, 4, -12, 0);

                p.pop();
                return;
            }

            // 👊 Melee splash
            if (this.type === 'melee_splash') {
                p.pop();
                return;
            }

            if (this.type === "basic") {
                p.stroke(0);
                p.fill(this.isCrit ? [255, 220, 140] : [132, 170, 249]);
                p.circle(this.x, this.y, this.r * (this.isCrit ? 4.2 : 3));
                p.pop();
                return;
            }

            if ([
                "basic_slow",
                "basic_ricochet",
                "basic_multi",
                "basic_fire",
                "basic_bomb"
            ].includes(this.type)) {
                const tearPalettes = {
                    basic: {
                        shadow: [30, 55, 115],
                        body: this.isCrit ? [255, 223, 150] : [132, 170, 249],
                        highlight: [255, 255, 255],
                        core: this.isCrit ? [255, 202, 120] : [88, 120, 210]
                    },
                    basic_slow: {
                        shadow: [55, 110, 145],
                        body: [165, 234, 255],
                        highlight: [255, 255, 255],
                        core: [110, 190, 245]
                    },
                    basic_ricochet: {
                        shadow: [90, 80, 40],
                        body: [245, 216, 120],
                        highlight: [255, 247, 210],
                        core: [184, 132, 52]
                    },
                    basic_multi: {
                        shadow: [70, 55, 120],
                        body: [205, 188, 255],
                        highlight: [255, 246, 255],
                        core: [132, 104, 220]
                    },
                    basic_fire: {
                        tail: [255, 135, 45],
                        shadow: [90, 35, 15],
                        body: [255, 155, 65],
                        highlight: [255, 255, 255],
                        core: [28, 18, 18],
                        spark: [255, 175, 65]
                    },
                    basic_bomb: {
                        aura: [255, 170, 35],
                        shadow: [70, 30, 12],
                        body: [92, 56, 36],
                        rim: [255, 170, 55],
                        highlight: [255, 255, 255],
                        core: [24, 20, 24],
                        scale: 1.05
                    }
                };

                drawBasicOrbProjectile(tearPalettes[this.type] || tearPalettes.basic);
                p.pop();
                return;
            }

            // ❄️ Slow — ледяной осколок
            if (this.type === 'slow') {
                // p.noStroke();
                // p.fill(140, 220, 255);
                // p.triangle(
                //     this.x, this.y - 5,
                //     this.x - 4, this.y + 4,
                //     this.x + 4, this.y + 4
                // );
                // p.pop();
                // return;
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const ang = Math.atan2(dy, dx);

       
                p.translate(this.x, this.y);
                p.rotate(ang);
                p.noStroke();

                // Основной кристалл
                p.fill(this.isCrit ? [200, 255, 255] : [160, 230, 255]);
                p.beginShape();
                p.vertex(-6, 0);
                p.vertex(-2, -4);
                p.vertex(6, 0);
                p.vertex(-2, 4);
                p.endShape(p.CLOSE);

                // Блик
                p.fill(220, 250, 255, 180);
                p.triangle(-3, 0, 0, -2, 0, 2);

                p.pop();
                return;
            }

            // 🔥 Burn — огненный шар
            if (this.type === 'burn') {
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const ang = Math.atan2(dy, dx);

                p.translate(this.x, this.y);
                p.rotate(ang);
                p.noStroke();

                // Хвост
                p.fill(255, 120, 40, 150);
                p.ellipse(-6, 0, 10, 6);

                // Основное ядро
                p.fill(this.isCrit ? [255, 220, 120] : [255, 180, 60]);
                p.circle(0, 0, (this.r * 2 + 2) * (this.isCrit ? 1.25 : 1));

                // Центр
                p.fill(255, 240, 160);
                p.circle(1, 0, this.r);

                // Искры
                p.fill(255, 80, 20, 180);
                p.circle(-3, -2, 2);
                p.circle(-4, 2, 2);

                p.pop();
                return;
            }

            // 💥 Splash — ракета
            if (this.type === 'splash') {
                const dx = this.target.x - this.x;
                const dy = this.target.y - this.y;
                const ang = Math.atan2(dy, dx);

                p.translate(this.x, this.y);
                p.rotate(ang);
                p.noStroke();

                // корпус
                p.fill(this.isCrit ? [255, 240, 200] : [235, 235, 245]);
                p.rect(-8, -3, 16, 6, 3);

                // нос
                p.fill(255, 120, 90);
                p.triangle(8, 0, 2, -4, 2, 4);

                // стабилизаторы
                p.fill(255, 170, 120);
                p.triangle(-6, -2, -12, -5, -9, -1);
                p.triangle(-6, 2, -12, 5, -9, 1);

                // пламя
                const flicker = 0.6 + Math.sin(p.frameCount * 0.4 + this.life * 25) * 0.4;
                p.fill(255, 170, 90, 220);
                p.triangle(-9, 0, -16 - 3 * flicker, -3, -16 - 3 * flicker, 3);
                p.fill(255, 230, 150, 200);
                p.triangle(-10, 0, -14 - 2 * flicker, -2, -14 - 2 * flicker, 2);

                p.pop();
                return;
            }

            // 🐾 Cat Revolver — мини-пуля
            if (this.type === 'cat_revolver') {
                const dx = (this.target?.x ?? this.x + 1) - this.x;
                const dy = (this.target?.y ?? this.y) - this.y;
                const ang = Math.atan2(dy, dx);

                p.translate(this.x, this.y);
                p.rotate(ang);
                p.noStroke();

                const scale = this.isCrit ? 1.3 : 1;

                // тельце-пуля
                p.fill(240, 190, 90);
                p.ellipse(0, 0, 10 * scale, 7 * scale);

                // ушки
                p.fill(255, 210, 120);
                p.triangle(2 * scale, -3.5 * scale, 5 * scale, -6 * scale, 5 * scale, -2.2 * scale);
                p.triangle(2 * scale, 3.5 * scale, 5 * scale, 2.2 * scale, 5 * scale, 6 * scale);

                // хвостик-трассер
                p.fill(180, 120, 50, 210);
                p.rect(-7 * scale, -1.4 * scale, 3.8 * scale, 2.8 * scale, 1);

                // маленькая искра
                p.fill(255, 235, 150, 180);
                p.ellipse(6.2 * scale, 0, 2.8 * scale, 2.8 * scale);

                p.pop();
                return;
            }
            // 🟢 Basic — пуля
            p.stroke(0);
            p.fill(this.isCrit ? [255, 220, 140] : [132, 170, 249]);
            p.circle(this.x, this.y, this.r * (this.isCrit ? 4.2 : 3));

            p.pop();
        }

    }

    class Tower {
        constructor(cx, cy, opts, game = null, instanceNumber = 1) {
            // console.log(opts)
            this.x = cx; 
            this.y = cy; // центр клетки
            this.cellX = null;
            this.cellY = null;
            this.w = opts.w;
            this.h = opts.h;
            this.level = opts.level ?? 1;
            this.type = opts;
            this.game = game;
            this.instanceNumber = instanceNumber;
            this.displayName = p.t("tower.instance_display", { name: opts.name, number: instanceNumber });
            
            this.maxLevel = 3;
          
            this.cost = opts.cost;
            this.cooldown = 0;
            this.texture = opts.texture;
            this.range = opts.levels[0].range ;
            this.fireRate = opts.levels[0].fireRate ?? 0; // выстр/сек
            this.damage = opts.levels[0].damage ;
            this.projSpeed = opts.levels[0].projSpeed ;
            this.bounces = opts.levels[0].bounces;
            this.projectileCount = Math.max(1, opts.levels[0].projectileCount ?? 1);
            this.chainRange = opts.levels[0].chainRange;
            this.slowDuration = opts.levels[0].slowDuration;
            this.slowFactor = opts.levels[0].slowFactor;
            this.splashRadius = opts.levels[0].splashRadius ?? 0;
            this.primarySlowFactor = opts.levels[0].primarySlowFactor ?? opts.primarySlowFactor ?? 0;
            this.primarySlowDuration = opts.levels[0].primarySlowDuration ?? opts.primarySlowDuration ?? 0;
            this.sellValue = () => Math.round(this.getTotalCost() * 0.75);

            this.burnDuration = opts.levels[0].burnDuration;
            this.burnDamage = opts.levels[0].burnDamage;
            this.critChance = opts.critChance ?? opts.levels[0].critChance ?? 0;
            this.critMult = opts.critMult ?? opts.levels[0].critMult ?? 1;
            this.specialShotChance = opts.levels[0].specialShotChance ?? 0;
            this.magazine = opts.levels[0].magazine ?? 0;
            this.reloadTime = opts.levels[0].reloadTime ?? 0;
            this.shotsLeft = this.magazine;
            this.reloadTimer = 0;
            this.idleReloadDelay = opts.levels[0].idleReloadDelay ?? opts.idleReloadDelay ?? 0;
            this.timeSinceShot = 0;
            this.swordTexture = opts.swordTexture || null;
            this.meleeSwingTimer = 0;
            this.meleeSwingDuration = opts.meleeSwingDuration ?? 0.22;
            this.cleaverSwingCrit = false;
            this.cleaverImpactFxTimer = 0;
            this.cleaverImpactFxDuration = opts.cleaverImpactFxDuration ?? 0.18;
            this.cleaverImpactFxX = this.x;
            this.cleaverImpactFxY = this.y;
            this.cleaverImpactFxRadius = 0;
            this.cleaverImpactFxAngle = 0;
            this.cleaverImpactFxCrit = false;
            this.cleaverSwordPoseVisual = null;

            this.muzzle = opts.muzzle || { x: 0, y: 0 };
            this.angleOffset = opts.angleOffset || 0;
            this.idleAngle = opts.idleAngle ?? 0;
            this.angle = this.idleAngle;
            this.canRotate = opts.canRotate !== false;
            this.turnSpeed = opts.turnSpeed ?? 8; // рад/сек
            this.aimMode = opts.aimMode || "full"; // full | limited
            this.minAimAngle = opts.minAimAngle ?? -Math.PI;
            this.maxAimAngle = opts.maxAimAngle ?? Math.PI;
            this.flipByTargetX = opts.flipByTargetX || false;
            this.originalFacing = opts.originalFacing || "right"; // right | left
            this.aimRangeMultiplier = opts.aimRangeMultiplier ?? 1.2;
            this.flipX = false;
            this.pulseAnim = 0;
            this.jamTimer = 0;
            this.jamFireRateMult = 1;
            this.singularityPhase = Math.random() * 1000;

            // Singularity charge state (safe for all towers)
            const lvl0 = opts.levels?.[0] || {};
            this.singularityCharge = 0;
            this.singularityChargePerEnemy = lvl0.chargePerEnemy ?? 0;

            // базовые значения
            this.baseFireRate = this.fireRate;
            this.baseRange = this.range;   
            this.baseDamage =  this.damage;
            this.baseBurnDamage = this.burnDamage ?? 0;
            this.baseCritChance = this.critChance;
            this.baseCritMult = this.critMult;
            this.baseSpecialShotChance = this.specialShotChance ?? 0;
            this.specialBuildTile = null;
            this.hasBuff = false;
            this.cachedFireRateBoost = 1;
            this.cachedRangeBoost = 1;
            this.cachedDamageBoost = 1;
            this.cachedCritChanceBoost = 0;
            this.cachedAuraKillGoldChance = 0;
            this.cachedAuraKillGoldBonus = 0;
            this.cachedAuraGoldTile = null;
            this.buffRefreshInterval = 0.12;
            this.buffRefreshTimer = 0;

            this.totalDamageDealt = 0;
            this.waveDamageDealt = 0;

            this.readinessBarW = 24;
            this.readinessBarH = 4;
            this.readinessBarX = -this.readinessBarW / 2;
            // Keep the attack bar on one shared baseline for all tower sprites.
            const readinessAnchorH = 50;
            this.readinessBarY = readinessAnchorH * 0.52 + 3;
            this.readinessBarUpdateInterval = 3;
            this.readinessBarUpdatePhase = Math.abs(instanceNumber || 0) % this.readinessBarUpdateInterval;
            this._cachedAttackReadinessInfo = null;
            this._cachedAttackReadinessFrame = -9999;
        }

        recordDamage(amount) {
            const safeAmount = Number(amount) || 0;
            if (safeAmount <= 0) return;

            this.totalDamageDealt += safeAmount;
            this.waveDamageDealt += safeAmount;
            if (this.game) {
                this.game._towerDamagePanelDirty = true;
            }
        }

        resetWaveDamageStats() {
            this.waveDamageDealt = 0;
        }

        getHoverRadius() {
            return Math.max(14, Math.min(this.w, this.h) * 0.48);
        }

        isHovered() {
            if (!p.gameStarted || p.gameEnded) return false;
            if (p.menu?.settingModal || p.game?.waitingEndChoice || p.game?.paused) return false;
            if (p.mouseX >= FIELD_WIDTH) return false;
            if (p.mouseY < 0 || p.mouseY > (this.game?.fieldHeight ?? p.height)) return false;

            const activeTower = p.game?.upgradeMode?.tower;
            if (activeTower && activeTower !== this) return false;

            return Math.hypot(p.mouseX - this.x, p.mouseY - this.y) <= this.getHoverRadius();
        }

        applyLevel() {
            const lvl = this.type.levels[this.level - 1];


            this.range = lvl.range;
            this.fireRate = lvl.fireRate;
            this.damage = lvl.damage;
            this.projSpeed = lvl.projSpeed;
            this.bounces = lvl.bounces ?? 0;
            this.projectileCount = Math.max(1, lvl.projectileCount ?? 1);
            this.chainRange = lvl.chainRange ?? 0;
            this.slowFactor = lvl.slowFactor ?? 0;
            this.slowDuration = lvl.slowDuration ?? 0;
            this.splashRadius = lvl.splashRadius ?? 0;
            this.primarySlowFactor = lvl.primarySlowFactor ?? this.type.primarySlowFactor ?? 0;
            this.primarySlowDuration = lvl.primarySlowDuration ?? this.type.primarySlowDuration ?? 0;

            this.burnDuration = lvl.burnDuration ?? 0;
            this.burnDamage = lvl.burnDamage ?? 0;
            this.critChance = lvl.critChance ?? this.type.critChance ?? 0;
            this.critMult = lvl.critMult ?? this.type.critMult ?? 1;
            this.specialShotChance = lvl.specialShotChance ?? 0;
            this.magazine = lvl.magazine ?? this.magazine ?? 0;
            this.reloadTime = lvl.reloadTime ?? this.reloadTime ?? 0;
            this.idleReloadDelay = lvl.idleReloadDelay ?? this.idleReloadDelay ?? 0;
            if (this.magazine > 0) {
                this.shotsLeft = this.magazine;
                this.reloadTimer = 0;
            }

            // singularity charge params (no-op for other towers)
            this.singularityChargePerEnemy = lvl.chargePerEnemy ?? 0;

            this.baseFireRate = this.fireRate;
            this.baseRange = this.range;   
            this.baseDamage =  this.damage;
            this.baseBurnDamage = this.burnDamage ?? 0;
            this.baseCritChance = this.critChance;
            this.baseCritMult = this.critMult;
            this.baseSpecialShotChance = this.specialShotChance ?? 0;
            this.buffRefreshTimer = 0;
        }

        rollCrit(baseDamage) {
            if (!this.baseCritChance || this.baseCritChance <= 0) {
                return { damage: baseDamage, isCrit: false };
            }
            if (!this.critMult || this.critMult <= 1) {
                return { damage: baseDamage, isCrit: false };
            }
            const chance = Math.max(0, Math.min(1, this.critChance ?? 0));
            if (chance <= 0) {
                return { damage: baseDamage, isCrit: false };
            }
            if (Math.random() <= chance) {
                return { damage: baseDamage * this.critMult, isCrit: true };
            }
            return { damage: baseDamage, isCrit: false };
        }

        buildAttackProfile(overrides = {}) {
            return {
                projectileType: overrides.projectileType ?? this.type.projectileType ?? this.type.id,
                projectileCount: Math.max(1, overrides.projectileCount ?? this.projectileCount ?? 1),
                volleyMode: overrides.volleyMode ?? "priority",
                fillToProjectileCount: !!overrides.fillToProjectileCount,
                damageMult: Math.max(0, overrides.damageMult ?? 1),
                speed: overrides.speed ?? this.projSpeed,
                chainRange: overrides.chainRange ?? this.chainRange ?? 0,
                bounces: overrides.bounces ?? this.bounces ?? 0,
                slowFactor: overrides.slowFactor ?? this.slowFactor ?? 0,
                slowDuration: overrides.slowDuration ?? this.slowDuration ?? 0,
                primarySlowFactor: overrides.primarySlowFactor ?? this.primarySlowFactor ?? 0,
                primarySlowDuration: overrides.primarySlowDuration ?? this.primarySlowDuration ?? 0,
                burnDamage: overrides.burnDamage ?? this.burnDamage ?? 0,
                burnDuration: overrides.burnDuration ?? this.burnDuration ?? 0,
                splashRadius: overrides.splashRadius ?? this.splashRadius ?? 0,
                soundId: overrides.soundId ?? this.type.id
            };
        }

        rollBasicAttackProfile() {
            const specialChance = Math.max(0, Math.min(1, this.specialShotChance ?? 0));
            if (specialChance <= 0 || Math.random() > specialChance) {
                return this.buildAttackProfile({
                    projectileType: "basic",
                    soundId: "basic",
                    bounces: 0,
                    chainRange: 0,
                    slowFactor: 0,
                    slowDuration: 0,
                    burnDamage: 0,
                    burnDuration: 0,
                    splashRadius: 0
                });
            }

            const levelIndex = Math.max(0, Math.min((this.level || 1) - 1, 2));
            const slowBase = p.TOWER_TYPES?.slow?.levels?.[levelIndex] || p.TOWER_TYPES?.slow?.levels?.[0] || {};
            const burnBase = p.TOWER_TYPES?.burn?.levels?.[levelIndex] || p.TOWER_TYPES?.burn?.levels?.[0] || {};
            const rocketBase = p.TOWER_TYPES?.rocket?.levels?.[levelIndex] || p.TOWER_TYPES?.rocket?.levels?.[0] || {};
            const variants = [
                this.buildAttackProfile({
                    projectileType: "basic_slow",
                    soundId: "slow",
                    bounces: 0,
                    chainRange: 0,
                    slowFactor: slowBase.slowFactor ?? 0,
                    slowDuration: slowBase.slowDuration ?? 0,
                    burnDamage: 0,
                    burnDuration: 0,
                    splashRadius: 0
                }),
                this.buildAttackProfile({
                    projectileType: "basic_ricochet",
                    soundId: "multishot",
                    bounces: 1,
                    chainRange: slowBase.chainRange ?? 100,
                    slowFactor: 0,
                    slowDuration: 0,
                    burnDamage: 0,
                    burnDuration: 0,
                    splashRadius: 0
                }),
                this.buildAttackProfile({
                    projectileType: "basic_multi",
                    soundId: "multishot",
                    projectileCount: 3,
                    fillToProjectileCount: true,
                    bounces: 0,
                    chainRange: 0,
                    slowFactor: 0,
                    slowDuration: 0,
                    burnDamage: 0,
                    burnDuration: 0,
                    splashRadius: 0
                }),
                this.buildAttackProfile({
                    projectileType: "basic_fire",
                    soundId: "burn",
                    bounces: 0,
                    chainRange: 0,
                    slowFactor: 0,
                    slowDuration: 0,
                    burnDamage: burnBase.burnDamage ?? 0,
                    burnDuration: burnBase.burnDuration ?? 0,
                    splashRadius: 0
                }),
                this.buildAttackProfile({
                    projectileType: "basic_bomb",
                    soundId: "rocket",
                    bounces: 0,
                    chainRange: 0,
                    slowFactor: 0,
                    slowDuration: 0,
                    burnDamage: 0,
                    burnDuration: 0,
                    splashRadius: rocketBase.splashRadius ?? 0
                }),
                this.buildAttackProfile({
                    projectileType: "sniper",
                    soundId: "sniper",
                    damageMult: 1.5,
                    bounces: 0,
                    chainRange: 0,
                    slowFactor: 0,
                    slowDuration: 0,
                    burnDamage: 0,
                    burnDuration: 0,
                    splashRadius: 0
                })
            ];

            return variants[Math.floor(Math.random() * variants.length)] || variants[0];
        }

        getAttackProfile() {
            if (this.type.id === "basic") {
                return this.rollBasicAttackProfile();
            }
            return this.buildAttackProfile();
        }

        findTargets(units, attackRange = this.range, aimRange = attackRange) {
            const perfStart = this.game?.getPerfNow?.();
            const safeAttackRange = Math.max(0, attackRange || 0);
            const safeAimRange = Math.max(safeAttackRange, aimRange || 0);
            const attackRangeSq = safeAttackRange * safeAttackRange;
            const aimRangeSq = safeAimRange * safeAimRange;

            let bestAttackTarget = null;
            let bestAttackDistSq = Infinity;
            let bestAttackPriority = -Infinity;

            let bestAimTarget = null;
            let bestAimDistSq = Infinity;
            let bestAimPriority = -Infinity;

            for (const u of units) {
                if (!u.alive || u.reachedBase) continue;
                if (u.isUntargetable()) continue;

                const dx = u.x - this.x;
                const dy = u.y - this.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > aimRangeSq) continue;

                const pr = u.targetPriority ?? 0;
                if (pr > bestAimPriority || (pr === bestAimPriority && distSq < bestAimDistSq)) {
                    bestAimTarget = u;
                    bestAimDistSq = distSq;
                    bestAimPriority = pr;
                }

                if (distSq > attackRangeSq) continue;
                if (pr > bestAttackPriority || (pr === bestAttackPriority && distSq < bestAttackDistSq)) {
                    bestAttackTarget = u;
                    bestAttackDistSq = distSq;
                    bestAttackPriority = pr;
                }
            }
            if (perfStart !== undefined) {
                this.game?.addPerfSample?.("towerTargeting", this.game.getPerfNow() - perfStart);
            }
            return {
                target: bestAttackTarget,
                aimTarget: bestAimTarget
            };
        }

        updateBuffs(towers, dt = 0) {
                const perfStart = this.game?.getPerfNow?.();

                // Сброс к базе
                this.fireRate = this.baseFireRate;
                this.range = this.baseRange;
                this.damage = this.baseDamage;
                this.burnDamage = this.baseBurnDamage ?? 0;
                this.critChance = this.baseCritChance;
                this.critMult = this.baseCritMult;
                this.specialShotChance = this.baseSpecialShotChance ?? 0;

                if ((!Number.isFinite(this.cellX) || !Number.isFinite(this.cellY)) && this.game?.worldToCell) {
                    const cell = this.game.worldToCell(this.x, this.y);
                    this.cellX = cell?.cx;
                    this.cellY = cell?.cy;
                }

                const specialTile = this.game?.getSpecialBuildTile && Number.isFinite(this.cellX) && Number.isFinite(this.cellY)
                    ? this.game.getSpecialBuildTile(this.cellX, this.cellY)
                    : this.specialBuildTile;
                this.specialBuildTile = specialTile || null;
                const supportSelfTileEffects = this.type.id === "support"
                    ? (this.game?.getSupportTileAuraEffects?.(specialTile) || { auraRangeMult: 1 })
                    : null;
                if (specialTile) {
                    if (Number.isFinite(specialTile.damageMult)) {
                        this.damage *= specialTile.damageMult;
                        if (this.burnDamage > 0) {
                            this.burnDamage *= specialTile.damageMult;
                        }
                    }
                    if (Number.isFinite(specialTile.rangeMult)) {
                        const selfRangeMult = this.type.id === "support"
                            ? (supportSelfTileEffects?.auraRangeMult || 1)
                            : specialTile.rangeMult;
                        this.range *= selfRangeMult;
                    }
                    if (Number.isFinite(specialTile.fireRateMult)) {
                        this.fireRate *= specialTile.fireRateMult;
                    }
                }

                this.buffRefreshTimer = Math.max(0, (this.buffRefreshTimer || 0) - dt);
                if (this.buffRefreshTimer <= 0) {
                    let bestFireRateBoost = 1;
                    let bestRangeBoost = 1;
                    let bestDamageBoost = 1;
                    let bestCritChanceBoost = 0;
                    let bestKillGoldChance = 0;
                    let bestKillGoldBonus = 0;
                    let bestKillGoldTile = null;

                    for (const t of towers) {
                        if (t === this) continue;
                        if (t.type.id !== "support") continue;

                        const lvl = t.type.levels[t.level - 1];
                        if (this.game?.isSupportAuraAffectingTower?.(t, this)) {
                            const supportTile = t.specialBuildTile;
                            const supportEffects = this.game?.getSupportTileAuraEffects?.(supportTile) || {
                                rangeBoostBonus: 0,
                                fireRateMult: 1,
                                damageMult: 1,
                                goldChance: 0,
                                goldBonus: 0
                            };

                            bestFireRateBoost = this.game?.resolveSupportAuraModifier?.(
                                bestFireRateBoost,
                                (lvl.fireRateBoost || 1) * (supportEffects.fireRateMult || 1)
                            ) ?? bestFireRateBoost;
                            bestRangeBoost = this.game?.resolveSupportAuraModifier?.(
                                bestRangeBoost,
                                this.game?.getSupportRangeBoostMult?.(lvl.rangeBoost || 1, supportTile) ?? (lvl.rangeBoost || 1)
                            ) ?? bestRangeBoost;
                            bestDamageBoost = this.game?.resolveSupportAuraModifier?.(
                                bestDamageBoost,
                                supportEffects.damageMult || 1
                            ) ?? bestDamageBoost;

                            if (this.baseCritChance > 0 && lvl.critChanceBoost) {
                                bestCritChanceBoost = Math.max(bestCritChanceBoost, lvl.critChanceBoost);
                            }

                            if ((supportEffects.goldChance || 0) > bestKillGoldChance) {
                                bestKillGoldChance = supportEffects.goldChance || 0;
                                bestKillGoldBonus = supportEffects.goldBonus || 0;
                                bestKillGoldTile = supportTile;
                            }
                        }
                    }

                    this.cachedFireRateBoost = bestFireRateBoost;
                    this.cachedRangeBoost = bestRangeBoost;
                    this.cachedDamageBoost = bestDamageBoost;
                    this.cachedCritChanceBoost = bestCritChanceBoost;
                    this.cachedAuraKillGoldChance = bestKillGoldChance;
                    this.cachedAuraKillGoldBonus = bestKillGoldBonus;
                    this.cachedAuraGoldTile = bestKillGoldTile;
                    this.buffRefreshTimer = this.buffRefreshInterval + ((this.instanceNumber % 5) * 0.01);
                }

                this.fireRate *= this.cachedFireRateBoost;
                this.range *= this.cachedRangeBoost;
                this.damage *= this.cachedDamageBoost;
                if (this.burnDamage > 0) {
                    this.burnDamage *= this.cachedDamageBoost;
                }
                if (this.baseCritChance > 0 && this.cachedCritChanceBoost > 0) {
                    this.critChance = Math.min(1, this.critChance + this.cachedCritChanceBoost);
                }
                if (this.jamTimer > 0) {
                    this.fireRate *= this.jamFireRateMult;
                }

                this.hasBuff =
                    this.cachedFireRateBoost > 1 ||
                    this.cachedRangeBoost > 1 ||
                    this.cachedDamageBoost > 1 ||
                    this.cachedAuraKillGoldChance > 0 ||
                    this.cachedCritChanceBoost > 0;
                if (perfStart !== undefined) {
                    this.game?.addPerfSample?.("towerBuffs", this.game.getPerfNow() - perfStart);
                }
        }

        upgrade() {
            if (this.level >= this.maxLevel) return false;
            this.level += 1;
            this.applyLevel();
            return true;
        }

        getTotalCost() {
            let total = this.cost;
            for (let lvl = 1; lvl < this.level; lvl++) {
                total += Math.round(this.cost * lvl);
            }
            return total;
        }

        upgradeCost() {
            return Math.round(this.cost * this.level);
        }

        adjustCooldownForJamMultiplier(prevMult = 1, nextMult = 1) {
            if (this.cooldown <= 0) return;

            const safePrev = Number.isFinite(prevMult) ? prevMult : 1;
            const safeNext = Number.isFinite(nextMult) ? nextMult : 1;
            if (safePrev <= 0 || safeNext <= 0 || safePrev === safeNext) return;

            this.cooldown *= (safePrev / safeNext);
        }

        applyJammer(fireRateMult = 0.55, duration = 1.9) {
            const minJamMult = Math.max(0.2, Math.min(1, this.type?.minJamFireRateMult ?? 0.2));
            const safeMult = Math.max(minJamMult, Math.min(1, fireRateMult || 1));
            const prevMult = this.jamTimer > 0 ? (this.jamFireRateMult || 1) : 1;
            const nextMult = Math.min(prevMult, safeMult);

            // Если дебафф стал сильнее, растягиваем уже идущую перезарядку.
            if (this.cooldown > 0 && nextMult < prevMult) {
                this.adjustCooldownForJamMultiplier(prevMult, nextMult);
            }

            this.jamFireRateMult = nextMult;
            this.jamTimer = Math.max(this.jamTimer || 0, duration || 0);
        }

        getVolleyTargets(units, primaryTarget = null, maxTargets = 1, attackRange = this.range, mode = "priority") {
            const limit = Math.max(1, Math.floor(maxTargets || 1));
            const attackRangeSq = Math.max(0, attackRange || 0) ** 2;
            const candidates = [];

            for (const u of units) {
                if (!u.alive || u.reachedBase) continue;
                if (u.isUntargetable()) continue;

                const dx = u.x - this.x;
                const dy = u.y - this.y;
                const distSq = dx * dx + dy * dy;
                if (distSq > attackRangeSq) continue;

                candidates.push({
                    unit: u,
                    priority: u.targetPriority ?? 0,
                    distSq
                });
            }

            if (candidates.length <= 0) {
                return primaryTarget ? [primaryTarget] : [];
            }

            const result = [];
            const hasPrimaryTarget = primaryTarget && candidates.some(candidate => candidate.unit === primaryTarget);
            if (hasPrimaryTarget) {
                result.push(primaryTarget);
            }

            if (mode === "random") {
                const pool = candidates
                    .map(candidate => candidate.unit)
                    .filter(unit => unit !== primaryTarget);

                for (let i = pool.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [pool[i], pool[j]] = [pool[j], pool[i]];
                }

                for (const unit of pool) {
                    if (result.length >= limit) break;
                    result.push(unit);
                }
            } else {
                candidates.sort((a, b) => {
                    if (b.priority !== a.priority) return b.priority - a.priority;
                    return a.distSq - b.distSq;
                });

                for (const candidate of candidates) {
                    if (result.length >= limit) break;
                    if (candidate.unit === primaryTarget) continue;
                    result.push(candidate.unit);
                }
            }

            if (result.length <= 0 && primaryTarget) {
                result.push(primaryTarget);
            }

            return result;
        }

        update(dt, units, projectiles) {
            if (this.meleeSwingTimer > 0) {
                this.meleeSwingTimer = Math.max(0, this.meleeSwingTimer - dt);
                if (this.meleeSwingTimer <= 0) {
                    this.cleaverSwingCrit = false;
                }
            }
            if (this.cleaverImpactFxTimer > 0) {
                this.cleaverImpactFxTimer = Math.max(0, this.cleaverImpactFxTimer - dt);
            }
            if (this.type.id === "cleaver") {
                const targetSwordPose = this.getCleaverSwordPose();
                if (!this.cleaverSwordPoseVisual) {
                    this.cleaverSwordPoseVisual = { ...targetSwordPose };
                } else {
                    const poseFollow = this.meleeSwingTimer > 0 ? 18 : (this.cooldown > 0 ? 10 : 5.5);
                    const blend = 1 - Math.exp(-poseFollow * dt);
                    this.cleaverSwordPoseVisual.x = p.lerp(this.cleaverSwordPoseVisual.x, targetSwordPose.x, blend);
                    this.cleaverSwordPoseVisual.y = p.lerp(this.cleaverSwordPoseVisual.y, targetSwordPose.y, blend);
                    this.cleaverSwordPoseVisual.angle = p.lerp(this.cleaverSwordPoseVisual.angle, targetSwordPose.angle, blend);
                    this.cleaverSwordPoseVisual.size = p.lerp(this.cleaverSwordPoseVisual.size, targetSwordPose.size, blend);
                    this.cleaverSwordPoseVisual.alpha = p.lerp(this.cleaverSwordPoseVisual.alpha, targetSwordPose.alpha, blend);
                    this.cleaverSwordPoseVisual.trail = p.lerp(this.cleaverSwordPoseVisual.trail, targetSwordPose.trail, blend);
                    this.cleaverSwordPoseVisual.isCrit = !!targetSwordPose.isCrit;
                }
            }

            if (this.jamTimer > 0) {
                this.jamTimer -= dt;
                if (this.jamTimer <= 0) {
                    const prevJamMult = Math.max(0.2, Math.min(1, this.jamFireRateMult || 1));
                    this.jamTimer = 0;
                    this.adjustCooldownForJamMultiplier(prevJamMult, 1);
                    this.jamFireRateMult = 1;
                }
            }

            if (this.type.id === "support") 
                return

            this.cooldown = Math.max(0, this.cooldown - dt);
            const aimRange = this.range * this.aimRangeMultiplier;
            const targets = this.findTargets(units, this.range, aimRange);
            const aimTarget = targets.aimTarget;
            const target = targets.target;
            this.updateAngle(dt, target || aimTarget);

            const muzzleX = this.flipX ? -this.muzzle.x : this.muzzle.x;
            const shotAngle = this.flipX ? -this.angle : this.angle;
            const cos = Math.cos(shotAngle);
            const sin = Math.sin(shotAngle);
            const mx = this.x + muzzleX * cos - this.muzzle.y * sin;
            const my = this.y + muzzleX * sin + this.muzzle.y * cos;
            // if (!Number.isFinite(mx) || !Number.isFinite(my)) return;

            const isCat = this.type.id === "cat_revolver";
            if (isCat && this.idleReloadDelay > 0 && this.magazine > 0 && this.reloadTimer <= 0) {
                this.timeSinceShot = (this.timeSinceShot || 0) + dt;
                if (this.timeSinceShot >= this.idleReloadDelay && this.shotsLeft < this.magazine) {
                    this.shotsLeft = this.magazine;
                    this.timeSinceShot = 0;
                }
            }

            if (this.reloadTimer > 0) {
                this.reloadTimer = Math.max(0, this.reloadTimer - dt);
                if (this.reloadTimer === 0 && this.magazine > 0) {
                    this.shotsLeft = this.magazine;
                }
            }

            if (this.type.id === "pulse") 
            {
                if (this.cooldown <= 0) {
                    const targets = [...units];
                    let hit = false;
                    for (let e of targets) {
                        if (!e.alive || e.reachedBase) continue;
                        if (e.isUntargetable()) continue;

                        const d = p.dist(mx, my, e.x, e.y);

                        if (d <= this.range) {
                            if (!hit) {
                                this.pulseAnim = 0.55;
                                hit = true;
                            }
                            e.damage(this.damage, this);
                        }
                    }

                    if (hit) {
                        this.playShotSound();
                        this.cooldown = this.fireRate > 0 ? 1 / this.fireRate : 0;
                    }
                }

                return; 
            }
            
            if (this.type.id === "singularity") 
            {
                const jamMult = (this.jamTimer > 0)
                    ? Math.max(0.2, Math.min(1, this.jamFireRateMult || 1))
                    : 1;

                let count = 0;
                for (let e of units) {
                    if (!e.alive || e.reachedBase) continue;
                    if (e.isUntargetable()) continue;
                    const d = p.dist(this.x, this.y, e.x, e.y);
                    if (d <= this.range) count++;
                }

                const chargeRate = Number.isFinite(this.singularityChargePerEnemy)
                    ? this.singularityChargePerEnemy * jamMult
                    : 0;

                if (count > 0 && chargeRate > 0) {
                    this.singularityCharge = Math.min(
                        1,
                        (this.singularityCharge || 0) + count * chargeRate * dt
                    );
                }

                if ((this.singularityCharge || 0) >= 1) {
                    this.pulseAnim = 0.75;
                    const targets = [...units];
                    for (let e of targets) {
                        if (!e.alive || e.reachedBase) continue;
                        if (e.isUntargetable()) continue;

                        const d = p.dist(this.x, this.y, e.x, e.y);

                        if (d <= this.range) {
                            e.damage(this.damage, this);
                            if (e.alive) {
                                if (this.slowFactor) {
                                    e.applySlow(this.slowFactor, this.slowDuration);
                                }
                                if (this.burnDamage) {
                                    e.applyBurn(this.burnDamage, this.burnDuration, this);
                                }
                            }
                        }
                    }

                    this.playShotSound();
                    this.singularityCharge = 0;
                }

                return; 
            }

            if (this.type.id === "orbital") 
            {
                if (this.cooldown <= 0) {
                    const targets = units.slice();
                    let hit = false;
                    for (let e of targets) {
                        if (!e.alive || e.reachedBase) continue;
                        if (e.isUntargetable()) continue;

                        if (!hit) {
                            this.pulseAnim = 0.85;
                            hit = true;
                        }

                        e.damage(this.damage, this);
                        if (e.alive && this.slowFactor) {
                            e.applySlow(this.slowFactor, this.slowDuration);
                        }
                    }

                    if (hit) {
                        this.playShotSound();
                        this.cooldown = this.fireRate > 0 ? 1 / this.fireRate : 0;
                    }
                }

                return; 
            }

            if (this.magazine > 0) {
                if (this.reloadTimer > 0) return;
                if (this.shotsLeft <= 0) {
                    if ((this.reloadTime || 0) > 0) {
                        this.reloadTimer = this.reloadTime;
                    } else {
                        this.shotsLeft = this.magazine;
                    }
                    return;
                }
            }

            if (this.cooldown > 0) return;
            const attackProfile = this.getAttackProfile();
            let volleyTargets = [];
            if (attackProfile.projectileCount > 1) {
                if (!target) return;
                volleyTargets = this.getVolleyTargets(
                    units,
                    target,
                    attackProfile.projectileCount,
                    this.range,
                    attackProfile.volleyMode
                );
                if (attackProfile.fillToProjectileCount && volleyTargets.length > 0) {
                    while (volleyTargets.length < attackProfile.projectileCount) {
                        volleyTargets.push(target);
                    }
                }
            } else {
                if (!target) return;
                volleyTargets = [target];
            }
            if (volleyTargets.length <= 0) return;

            let didCritThisVolley = false;
            for (const volleyTarget of volleyTargets) {
                const shot = this.rollCrit(this.damage);
                didCritThisVolley = didCritThisVolley || shot.isCrit;
                projectiles.push(new Projectile(mx, my, volleyTarget, {
                    type: attackProfile.projectileType,
                    ownerTower: this,
                    speed: attackProfile.speed,
                    damage: shot.damage * (attackProfile.damageMult ?? 1),
                    isCrit: shot.isCrit,
                    r: 3,
                    chainRange: attackProfile.chainRange,
                    bounces: attackProfile.bounces ?? 0, 
                    slowFactor: attackProfile.slowFactor,
                    slowDuration: attackProfile.slowDuration,
                    primarySlowFactor: attackProfile.primarySlowFactor,
                    primarySlowDuration: attackProfile.primarySlowDuration,
                    burnDamage: attackProfile.burnDamage,
                    burnDuration: attackProfile.burnDuration,
                    splashRadius: attackProfile.splashRadius
                }));
            }

            this.playShotSound(attackProfile);
            if (this.type.id === "cleaver") {
                this.meleeSwingTimer = this.meleeSwingDuration;
                this.cleaverSwingCrit = didCritThisVolley;
            }

            this.cooldown = 1 / this.fireRate;
            if (this.magazine > 0) {
                this.shotsLeft -= 1;
                if (this.shotsLeft <= 0) {
                    if ((this.reloadTime || 0) > 0) {
                        this.reloadTimer = this.reloadTime;
                    } else {
                        this.shotsLeft = this.magazine;
                    }
                }
            }
            if (isCat) {
                this.timeSinceShot = 0;
            }
        }

        playShotSound(_attackProfile = null) {
            const soundKey = _attackProfile?.soundId ?? this.type.id;

            if (soundKey === "basic") {
                const pool = p.variables.soundBasicShots;
                if (Array.isArray(pool) && pool.length > 0) {
                    const idx = p.variables.soundBasicShotIndex || 0;
                    const shot = pool[idx % pool.length];
                    p.variables.soundBasicShotIndex = (idx + 1) % pool.length;

                    const baseVol = p.variables.soundBound?.volume;
                    if (typeof baseVol === "number") {
                        shot.volume = baseVol;
                    }

                    try {
                        shot.currentTime = 0;
                        shot.play();
                    } catch (e) {}
                    return;
                }
            }

            const sounds = {
                basic: p.variables.soundBasicShot,
                sniper: p.variables.soundSniperShot,
                rapid: p.variables.soundRapidShot,
                multishot: p.variables.soundRapidShot,
                slow: p.variables.soundSlowShot,
                burn: p.variables.soundBurnShot,
                chain: p.variables.soundChainShot,
                cleaver: p.variables.soundCleaverShot,
                pulse: p.variables.soundPulseShot,
                singularity: p.variables.soundSingularityShot,
                rocket: p.variables.soundRocketShot ,
                orbital: p.variables.soundOrbitalShot,
                cat_revolver: p.variables.cat_revolver
            };

            const shot = sounds[soundKey];
            if (!shot) return;

            const baseVol = p.variables.soundBound?.volume;
            if (typeof baseVol === "number") {
                shot.volume = baseVol;
            }

            try {
                shot.currentTime = 0;
                shot.play();
            } catch (e) {}
        }

        normAngle(a) {
            return Math.atan2(Math.sin(a), Math.cos(a));
        }

        clampAimAngle(targetAngle) {
            if (this.aimMode !== "limited") return targetAngle;

            const rel = this.normAngle(targetAngle - this.idleAngle);
            const clampedRel = Math.max(this.minAimAngle, Math.min(this.maxAimAngle, rel));
            return this.idleAngle + clampedRel;
        }

        rotateTo(targetAngle, dt) {
            const diff = this.normAngle(targetAngle - this.angle);
            const maxStep = this.turnSpeed * dt;
            const step = Math.max(-maxStep, Math.min(maxStep, diff));
            this.angle = this.normAngle(this.angle + step);
        }

        updateAngle(dt, target) {
            if (!this.canRotate) {
                this.angle = this.idleAngle;
                this.flipX = false;
                return;
            }

            let desired = this.idleAngle;
            if (target) {
                const dx = target.x - this.x;
                const dy = target.y - this.y;

                if (this.flipByTargetX) {
                    const side = dx >= 0 ? "right" : "left";
                    this.flipX = side !== this.originalFacing;
                } else {
                    this.flipX = false;
                }

                const aimDx = this.flipX ? -dx : dx;
                desired = Math.atan2(dy, aimDx) + this.angleOffset;
            } else {
                this.flipX = false;
            }

            desired = this.clampAimAngle(desired);
            this.rotateTo(desired, dt);
        }

        getAttackReadinessInfo() {
            if (this.type.id === "support" || this.type.id === "singularity") {
                return null;
            }

            if (this.reloadTimer > 0 && (this.reloadTime || 0) > 0) {
                return {
                    progress: p.constrain(1 - this.reloadTimer / this.reloadTime, 0, 1),
                    color: [255, 194, 120],
                    isReady: false
                };
            }

            if ((this.fireRate || 0) <= 0) {
                return null;
            }

            const cycleTime = 1 / Math.max(0.001, this.fireRate);
            const progress = this.cooldown > 0
                ? p.constrain(1 - this.cooldown / cycleTime, 0, 1)
                : 1;

            return {
                progress,
                color: this.jamTimer > 0 ? [255, 140, 140] : [120, 235, 170],
                isReady: this.cooldown <= 0
            };
        }

        getCleaverSwordPose() {
            const recoverPose = { x: -12, y: 6, angle: 0.18 };
            const windupPose = { x: -10, y: -4, angle: -1.02 };
            const strikePose = { x: -30, y: 10, angle: -1.58 };
            const swordSize = this.w * 1.34;

            if (this.meleeSwingTimer > 0 && this.meleeSwingDuration > 0) {
                const swingT = 1 - p.constrain(this.meleeSwingTimer / this.meleeSwingDuration, 0, 1);
                const eased = 1 - Math.pow(1 - swingT, 3);
                const isCrit = !!this.cleaverSwingCrit;
                return {
                    x: p.lerp(windupPose.x, strikePose.x, eased),
                    y: p.lerp(windupPose.y, strikePose.y, eased),
                    angle: p.lerp(windupPose.angle, strikePose.angle, eased),
                    size: swordSize * (1 + Math.sin(swingT * Math.PI) * (isCrit ? 0.12 : 0.08)),
                    alpha: p.lerp(255, isCrit ? 248 : 215, eased),
                    trail: Math.sin(swingT * Math.PI),
                    isCrit
                };
            }

            const cycleTime = (this.fireRate || 0) > 0 ? 1 / Math.max(0.001, this.fireRate) : 0;
            const reloadProgress = cycleTime > 0 && this.cooldown > 0
                ? p.constrain(1 - this.cooldown / cycleTime, 0, 1)
                : 1;
            const eased = 1 - Math.pow(1 - reloadProgress, 2);

            return {
                x: p.lerp(recoverPose.x, windupPose.x, eased),
                y: p.lerp(recoverPose.y, windupPose.y, eased),
                angle: p.lerp(recoverPose.angle, windupPose.angle, eased),
                size: swordSize,
                alpha: p.lerp(210, 255, eased),
                trail: 0,
                isCrit: false
            };
        }

        triggerCleaverImpactFx(hitX, hitY, radius = 0, isCrit = false) {
            if (this.type.id !== "cleaver") return;

            this.cleaverImpactFxX = hitX;
            this.cleaverImpactFxY = hitY;
            this.cleaverImpactFxRadius = Math.max(this.w * 0.6, radius || 0);
            this.cleaverImpactFxAngle = Math.atan2(hitY - this.y, hitX - this.x);
            this.cleaverImpactFxCrit = !!isCrit;
            this.cleaverImpactFxTimer = this.cleaverImpactFxDuration;
        }

        drawCleaverImpactFx() {
            if (this.type.id !== "cleaver") return;
            if (this.cleaverImpactFxTimer <= 0 || this.cleaverImpactFxDuration <= 0) return;

            const life = p.constrain(this.cleaverImpactFxTimer / this.cleaverImpactFxDuration, 0, 1);
            const progress = 1 - life;
            const localX = this.cleaverImpactFxX - this.x;
            const localY = this.cleaverImpactFxY - this.y;
            const splashRadius = Math.max(10, this.cleaverImpactFxRadius * (0.92 + progress * 0.18));
            const lineLen = Math.max(14, this.cleaverImpactFxRadius * (0.75 + progress * 0.25));
            const lineColor = this.cleaverImpactFxCrit ? [255, 228, 130] : [255, 255, 255];
            const ringColor = this.cleaverImpactFxCrit ? [255, 212, 110] : [255, 255, 255];
            const slashSpread = Math.max(6, this.cleaverImpactFxRadius * 0.18);

            p.push();
                p.translate(localX, localY, 18);
                p.rotate(this.cleaverImpactFxAngle);
                p.noFill();
                p.stroke(lineColor[0], lineColor[1], lineColor[2], 235 * life);
                p.strokeWeight(2.6 * life + 1);
                p.line(-lineLen * 0.35, 0, lineLen * 0.65, 0);

                if (this.cleaverImpactFxCrit) {
                    p.stroke(255, 236, 170, 210 * life);
                    p.strokeWeight(2.1 * life + 0.9);
                    p.line(-lineLen * 0.22, -slashSpread, lineLen * 0.58, -slashSpread * 0.4);

                    p.stroke(255, 214, 120, 175 * life);
                    p.strokeWeight(1.8 * life + 0.8);
                    p.line(-lineLen * 0.12, slashSpread * 0.95, lineLen * 0.52, slashSpread * 0.35);

                    p.stroke(255, 245, 205, 145 * life);
                    p.strokeWeight(1.2 * life + 0.7);
                    p.line(-lineLen * 0.05, -slashSpread * 0.45, lineLen * 0.46, slashSpread * 0.55);
                }

                if (this.cleaverImpactFxRadius > 0) {
                    p.stroke(ringColor[0], ringColor[1], ringColor[2], 180 * life);
                    p.strokeWeight((this.cleaverImpactFxCrit ? 3 : 2.2) * life + 0.8);
                    p.circle(0, 0, splashRadius * 2);

                    p.stroke(255, this.cleaverImpactFxCrit ? 236 : 255, this.cleaverImpactFxCrit ? 170 : 255, 110 * life);
                    p.strokeWeight((this.cleaverImpactFxCrit ? 1.9 : 1.4) * life + 0.6);
                    p.circle(0, 0, splashRadius * 1.35);
                }
            p.pop();
        }

        drawCleaverImpactFxOverlay() {
            if (this.type.id !== "cleaver") return;
            if (this.cleaverImpactFxTimer <= 0 || this.cleaverImpactFxDuration <= 0) return;

            p.push();
                p.translate(
                    -p.width / 2 + this.x,
                    -p.height / 2 + this.y,
                    18
                );
                this.drawCleaverImpactFx();
            p.pop();
        }

        drawCleaverSword(swordPose) {
            if (this.type.id !== "cleaver") return;
            if (!swordPose || !this.swordTexture?.[this.level - 1]) return;

            const gripOffsetX = swordPose.size * 0.18;
            const gripOffsetY = swordPose.size * 0.08;
            const isCrit = !!swordPose.isCrit;

            p.push();
                p.translate(swordPose.x, swordPose.y);
                p.rotate(swordPose.angle);

                if (swordPose.trail > 0.02) {
                    p.noFill();
                    p.stroke(
                        isCrit ? 255 : 255,
                        isCrit ? 220 : 170,
                        isCrit ? 110 : 110,
                        (isCrit ? 145 : 105) * swordPose.trail
                    );
                    p.strokeWeight((isCrit ? 14 : 11) * swordPose.trail + 1.2);
                    p.arc(-gripOffsetX - 10, -gripOffsetY + 6, swordPose.size * 1.1, swordPose.size * 0.56, -0.85, 0.42);

                    p.stroke(
                        255,
                        isCrit ? 245 : 240,
                        isCrit ? 170 : 210,
                        (isCrit ? 195 : 150) * swordPose.trail
                    );
                    p.strokeWeight((isCrit ? 5.2 : 4.2) * swordPose.trail + 0.8);
                    p.arc(-gripOffsetX - 10, -gripOffsetY + 6, swordPose.size * 0.9, swordPose.size * 0.42, -0.78, 0.28);
                }

                if (isCrit) {
                    p.noStroke();
                    p.fill(255, 220, 110, 70 + 55 * (swordPose.trail || 0));
                    p.ellipse(-gripOffsetX + swordPose.size * 0.12, -gripOffsetY, swordPose.size * 0.68, swordPose.size * 0.3);
                }

                p.noStroke();
                p.tint(
                    255,
                    isCrit ? 240 : 255,
                    isCrit ? 145 : 255,
                    swordPose.alpha
                );
                p.texture(this.swordTexture[this.level - 1]);
                p.rectMode(p.CENTER);
                p.rect(-gripOffsetX, -gripOffsetY, swordPose.size, swordPose.size, 4);
                p.noTint();
            p.pop();
        }

        drawAttackReadinessBar() {
            if (p.showTowerAttackReadinessBar === false) return;

            const frame = p.frameCount || 0;
            const updateInterval = Math.max(1, this.readinessBarUpdateInterval || 1);
            const shouldRefresh =
                this._cachedAttackReadinessFrame < 0 ||
                updateInterval === 1 ||
                frame % updateInterval === this.readinessBarUpdatePhase;

            if (shouldRefresh) {
                this._cachedAttackReadinessInfo = this.getAttackReadinessInfo();
                this._cachedAttackReadinessFrame = frame;
            }

            const info = this._cachedAttackReadinessInfo;
            if (!info) return;

            const progressW = this.readinessBarW * info.progress;
            const centerX = this.readinessBarX + this.readinessBarW / 2;
            const progressX = centerX - progressW / 2;

            p.rectMode(p.CORNER);
            p.noStroke();
            p.fill(12, 16, 24, 150);
            p.rect(this.readinessBarX, this.readinessBarY, this.readinessBarW, this.readinessBarH, 2);

            if (progressW > 0.01) {
                p.fill(...info.color, info.isReady ? 225 : 205);
                p.rect(progressX, this.readinessBarY, progressW, this.readinessBarH, 2);
            }

            if (info.isReady) {
                p.fill(255, 255, 255, 45);
                p.rect(this.readinessBarX, this.readinessBarY, this.readinessBarW, 1.2, 1);
            }
        }

       draw() {
            const isHovered = this.isHovered() && p.game?.upgradeMode?.tower !== this;
            const drawHoverRing = () => {
                const ringSize = this.w * 1.24;
                p.push();
                    p.noStroke();
                    p.fill(92, 160, 230, 30);
                    p.circle(0, 0, ringSize * 1.15);

                    p.noFill();
                    p.stroke(255, 208, 138, 150);
                    p.strokeWeight(1.8);
                    p.circle(0, 0, ringSize);
                p.pop();
            };
            const drawStatusChevrons = ({
                direction = "up",
                color = [120, 255, 180],
                glowColor = [210, 255, 225],
                baseAlpha = 180,
                pulseSpeed = 0.16
            }) => {
                const pulse = 0.5 + Math.sin(p.frameCount * pulseSpeed + this.instanceNumber * 0.55) * 0.5;
                const scale = 0.68 + pulse * 0.08;
                const alpha = baseAlpha + pulse * 70;
                const glowAlpha = 55 + pulse * 50;
                const strokeW = 1.65 + pulse * 0.5;
                const halfW = Math.max(2.2, this.w * 0.12 * scale - 1);
                const halfH = Math.max(2.2, this.h * 0.14 * scale - 1);
                const dir = direction === "down" ? 1 : -1;
                const cornerX = this.w * 0.46 + pulse * 0.35;
                const baseY = direction === "down"
                    ? this.h * 0.52 + pulse * 0.35
                    : -this.h * 0.52 - pulse * 0.35;
                const stackGap = this.h * 0.18;
                const positions = [
                    { x: cornerX, y: baseY, scale: 0.95 },
                    { x: cornerX, y: baseY + dir * stackGap, scale: 0.86 }
                ];

                p.push();
                    p.noFill();
                    p.strokeCap(p.ROUND);
                    p.strokeJoin(p.ROUND);

                    for (const mark of positions) {
                        const chevronHalfW = halfW * mark.scale;
                        const chevronHalfH = halfH * mark.scale;

                        p.stroke(glowColor[0], glowColor[1], glowColor[2], glowAlpha);
                        p.strokeWeight(strokeW + 1.8);
                        p.line(
                            mark.x - chevronHalfW,
                            mark.y - dir * chevronHalfH,
                            mark.x,
                            mark.y + dir * chevronHalfH
                        );
                        p.line(
                            mark.x,
                            mark.y + dir * chevronHalfH,
                            mark.x + chevronHalfW,
                            mark.y - dir * chevronHalfH
                        );

                        p.stroke(color[0], color[1], color[2], alpha);
                        p.strokeWeight(strokeW);
                        p.line(
                            mark.x - chevronHalfW,
                            mark.y - dir * chevronHalfH,
                            mark.x,
                            mark.y + dir * chevronHalfH
                        );
                        p.line(
                            mark.x,
                            mark.y + dir * chevronHalfH,
                            mark.x + chevronHalfW,
                            mark.y - dir * chevronHalfH
                        );
                    }
                p.pop();
            };
            p.push();

            // переводим в мировые координаты
            p.translate(
                -p.width / 2 + this.x,
                -p.height / 2 + this.y,
                3
            );

            if (this.type.id === "cat_revolver" && this.reloadTimer > 0) {
                const zPulse = 0.5 + Math.sin(p.frameCount * 0.18) * 0.5;
                p.push();
                    p.noStroke();
                    p.fill(255, 235, 200, 200);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(10 + 2 * zPulse);
                    p.text("Z", 0, -this.h * 0.65);
                    p.textSize(8 + 2 * zPulse);
                    p.text("Z", 8, -this.h * 0.85);
                p.pop();
            }

            if (this.type.id === "cat_revolver" && this.magazine > 0) {
                const shots = Math.max(0, Math.min(this.magazine, this.shotsLeft ?? 0));
                const r = this.w * 0.6;
                const dotR = 2.6;
                p.push();
                    p.noStroke();
                    for (let i = 0; i < this.magazine; i++) {
                        const a = -p.HALF_PI + (i * p.TWO_PI) / this.magazine;
                        const dx = Math.cos(a) * r;
                        const dy = Math.sin(a) * r;
                        if (i < shots) {
                            p.fill(255, 220, 140, 220);
                            p.circle(dx, dy, dotR * 2);
                        } else {
                            p.fill(80, 80, 90, 180);
                            p.circle(dx, dy, dotR * 1.6);
                        }
                    }
                p.pop();
            }

            if (isHovered && this.type.id === "singularity") {
                drawHoverRing();
            }

            if (this.pulseAnim > 0 && this.type.id === "pulse") {

                const t = p.constrain(this.pulseAnim / 0.55, 0, 1);
                const progress = 1 - t;
                p.push();
                    p.noFill();
                    p.stroke(230, 170, 255, 230 * t);
                    p.strokeWeight(6 * t + 1.5);
                    p.circle(0, 0, this.range * progress * 2);

                    p.stroke(180, 235, 255, 180 * t);
                    p.strokeWeight(3.5 * t + 1);
                    p.circle(0, 0, this.range * Math.max(0, progress - 0.2) * 2);

                    p.noStroke();
                    p.fill(255, 230, 255, 110 * t);
                    p.circle(0, 0, this.w * (1 + progress * 0.7));

                    this.pulseAnim -= p.deltaTime / 1000;
                 p.pop();
            }

            if (this.type.id === "singularity" && p.game?.upgradeMode?.tower !== this) {
                const t = p.frameCount * 0.03 + this.singularityPhase;
                const pulse = 0.5 + Math.sin(t) * 0.5;
                const ringA = this.w * (1.1 + pulse * 0.25);
                const ringB = this.w * (1.5 + (1 - pulse) * 0.35);
                const swirl = p.frameCount * 0.07 + this.singularityPhase * 0.2;

                // Воронка
                p.push();
                    p.noStroke();
                    p.fill(10, 8, 18, 210);
                    p.circle(0, 0, this.w * 0.95);
                    p.fill(30, 25, 45, 190);
                    p.circle(0, 0, this.w * 0.65);
                p.pop();

                // Гравитационные кольца
                p.push();
                    p.noFill();
                    p.stroke(60, 50, 90, 160);
                    p.strokeWeight(1.8);
                    p.circle(0, 0, ringA);
                    p.stroke(90, 70, 130, 120);
                    p.strokeWeight(1.2);
                    p.circle(0, 0, ringB);
                p.pop();

                // Слегка "крутящаяся" дуга
                p.push();
                    p.noFill();
                    p.stroke(120, 90, 170, 140);
                    p.strokeWeight(2);
                    p.beginShape();
                    for (let a = 0; a <= Math.PI * 2; a += Math.PI / 10) {
                        const wobble = Math.sin(a * 3 + swirl) * 2;
                        const r = this.w * 0.9 + wobble;
                        p.vertex(Math.cos(a) * r, Math.sin(a) * r);
                    }
                    p.endShape(p.CLOSE);
                p.pop();

                // Импульс по зоне при выстреле
                if (this.pulseAnim > 0) {
                    const tPulse = p.constrain(this.pulseAnim / 0.75, 0, 1);
                    const progress = 1 - tPulse;
                    p.push();
                        p.noFill();
                        p.stroke(40, 30, 70, 200 * tPulse);
                        p.strokeWeight(3 * tPulse + 1);
                        p.circle(0, 0, this.range * progress * 2);
                    p.pop();
                    this.pulseAnim = Math.max(0, this.pulseAnim - p.deltaTime / 1000);
                }
            }

            if (this.type.id === "orbital") {
                const t = p.frameCount * 0.05 + this.singularityPhase;
                const orbitR = this.w * 0.85;
                const pulse = 0.5 + Math.sin(t) * 0.5;

                // энергетические кольца
                p.push();
                    p.noFill();
                    p.stroke(170, 210, 255, 150);
                    p.strokeWeight(2);
                    p.circle(0, 0, this.w * (1.1 + pulse * 0.2));
                    p.stroke(120, 170, 230, 110);
                    p.strokeWeight(1.2);
                    p.circle(0, 0, this.w * (1.6 - pulse * 0.15));
                p.pop();

                // спутники
                p.push();
                    p.noStroke();
                    const ax = Math.cos(t) * orbitR;
                    const ay = Math.sin(t) * orbitR;
                    p.fill(210, 230, 255, 220);
                    p.circle(ax, ay, 5);
                    p.fill(150, 200, 255, 180);
                    p.circle(-ax, -ay, 4);
                p.pop();

                // глобальный импульс
                if (this.pulseAnim > 0) {
                    const tPulse = p.constrain(this.pulseAnim / 0.85, 0, 1);
                    const progress = 1 - tPulse;
                    const maxR = Math.hypot(p.width, p.height);
                    p.push();
                        p.noFill();
                        p.stroke(170, 210, 255, 200 * tPulse);
                        p.strokeWeight(4 * tPulse + 1);
                        p.circle(0, 0, maxR * progress * 2);
                    p.pop();
                    this.pulseAnim = Math.max(0, this.pulseAnim - p.deltaTime / 1000);
                }
            }

            p.push();
                // вращаем вокруг центра башни
                // при зеркале отражаем и визуальный угол, чтобы башня "смотрела" в цель
                if (this.canRotate) {
                    const drawAngle = this.flipX ? -this.angle : this.angle;
                    p.rotate(drawAngle);
                }

                if (this.flipX)
                    p.scale(-1, 1);

                const cleaverSwordPose = this.type.id === "cleaver" && this.swordTexture?.[this.level - 1]
                    ? (this.cleaverSwordPoseVisual || this.getCleaverSwordPose())
                    : null;

                // текстура
                p.noStroke();
                p.texture(this.texture[this.level - 1]);

                p.rectMode(p.CENTER);

                // рисуем в (0,0) !
                p.rect(0, 0, this.w, this.h, 6);

                if (cleaverSwordPose) {
                    this.drawCleaverSword(cleaverSwordPose);
                }
                // if (this.type.id === "support") {

                //     const lvl = this.type.levels[this.level - 1];

                //     p.noFill();
                //     p.stroke(100, 255, 100, 80);
                //     p.strokeWeight(2);

                //     p.circle(0, 0, lvl.range * 2);
                // }

                if (this.type.id === "singularity") {
                    // Индикатор заряда (поверх текстуры)
                    const charge = p.constrain(this.singularityCharge || 0, 0, 1);
                    const glow = 0.6 + Math.sin(p.frameCount * 0.08 + this.singularityPhase) * 0.4;
                    p.push();
                        p.translate(0, 0, 2);
                        p.noFill();

                        const startA = -p.HALF_PI;
                        const segs = 12;
                        const segAngle = p.TWO_PI / segs;
                        const gap = segAngle * 0.25;
                        const fullSegs = Math.floor(charge * segs);
                        const partial = (charge * segs) - fullSegs;
                        const ringD = this.w * 1.55;

                        // темные сегменты фона
                        p.stroke(10, 8, 16, 220);
                        p.strokeWeight(4.8);
                        for (let i = 0; i < segs; i++) {
                            const a0 = startA + i * segAngle;
                            const a1 = a0 + segAngle - gap;
                            p.arc(0, 0, ringD, ringD, a0, a1);
                        }

                        // свечение заряда (красная гамма)
                        p.stroke(255, 120, 90, 90 * glow);
                        p.strokeWeight(7);
                        for (let i = 0; i < fullSegs; i++) {
                            const a0 = startA + i * segAngle;
                            const a1 = a0 + segAngle - gap;
                            p.arc(0, 0, ringD * 1.05, ringD * 1.05, a0, a1);
                        }
                        if (partial > 0 && fullSegs < segs) {
                            const a0 = startA + fullSegs * segAngle;
                            const a1 = a0 + (segAngle - gap) * partial;
                            p.arc(0, 0, ringD * 1.05, ringD * 1.05, a0, a1);
                        }

                        // яркий заряд (красная гамма)
                        p.stroke(255, 140, 110, 230 * glow);
                        p.strokeWeight(2.6);
                        for (let i = 0; i < fullSegs; i++) {
                            const a0 = startA + i * segAngle;
                            const a1 = a0 + segAngle - gap;
                            p.arc(0, 0, ringD, ringD, a0, a1);
                        }
                        if (partial > 0 && fullSegs < segs) {
                            const a0 = startA + fullSegs * segAngle;
                            const a1 = a0 + (segAngle - gap) * partial;
                            p.arc(0, 0, ringD, ringD, a0, a1);
                        }

                        // маркер на конце заряда (красная гамма)
                        const endA = startA + p.TWO_PI * charge;
                        const r = ringD / 2;
                        p.push();
                            p.rotate(endA);
                            p.noStroke();
                            p.fill(255, 170, 140, 230);
                            p.triangle(r + 6, 0, r - 2, 4, r - 2, -4);
                            p.fill(255, 120, 90, 120);
                            p.circle(r + 3, 0, 6);
                        p.pop();
                    p.pop();
                }
            p.pop();

            if (this.hasBuff) {
                drawStatusChevrons({
                    direction: "up",
                    color: [70, 220, 120],
                    glowColor: [190, 255, 210],
                    baseAlpha: 175,
                    pulseSpeed: 0.08
                });
            }

            if (this.jamTimer > 0) {
                drawStatusChevrons({
                    direction: "down",
                    color: [210, 40, 65],
                    glowColor: [255, 185, 195],
                    baseAlpha: 185,
                    pulseSpeed: 0.1
                });
            }

            // уровень (без поворота — отдельно)
            p.pop();


            // ---- Текст без вращения ----
            p.push();

                p.translate(
                    -p.width / 2 + this.x,
                    -p.height / 2 + this.y,
                    4
                );

                if (isHovered && this.type.id !== "singularity") {
                    drawHoverRing();
                }

                this.drawAttackReadinessBar();

                p.noStroke();
                p.fill(255);
                p.textAlign(p.CENTER);

                // p.text(
                //     `${this.level} Lvl`,
                //     0,
                //     this.h / 2 + 12
                // );

                // p.text(
                //     `fireRate ${this.fireRate} Lvl`,
                //     10,
                //     this.h / 2 + 32
                // );
                // p.text(
                //     `range ${this.range} Lvl`,
                //     10,
                //     this.h / 2 + 52
                // );

                p.textSize(11);
                p.fill(255, 230, 140);
                p.text(p.t("tower.instance_badge", { number: this.instanceNumber }), 0, -this.h / 2 - 14, this.w + 26, 16);

            p.pop();

          

           
        }

    }

    class Game {
        constructor() {
            this.fieldWidth = p.width;
            this.fieldHeight = p.height - BOTTOM_PANEL_HEIGHT;
            
            this.gridCount = 11;
            const usableW = FIELD_WIDTH - FIELD_PAD * 2;
            const usableH = this.fieldHeight - FIELD_PAD * 2;
            this.grid = Math.floor(
                Math.min(
                usableW / this.gridCount,
                usableH / this.gridCount
                )
            );
            
            // console.log(this.grid)
            this.cols = Math.floor(usableW / this.grid);
            this.rows = Math.floor(usableH / this.grid);
            this.fieldOffsetX = FIELD_PAD + Math.floor((usableW - this.cols * this.grid) / 2) + FIELD_SHIFT_X;
            this.fieldOffsetY = FIELD_PAD + Math.floor((usableH - this.rows * this.grid) / 2) + FIELD_SHIFT_Y;
            this.money = 0;
            this.lives = 0;
            this.maxLives = 0;
            this.wave = 0;
            this.mainCampaignWaves = 15;
            this.bossWaveInterval = 5;
            this.endGameUnitStartWave = this.mainCampaignWaves + 1;
            this.difficulty = "normal";
            this.difficultyProfile = p.DIFFICULTY_PRESETS.normal;
            this.simTime = 0;
            this.unitSpatialHash = new Map();
            this.unitSpatialCellSize = Math.max(48, this.grid * 2);
            this.activeAliveUnits = 0;
            this.activeBossSummonedUnits = 0;
            this.activeSummonPortals = 0;
            this.pendingUnitSpawns = [];
            this.specialBuildTiles = new Map();
            this.specialBuildTileSignature = "";
            this.specialBuildTileRadius = 2;
            this.specialBuildTileCounts = {
                easy: { positive: 5, negative: 2 },
                normal: { positive: 4, negative: 6 },
                hard: { positive: 3, negative: 8 }
            };
            this.buyablePositiveTileIds = ["damage_up", "range_up", "fire_rate_up", "gold_on_kill"];
            this.tileActionCosts = {
                clearNegative: 30,
                clearBlocked: 35,
                positive: {
                    damage_up: 30,
                    range_up: 30,
                    fire_rate_up: 30,
                    gold_on_kill: 30
                }
            };

            this.units = [];
            this.towers = [];
            this.projectiles = [];
            this.trioGroupSeq = 0;
            this.trioDownSeq = 0;
            this.trioSpawnPending = null;
            this.trioDownAnchors = {};
            this.trioEliteSpawned = new Set();
            this.trioFailedGroups = new Set();

            this.spawnAcc = 0;
            this.baseSpawnInterval = 0.9; // сек
            this.spawnInterval = this.baseSpawnInterval; // сек
            this.waveSpawnInvulnerability = 0.3; // сек, чтобы юнит успел корректно появиться до первого урона
            this.unitsToSpawn = 0;

            this.pathPresetDifficultyOrder = ["easy", "medium", "hard"];
            this.pathPresets = {
                easy: [
                  
                () => [
                    { x: this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                ],

               () => [
                { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 5 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 6 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 8 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
            ],

        

                () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
             
            () => [
                { x: this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                { x: 6 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                { x: 6 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                { x: 8 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                { x: 8 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                { x: 10 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                { x: 10 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: 7 * this.grid + this.grid / 2 },
            ],
              () => [
                { x: this.grid / 2, y: this.grid / 2 },
                { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: this.grid / 2 },
            ],
              () => [
                { x: this.grid / 2, y: this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 8 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 3 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                { x: 6 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
            ],
                () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                ],
               () => [
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 4 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                ]
                ],
                medium: [ 
                     () => [
                    { x: this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                ],  
                () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: this.grid / 2 },
                ],
               
                () => [
                    { x: this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                ],

          
                () => [
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 1.5 * this.grid },
                    { x: this.gridCount * this.grid + this.grid / 2, y: 1.5 * this.grid },
                    { x: this.gridCount * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: this.gridCount * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: this.gridCount * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: (this.gridCount - 1) * this.grid + this.grid / 2 },
                    { x: this.gridCount * this.grid + this.grid / 2, y: (this.gridCount - 1) * this.grid + this.grid / 2 },
                ],
             
                () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                ],

                () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                ],
            () => [
                { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: this.grid / 2, y: this.grid / 2 },
                { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                { x: 5 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
            ],  
            () => [
                { x: 4 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                { x: 4 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                { x: 8 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                { x: 8 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: this.grid / 2, y: this.grid / 2 },
                { x: this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
            ]
                ],
                hard: [
               
                            () => [
                { x: this.grid / 2, y: this.grid / 2 },
                { x: this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: this.grid / 2 },
                { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 11 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: this.gridCount * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: this.gridCount * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: (this.gridCount - 1) * this.grid + this.grid / 2 },
                    { x: this.gridCount * this.grid + this.grid / 2, y: (this.gridCount - 1) * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
               
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 5 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 10 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                ],
                () => [
                    { x: 11 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 8 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 4 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 3 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 5 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                ],
                      () => [
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                ],
                    () => [
                        { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                        { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                        { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                        { x: this.grid / 2, y: this.grid / 2 },
                        { x: 9 * this.grid + this.grid / 2, y: this.grid / 2 },
                        { x: 9 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                        { x: this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                        { x: this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                        { x: 7 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
                    ],
                    () => [
                        { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                        { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                        { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                        { x: 11 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                        { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                        { x: this.grid / 2, y: this.grid / 2 },
                        { x: this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                        { x: 6 * this.grid + this.grid / 2, y: 9 * this.grid + this.grid / 2 },
                        { x: 10 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                        { x: 10 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    ],
                    () => [
                    { x: 3 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 8 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: this.grid / 2 },
                    { x: this.grid / 2, y: 4 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 2 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 6 * this.grid + this.grid / 2, y: 6 * this.grid + this.grid / 2 },
                    { x: 7 * this.grid + this.grid / 2, y: 5 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                    { x: 9 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
                    { x: this.grid + this.grid / 2, y: 3 * this.grid + this.grid / 2 },
                ],
                () => [
    { x: 4 * this.grid + this.grid / 2, y: 4 * this.grid + this.grid / 2 },
    { x: 4 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
    { x: 8 * this.grid + this.grid / 2, y: 7 * this.grid + this.grid / 2 },
    { x: 8 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
    { x: 2 * this.grid + this.grid / 2, y: 2 * this.grid + this.grid / 2 },
    { x: 2 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
    { x: 11 * this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
    { x: 11 * this.grid + this.grid / 2, y: this.grid / 2 },
    { x: this.grid / 2, y: this.grid / 2 },
    { x: this.grid / 2, y: 10 * this.grid + this.grid / 2 },
    { x: this.grid + this.grid / 2, y: 10 * this.grid + this.grid / 2 },
]
                ]
            };

            this.path = null;
            this.pathForbidden = new Set();
            this.chosenPathDifficulty = null;
            this.chosenPathIndexInDifficulty = null;
            this.chosenPath = this.getRandomPathIndex();
            this.setLevelPath(this.chosenPath);

            this.buildMode = null; // null | { cx, cy, x, y, radius }
            this.upgradeMode = null;
            this.buildHoverIndex = -1;

            this.waveState = "prep"; // "prep" | "spawning" | "active" | "cleanup"
            this.prepTimer = 0;     // таймер автозапуска (опционально)
            this.autoStartWaveDelay = 15;
            this.cleanupTimer = 0;
            this.cleanupDuration = 0.9; // сек на завершение визуальных эффектов
            this.timeAcc = 0;
            this.waitingEndChoice = false;
            this.paused = false;
            this.endlessMode = false;
            this.endChoiceShown = false;
            this.waveIntroText = "";
            this.waveIntroTimer = 0;
            this.waveIntroDuration = 2.3;

            const bottomButtonLayout = (() => {
                const panelX = FIELD_WIDTH + 8;
                const panelW = p.width - panelX - 8;
                const panelPad = 10;
                const gap = 10;
                const cols = 2;
                const cardW = Math.floor((panelW - panelPad * 2 - gap) / cols);
                const leftX = panelX + panelPad;
                const rightX = leftX + cardW + gap;
                return { leftX, rightX, cardW };
            })();
            const waveBtnW = bottomButtonLayout.cardW;
            const waveBtnH = 50;
            console.log(waveBtnW, waveBtnH)
            const speedBtnH = 30;
            const speedAreaY = p.height - speedBtnH - 16;
            const waveBtnX = bottomButtonLayout.leftX;
            const waveBtnY = speedAreaY - waveBtnH - 12;

            this.waveButton = new Buttons(
                    'startWave',
                    [p.t("button.go"), 0, 0, 22, p.variables.buttStartWave, p.variables.buttStartWaveHov],
                    //p.width / 2 - 150,
                   // p.height - 110,
                    waveBtnX,
                    waveBtnY,
                    10,
                    waveBtnW,
                    waveBtnH,
                    1,
                    'wave',
                    () => {
                        if (p.game && p.game.waveState === "prep") {
                            p.game.startWave();
                        }
                    }
                );
            p.buttonsArr.push(this.waveButton);

            this.pauseButton = new Buttons(
                    'pause',
                    [p.t("button.pause"), 0, 0, 22, p.variables.buttStartWave, p.variables.buttStartWaveHov],
                    waveBtnX,
                    waveBtnY,
                    10,
                    waveBtnW,
                    waveBtnH,
                    1,
                    'pause',
                    () => {
                        if (!p.game) return;
                        if (p.game.waveState === "prep") return;
                        p.game.togglePause();
                    }
                );
            p.buttonsArr.push(this.pauseButton);
            this.updatePauseButtonLabel();

            this.towerStatsButton = new Buttons(
                    'towerStats',
                    [p.t("button.stats"), 0, 0, 18, p.variables.buttStartWave, p.variables.buttStartWaveHov],
                    bottomButtonLayout.rightX,
                    waveBtnY,
                    10,
                    waveBtnW,
                    waveBtnH,
                    1,
                    'stats',
                    () => {
                        if (!p.game) return;
                        p.game.towerDamagePanelOpen = !p.game.towerDamagePanelOpen;
                        p.game._towerDamagePanelDirty = true;
                        p.game._towerDamagePanelNextRefresh = 0;
                    }
                );
            p.buttonsArr.push(this.towerStatsButton);

            this.goldPopups = [];
            this.baseDamagePopups = [];
            this.critPopups = [];
            this.lootChests = [];
            this.upgradePopups = [];
            this.baseHitFx = 0;
            this.baseHealAmount = 10;
            this.baseHealBaseCost = 10;
            this.baseHealCostStep = 5;
            this.baseHealCount = 0;

            this.fieldWidth = FIELD_WIDTH;
            this.fieldHeight = p.height - BOTTOM_PANEL_HEIGHT;
            this.selectedTowerType = null; // 'basic' | 'sniper' | ...
            this.waveQueue = [];

            this.towerLevelCap = 3;
            this.legendaryUnlockWave = 3;
            this.towerUnlocks = {};
            this.towerMaxLevels = {};
            this.chosenLegendaryId = null;
            this._unlockedTowerKeys = null;
            this._towerCardCache = new Map();
            this._towerCardCacheSize = "";
            this._towerCostCache = new Map();
            this._towerPanelGfx = null;
            this._towerPanelTextGfx = null;
            this._towerPanelLayoutKey = "";
            this._towerPanelLayout = null;
            this._towerPanelDirty = true;
            this._towerPanelState = null;
            this._towerPanelTextDirty = true;
            this._towerPanelTextState = null;
            this._towerProgressVersion = 0;
            this._towerBuildTooltipCache = new Map();
            this._towerStatsPanelGfx = null;
            this._towerStatsPanelState = null;
            this._towerStatsPanelNextRefresh = 0;
            this._fieldStaticGfx = null;
            this._fieldGridGfx = null;
            this._fieldLayerKey = "";

            this.damageClock = 0;
            this.waveDamageClock = 0;
            this.lastWaveDamageDuration = 0;
            this.aliveUnitHpRatioAvg = 1;
            this.towerDamagePanelOpen = false;
            this.towerDamagePanelMode = "total";
            this.towerInstanceCounters = {};
            this.lastEndlessBossId = null;
            this._towerDamagePanelGfx = null;
            this._towerDamagePanelDirty = true;
            this._towerDamagePanelNextRefresh = 0;

            //ТЕСТ
            this.perfMonitorEnabled = true;
            this.perfStats = {
                fps: 0,
                frameMs: 0,
                logicSteps: 0,
                sections: {},
                accum: {
                    startedAt: (globalThis.performance?.now?.() ?? Date.now()),
                    frames: 0,
                    frameMs: 0,
                    logicSteps: 0,
                    sections: {}
                }
            };
            this._perfFrameStart = 0;
            this._perfLogicStepsFrame = 0;
        }

        getWaveButtonPanelPos() {
            const panelX = FIELD_WIDTH + 8;
            const btnH = this.waveButton?.h ?? 50;
            const speedBtnH = 30;
            const speedAreaY = p.height - speedBtnH - 16;
            const panelW = p.width - panelX - 8;
            const panelPad = 10;
            const gap = 10;
            const cols = 2;
            const btnW = this.waveButton?.w ?? 100;
            const cardW = Math.floor((panelW - panelPad * 2 - gap) / cols);
            const leftX = panelX + panelPad;
            const rightX = leftX + cardW + gap;
            const y = speedAreaY - btnH - 12;
            return {
                x: leftX,
                y,
                statsX: rightX,
                columnW: cardW,
                buttonW: btnW
            };
        }

        canAutoStartNextWave() {
            return this.waveState === "prep" && this.wave >= 1 && !this.waitingEndChoice && !p.gameEnded;
        }

        areSpeedButtonsVisible() {
            return this.waveState !== "prep" && this.waveState !== "cleanup" && !this.waitingEndChoice && !p.gameEnded;
        }

        getSpeedButtonsLayout() {
            const btnW = 50;
            const btnH = 30;
            const speedGap = 8;
            const speeds = [0.5, 1, 2, 3];
            const totalSpeedW = btnW * speeds.length + speedGap * (speeds.length - 1);
            const baseX = FIELD_WIDTH + Math.floor((UI_WIDTH - totalSpeedW) / 2);
            const baseY = p.height - btnH - 16;
            return { btnW, btnH, speedGap, totalSpeedW, baseX, baseY, speeds };
        }

        getWaveAutoStartRemaining() {
            if (!this.canAutoStartNextWave()) return null;
            return Math.max(0, this.autoStartWaveDelay - this.prepTimer);
        }

        playWaveStartSound() {
            const isBossWave = this.isBossWave?.(this.wave);
            const waveStartSound = isBossWave
                ? (p.variables.soundBossWaveStart || p.variables.soundWaveStart || p.variables.soundBound)
                : (p.variables.soundWaveStart || p.variables.soundBound);
            this.playTempSound(waveStartSound);
        }

        playChestSpawnSound() {
            this.playTempSound(p.variables.soundChestSpawn || p.variables.soundBound);
        }

        playChestPickupSound() {
            this.playTempSound(p.variables.soundChestPickup || p.variables.soundChestSpawn || p.variables.soundBound);
        }

        playPortalSpawnSound() {
            this.playTempSound(p.variables.soundPortalSpawn || p.variables.soundBound);
        }

        spawnGoldPopup(x, y, value) {
            const nearbyCount = this.goldPopups.filter(popup => {
                if (!popup || popup.dead) return false;
                return Math.abs((popup.x ?? 0) - x) < 28 && Math.abs((popup.y ?? 0) - y) < 28;
            }).length;
            const popup = new GoldPopup(x, y - nearbyCount * 16, value);
            this.goldPopups.push(popup);
            return popup;
        }

        playBaseHealSound() {
            this.playTempSound(p.variables.soundBaseHeal || p.variables.soundBound);
        }

        playTowerBuildSound() {
            this.playTempSound(p.variables.soundTowerBuild || p.variables.soundBound);
        }

        playTowerUpgradeSound(upgradeStep = 1) {
            const clip = upgradeStep >= 2
                ? (p.variables.soundTowerUpgrade2 || p.variables.soundTowerUpgrade1 || p.variables.soundBound)
                : (p.variables.soundTowerUpgrade1 || p.variables.soundBound);
            this.playTempSound(clip);
        }

        playTowerSellSound() {
            this.playTempSound(p.variables.soundTowerSell || p.variables.soundBound);
        }

        playPauseSound(isPaused) {
            const clip = isPaused
                ? (p.variables.soundPauseOn || p.variables.soundPauseToggle || p.variables.soundBound)
                : (p.variables.soundPauseOff || p.variables.soundPauseToggle || p.variables.soundBound);
            this.playTempSound(clip);
        }

        playLoseMusic() {
            const music = p.variables.gameMusic;
            const loseMusic = p.variables.gameLoseMusic;

            if (music) {
                try {
                    music.pause();
                } catch (e) {}
            }

            if (!loseMusic) return;
            p.menu?.syncLoseSoundVolume?.();

            try {
                loseMusic.currentTime = 0;
                loseMusic.play();
            } catch (e) {}
        }

        playTempSound(clip) {
            if (!clip) return;

            const baseVol = p.variables.soundBound?.volume;
            if (typeof baseVol === "number") {
                clip.volume = baseVol;
            }

            try {
                clip.currentTime = 0;
                clip.play();
            } catch (e) {}
        }

        triggerWaveIntro() {
            this.waveIntroText = p.t("wave.intro", { wave: this.wave });
            this.waveIntroTimer = this.waveIntroDuration;
        }

        drawWaveIntroOverlay() {
            if (!this.waveIntroText || this.waveIntroTimer <= 0) return;

            const progress = 1 - this.waveIntroTimer / Math.max(0.001, this.waveIntroDuration);
            const fadeIn = p.constrain(progress / 0.18, 0, 1);
            const fadeOut = p.constrain((1 - progress) / 0.45, 0, 1);
            const alpha = 255 * Math.min(fadeIn, fadeOut);
            const lift = p.lerp(16, -10, progress);
            const scale = p.lerp(1.08, 1, progress);
            const cx = p.width / 2;
            const cy = p.height / 2 - 36 + lift;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 30);
                p.textAlign(p.CENTER, p.CENTER);
                p.textFont(p.variables.textFontFontick);
                p.textSize(48 * scale);
                p.textLeading(48 * scale);
                p.stroke(15, 12, 8, alpha * 0.55);
                p.strokeWeight(6);
                p.fill(255, 244, 214, alpha);
                p.text(this.waveIntroText, cx - 180, cy - 36, 360, 72);

                p.noStroke();
                p.fill(255, 214, 122, alpha * 0.9);
                p.rectMode(p.CENTER);
                p.rect(cx, cy + 42, 140 * (1 - progress * 0.25), 4, 4);
            p.pop();
        }

        drawWavePrepIndicator() {
            if (this.waveState !== "prep") return;
            if (!this.canAutoStartNextWave()) return;

            const remaining = this.getWaveAutoStartRemaining();
            if (remaining === null) return;

            const progress = p.constrain(this.prepTimer / Math.max(0.001, this.autoStartWaveDelay), 0, 1);
            const speedLayout = this.getSpeedButtonsLayout();
            const screenX = speedLayout.baseX + speedLayout.totalSpeedW / 2;
            const barW = Math.max(96, speedLayout.totalSpeedW);
            const barH = 6;
            const barY = speedLayout.baseY + 16;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 25);
                p.textAlign(p.CENTER, p.BOTTOM);
                p.textSize(12);
                p.fill(225, 236, 255, 230);
                p.noStroke();
                p.text(p.t("wave.auto_start", { seconds: Math.ceil(remaining) }), screenX, barY - 6);

                p.fill(18, 24, 38, 210);
                p.rectMode(p.CENTER);
                p.rect(screenX, barY + 3, barW, barH, 4);

                p.fill(255, 210, 110, 235);
                p.rectMode(p.CORNER);
                p.rect(screenX - barW / 2, barY, barW * progress, barH, 4);
            p.pop();
        }

        getNextTowerInstanceNumber(typeId) {
            const current = this.towerInstanceCounters[typeId] || 0;
            const next = current + 1;
            this.towerInstanceCounters[typeId] = next;
            this._towerDamagePanelDirty = true;
            return next;
        }

        getTowerWaveStatsDuration() {
            if (this.waveState === "prep") {
                return Math.max(0, this.lastWaveDamageDuration || 0);
            }
            return Math.max(0, this.waveDamageClock || 0);
        }

        resetWaveDamageStats() {
            this.waveDamageClock = 0;
            this.lastWaveDamageDuration = 0;
            for (const tower of this.towers) {
                if (tower?.resetWaveDamageStats) {
                    tower.resetWaveDamageStats();
                }
            }
            this._towerDamagePanelDirty = true;
            this._towerDamagePanelNextRefresh = 0;
        }

        getTowerDamageRows(mode = this.towerDamagePanelMode || "total") {
            const isWaveMode = mode === "wave";
            return this.towers
                .map(tower => ({
                    tower,
                    name: tower.displayName,
                    totalDamage: isWaveMode ? (tower.waveDamageDealt || 0) : (tower.totalDamageDealt || 0)
                }))
                .filter(entry => entry.totalDamage > 0)
                .sort((a, b) => {
                    if (b.totalDamage !== a.totalDamage) {
                        return b.totalDamage - a.totalDamage;
                    }
                    return a.name.localeCompare(b.name, p.lang === "en" ? "en" : "ru");
                });
        }

        getTowerDamagePanelMetrics() {
            const panelX = FIELD_WIDTH + 12;
            const panelY = 18;
            const panelW = p.width - panelX - 12;
            const titleH = 34;
            const tabsH = 28;
            const headH = titleH + tabsH;
            const rowH = 24;
            const pad = 10;
            const maxRows = Math.max(4, Math.floor((p.height - panelY - 120) / rowH) - 2);
            const closeSize = 20;
            const tabY = titleH + 4;
            const tabW = 86;
            const tabGap = 8;
            const totalTabsW = tabW * 2 + tabGap;
            const tabStartX = Math.floor((panelW - totalTabsW) / 2);
            const closeButton = {
                x: panelW - pad - closeSize,
                y: Math.floor((titleH - closeSize) / 2),
                w: closeSize,
                h: closeSize
            };
            const tabs = [
                { id: "wave", label: p.t("panel.wave"), x: tabStartX, y: tabY, w: tabW, h: 22 },
                { id: "total", label: p.t("panel.total"), x: tabStartX + tabW + tabGap, y: tabY, w: tabW, h: 22 }
            ];

            return { panelX, panelY, panelW, titleH, tabH: tabsH, headH, rowH, pad, maxRows, tabs, closeButton };
        }

        getTowerListAccentColor(tower) {
            const type = tower?.type;
            if (!type) return [190, 210, 235];
            if (type.legendary) return [255, 205, 120];

            const accentIds = new Set(["slow", "burn", "pulse", "support"]);
            if (accentIds.has(type.id)) return [90, 170, 255];

            return [190, 210, 235];
        }

        getTowerAttackRateInfo(type, levelData, fireRateMult = 1) {
            if (!type || !levelData) return null;

            const burstRate = Math.max(0, (levelData.fireRate ?? 0) * fireRateMult);
            if (type.id === "support" || type.id === "singularity") {
                return null;
            }

            if (type.id === "cat_revolver") {
                const magazine = Math.max(0, levelData.magazine ?? 0);
                const reloadTime = Math.max(0, levelData.reloadTime ?? 0);
                if (burstRate <= 0 || magazine <= 0) {
                    return { aps: 0, burst: burstRate, interval: 0, burstInterval: 0, isBurstSplit: true };
                }

                const cycleTime = magazine / burstRate + reloadTime;
                const aps = cycleTime > 0 ? magazine / cycleTime : 0;
                return {
                    aps,
                    burst: burstRate,
                    interval: aps > 0 ? 1 / aps : 0,
                    burstInterval: burstRate > 0 ? 1 / burstRate : 0,
                    isBurstSplit: true
                };
            }

            return {
                aps: burstRate,
                burst: burstRate,
                interval: burstRate > 0 ? 1 / burstRate : 0,
                burstInterval: burstRate > 0 ? 1 / burstRate : 0,
                isBurstSplit: false
            };
        }

        formatAttackRateText(rateInfo, options = {}) {
            if (!rateInfo) return "-";

            const aps = rateInfo.aps ?? 0;
            const interval = rateInfo.interval ?? 0;
            const showBurst = options.showBurst && rateInfo.isBurstSplit;
            const formatInterval = (value) => {
                if (!(value > 0)) return "-";
                const precision = value < 1 ? 2 : 1;
                return `${Number(value.toFixed(precision))}${p.t("abbr.seconds")}`;
            };

            const baseText = aps > 0 ? formatInterval(interval) : "-";

            if (!showBurst) return baseText;

            const burst = rateInfo.burst ?? 0;
            const burstInterval = rateInfo.burstInterval ?? 0;
            const burstText = burst > 0 ? formatInterval(burstInterval) : "-";

            return p.t("stat.burst", { value: burstText });
        }

        formatChargeRate(value) {
            return `${value}%/${p.t("abbr.seconds")}`;
        }

        formatSlowValue(percent, duration = null) {
            if (duration === undefined || duration === null) {
                return `${percent}%`;
            }
            const seconds = `${duration}${p.t("abbr.seconds")}`;
            return p.lang === "ru"
                ? `${percent}% на ${seconds}`
                : `${percent}% for ${seconds}`;
        }

        formatBurnHealCutValue(stacks = 5) {
            const safeStacks = Math.max(1, Math.round(Number(stacks) || 0));
            return p.t("stat.heal_cut", {
                value: 15,
                stacks: safeStacks
            });
        }

        formatTowerDamageText(type, levelData, damageValue) {
            const roundedDamage = Math.round((damageValue ?? 0) * 100) / 100;
            if (type?.id === "multishot") {
                return `${roundedDamage}`;
            }
            if ((levelData?.projectileCount ?? 1) > 1) {
                const projectileCount = Math.max(1, levelData?.projectileCount ?? 1);
                return `${roundedDamage} x${projectileCount}`;
            }
            return `${roundedDamage}`;
        }

        formatCritValue(chance, mult) {
            return `${Math.round(chance * 100)}% x${(mult ?? 1).toFixed(1)}`;
        }

        formatChanceValue(chance) {
            return `${Math.round(Math.max(0, chance || 0) * 100)}%`;
        }

        buildTileAdjustedSegments(baseValue, adjustedValue, formatter, options = {}) {
            if (typeof formatter !== "function") return null;

            const base = Number(baseValue);
            const adjusted = Number(adjustedValue);
            if (!Number.isFinite(base) || !Number.isFinite(adjusted)) return null;

            const diff = adjusted - base;
            if (Math.abs(diff) < 0.0001) return null;

            const goodWhenNegative = !!options.goodWhenNegative;
            const isPositive = diff > 0;
            const benefit = goodWhenNegative ? !isPositive : isPositive;
            const accent = benefit ? [120, 235, 140] : [255, 120, 120];

            return [
                { text: formatter(base), color: [245, 248, 255] },
                { text: " ", color: [245, 248, 255] },
                { text: isPositive ? "+" : "-", color: accent },
                { text: formatter(Math.abs(diff)), color: accent }
            ];
        }

        buildTileAdjustedLine(baseValue, adjustedValue, nextValue, formatter, options = {}) {
            const segments = this.buildTileAdjustedSegments(baseValue, adjustedValue, formatter, options);
            const currentText = options.currentText ?? `${formatter(adjustedValue)}`;
            const nextText = options.nextText ?? (
                nextValue !== undefined && nextValue !== null
                    ? `${formatter(nextValue)}`
                    : null
            );
            if (!segments) {
                if (!nextText) {
                    return { text: currentText };
                }
                return { text: `${currentText} -> ${nextText}` };
            }

            if (nextText) {
                segments.push(
                    { text: " -> ", color: [210, 220, 235] },
                    { text: nextText, color: [245, 248, 255] }
                );
            }

            return { segments };
        }

        getTowerSpecialBuildTileStatLines(tower) {
            const tile = tower?.specialBuildTile;
            if (!tile) return [];

            const formatSignedPercent = (mult) => {
                const pct = Math.round(((mult ?? 1) - 1) * 100);
                return pct > 0 ? `+${pct}%` : `${pct}%`;
            };

            const lines = [];

            if (Number.isFinite(tile.damageMult) && tile.damageMult !== 1) {
                lines.push({
                    icon: p.icons.damage,
                    text: p.t("stat.tile_effect", {
                        label: tile.label || tile.id,
                        value: p.t("stat.tile_damage", { value: formatSignedPercent(tile.damageMult) })
                    }),
                    tone: tile.kind === "negative" ? [255, 120, 120] : [140, 235, 150]
                });
                return lines;
            }

            if (Number.isFinite(tile.rangeMult) && tile.rangeMult !== 1) {
                lines.push({
                    icon: p.icons.range,
                    text: p.t("stat.tile_effect", {
                        label: tile.label || tile.id,
                        value: p.t("stat.tile_range", { value: formatSignedPercent(tile.rangeMult) })
                    }),
                    tone: tile.kind === "negative" ? [255, 140, 120] : [120, 210, 255]
                });
                return lines;
            }

            if (Number.isFinite(tile.fireRateMult) && tile.fireRateMult !== 1) {
                lines.push({
                    icon: p.icons.fireRate,
                    text: p.t("stat.tile_effect", {
                        label: tile.label || tile.id,
                        value: p.t("stat.tile_fire_rate", { value: formatSignedPercent(tile.fireRateMult) })
                    }),
                    tone: tile.kind === "negative" ? [255, 135, 170] : [150, 235, 170]
                });
                return lines;
            }

            if (Number.isFinite(tile.killGoldBonus) && tile.killGoldBonus > 0) {
                lines.push({
                    icon: p.icons.gold,
                    text: p.t("stat.tile_effect", {
                        label: tile.label || tile.id,
                        value: p.t("stat.tile_gold", { value: Math.round(tile.killGoldBonus) })
                    }),
                    tone: [255, 215, 120]
                });
                lines.push({
                    icon: p.icons.gold,
                    text: p.t("stat.tile_gold_earned", {
                        value: Math.round(tile.goldEarned ?? 0)
                    }),
                    tone: [255, 232, 160]
                });
                return lines;
            }

            return lines;
        }

        getPerfNow() {
            return globalThis.performance?.now?.() ?? Date.now();
        }

        resetPerfStats() {
            const now = this.getPerfNow();
            this.perfStats.fps = 0;
            this.perfStats.frameMs = 0;
            this.perfStats.logicSteps = 0;
            this.perfStats.sections = {};
            this.perfStats.accum = {
                startedAt: now,
                frames: 0,
                frameMs: 0,
                logicSteps: 0,
                sections: {}
            };
            this._perfFrameStart = 0;
            this._perfLogicStepsFrame = 0;
        }

        beginPerfFrame() {
            if (!this.perfMonitorEnabled) return;
            this._perfFrameStart = this.getPerfNow();
            this._perfLogicStepsFrame = 0;
        }

        notePerfLogicStep() {
            if (!this.perfMonitorEnabled) return;
            this._perfLogicStepsFrame += 1;
        }

        addPerfSample(name, elapsedMs, count = 1) {
            if (!this.perfMonitorEnabled) return;
            const safeElapsed = Math.max(0, Number(elapsedMs) || 0);
            const section = this.perfStats.accum.sections[name] || { ms: 0, count: 0 };
            section.ms += safeElapsed;
            section.count += count;
            this.perfStats.accum.sections[name] = section;
        }

        endPerfFrame() {
            if (!this.perfMonitorEnabled || !this._perfFrameStart) return;

            const now = this.getPerfNow();
            const frameMs = Math.max(0, now - this._perfFrameStart);
            const accum = this.perfStats.accum;
            accum.frames += 1;
            accum.frameMs += frameMs;
            accum.logicSteps += this._perfLogicStepsFrame;

            const elapsed = now - accum.startedAt;
            if (elapsed >= 500) {
                const frames = Math.max(1, accum.frames);
                this.perfStats.fps = frames * 1000 / Math.max(1, elapsed);
                this.perfStats.frameMs = accum.frameMs / frames;
                this.perfStats.logicSteps = accum.logicSteps / frames;

                const nextSections = {};
                for (const [key, value] of Object.entries(accum.sections)) {
                    nextSections[key] = {
                        ms: value.ms / frames,
                        count: value.count / frames
                    };
                }
                this.perfStats.sections = nextSections;

                accum.startedAt = now;
                accum.frames = 0;
                accum.frameMs = 0;
                accum.logicSteps = 0;
                accum.sections = {};
            }
        }

        drawPerfOverlay() {
            if (!this.perfMonitorEnabled) return;

            const stats = this.perfStats;
            const lines = [
                `FPS ${stats.fps.toFixed(1)}`,
                `Frame ${stats.frameMs.toFixed(2)}ms`
            ];

            const x = 12;
            const y = 12;
            const pad = 8;
            const rowH = 16;
            const w = 132;
            const h = pad * 2 + lines.length * rowH;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 9);
                p.noStroke();
                p.fill(12, 16, 26, 205);
                p.rect(x, y, w, h, 8);
                p.fill(220, 235, 255);
                p.textAlign(p.LEFT, p.TOP);
                p.textSize(11);
                lines.forEach((line, index) => {
                    p.text(line, x + pad, y + pad + index * rowH);
                });
            p.pop();
        }

        positionWaveButton() {
            if (!this.waveButton && !this.pauseButton && !this.towerStatsButton) return;
            const pos = this.getWaveButtonPanelPos();
            if (this.waveButton) {
                this.waveButton.x = pos.x + this.waveButton.w / 2 - p.width / 2;
                this.waveButton.y = pos.y + this.waveButton.h / 2 - p.height / 2;
            }
            if (this.pauseButton) {
                this.pauseButton.x = pos.x + this.pauseButton.w / 2 - p.width / 2;
                this.pauseButton.y = pos.y + this.pauseButton.h / 2 - p.height / 2;
            }
            if (this.towerStatsButton) {
                const statsLeft = pos.statsX ?? (pos.x + (this.waveButton?.w || 100) + 10);
                this.towerStatsButton.x = statsLeft + this.towerStatsButton.w / 2 - p.width / 2;
                this.towerStatsButton.y = pos.y + this.towerStatsButton.h / 2 - p.height / 2;
            }
        }

        getPathPresetEntries() {
            const order = this.pathPresetDifficultyOrder || ["easy", "medium", "hard"];
            const entries = [];

            for (const difficulty of order) {
                const presets = this.pathPresets?.[difficulty] || [];
                for (let i = 0; i < presets.length; i++) {
                    entries.push({
                        difficulty,
                        difficultyIndex: i + 1,
                        preset: presets[i]
                    });
                }
            }

            return entries;
        }

        getPathDifficultyKeyForGameDifficulty(diff = this.difficulty) {
            if (diff === "easy") return "easy";
            if (diff === "hard") return "hard";
            return "medium";
        }

        getPathPresetsForDifficulty(difficulty = null) {
            const key = difficulty || this.getPathDifficultyKeyForGameDifficulty();
            return this.pathPresets?.[key] || [];
        }

        getPathPresetCount() {
            return this.getPathPresetEntries().length;
        }

        getPathPresetEntry(level = 1) {
            const entries = this.getPathPresetEntries();
            if (entries.length === 0) return null;

            const safeLevel = p.constrain(level || 1, 1, entries.length);
            return {
                globalIndex: safeLevel,
                ...entries[safeLevel - 1]
            };
        }

        getPathPresetEntryByDifficulty(difficulty, index = 1) {
            const presets = this.getPathPresetsForDifficulty(difficulty);
            if (presets.length === 0) return null;

            const safeIndex = p.constrain(index || 1, 1, presets.length);
            const globalEntries = this.getPathPresetEntries();
            const globalIndex = globalEntries.findIndex(
                (entry) => entry.difficulty === difficulty && entry.difficultyIndex === safeIndex
            );

            return {
                difficulty,
                difficultyIndex: safeIndex,
                preset: presets[safeIndex - 1],
                globalIndex: globalIndex >= 0 ? globalIndex + 1 : 1
            };
        }

        setLevelPath(level = 1) {
            const presetEntry = this.getPathPresetEntry(level);
            if (!presetEntry) return;

            this.chosenPath = presetEntry.globalIndex;
            this.chosenPathDifficulty = presetEntry.difficulty;
            this.chosenPathIndexInDifficulty = presetEntry.difficultyIndex;

            const points = presetEntry.preset();
            const ox = this.fieldOffsetX || 0;
            const oy = this.fieldOffsetY || 0;
            const shifted = points.map(pt => ({ x: pt.x + ox, y: pt.y + oy }));
            this.path = new Path(shifted);
            this.pathForbidden = this.buildPathForbiddenSet(this.path);
            this.rebuildFieldLayers();

            this.positionWaveButton();
        }

        setLevelPathByDifficulty(difficulty, index = 1) {
            const presetEntry = this.getPathPresetEntryByDifficulty(difficulty, index);
            if (!presetEntry) return false;
            this.setLevelPath(presetEntry.globalIndex);
            return true;
        }

        getFieldLayerKey() {
            return [
                FIELD_WIDTH,
                this.fieldHeight,
                this.grid,
                this.cols,
                this.rows,
                this.fieldOffsetX,
                this.fieldOffsetY,
                this.chosenPath,
                this.specialBuildTileSignature || ""
            ].join("|");
        }

        updateSpecialBuildTileSignature() {
            const entries = Array.from(this.specialBuildTiles.values())
                .map(tile => `${tile.cx},${tile.cy},${tile.id}`)
                .sort();
            this.specialBuildTileSignature = entries.join("|");
        }

        getRoadsideBuildCellCandidates(maxDistance = this.specialBuildTileRadius || 2) {
            const pathCells = this.collectPathCells();
            const candidates = new Map();

            for (const pathCell of pathCells) {
                for (let dx = -maxDistance; dx <= maxDistance; dx++) {
                    for (let dy = -maxDistance; dy <= maxDistance; dy++) {
                        if (dx === 0 && dy === 0) continue;
                        if (Math.max(Math.abs(dx), Math.abs(dy)) > maxDistance) continue;

                        const cx = pathCell.cx + dx;
                        const cy = pathCell.cy + dy;
                        if (!this.isCellFreeForTower(cx, cy)) continue;

                        const key = this.cellKey(cx, cy);
                        if (!candidates.has(key)) {
                            candidates.set(key, { cx, cy });
                        }
                    }
                }
            }

            return Array.from(candidates.values());
        }

        pickSpecialBuildTileCells(pool, count = 0) {
            const candidates = [...pool];
            for (let i = candidates.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
            }

            const selected = [];
            const minSpacing = 2;

            for (const candidate of candidates) {
                if (selected.length >= count) break;
                const tooClose = selected.some(existing =>
                    Math.max(Math.abs(existing.cx - candidate.cx), Math.abs(existing.cy - candidate.cy)) < minSpacing
                );
                if (tooClose) continue;
                selected.push(candidate);
            }

            if (selected.length < count) {
                for (const candidate of candidates) {
                    if (selected.length >= count) break;
                    const exists = selected.some(existing => existing.cx === candidate.cx && existing.cy === candidate.cy);
                    if (!exists) {
                        selected.push(candidate);
                    }
                }
            }

            return selected;
        }

        generateSpecialBuildTiles() {
            this.specialBuildTiles.clear();

            const counts = this.specialBuildTileCounts?.[this.difficulty] || this.specialBuildTileCounts.normal;
            const positiveCount = Math.max(0, counts?.positive ?? 0);
            const negativeCount = Math.max(0, counts?.negative ?? 0);
            const totalCount = positiveCount + negativeCount;

            if (totalCount <= 0) {
                this.updateSpecialBuildTileSignature();
                return;
            }

            const candidates = this.getRoadsideBuildCellCandidates();
            if (candidates.length <= 0) {
                this.updateSpecialBuildTileSignature();
                return;
            }

            const chosenCells = this.pickSpecialBuildTileCells(candidates, Math.min(totalCount, candidates.length));
            const positivePool = [
                p.BUILD_SPECIAL_TILE_TYPES.damage_up,
                p.BUILD_SPECIAL_TILE_TYPES.range_up,
                p.BUILD_SPECIAL_TILE_TYPES.fire_rate_up,
                p.BUILD_SPECIAL_TILE_TYPES.gold_on_kill
            ].filter(Boolean);
            const negativePool = [
                p.BUILD_SPECIAL_TILE_TYPES.damage_down,
                p.BUILD_SPECIAL_TILE_TYPES.range_down,
                p.BUILD_SPECIAL_TILE_TYPES.fire_rate_down,
                p.BUILD_SPECIAL_TILE_TYPES.cell_debuff
            ].filter(Boolean);

            for (let i = 0; i < chosenCells.length; i++) {
                const cell = chosenCells[i];
                const effectPool = i < positiveCount ? positivePool : negativePool;
                if (effectPool.length <= 0) continue;

                const effect = effectPool[Math.floor(Math.random() * effectPool.length)];
                if (!effect) continue;

                const pos = this.cellCenter(cell.cx, cell.cy);
                this.specialBuildTiles.set(this.cellKey(cell.cx, cell.cy), {
                    ...effect,
                    goldEarned: 0,
                    cx: cell.cx,
                    cy: cell.cy,
                    x: pos.x,
                    y: pos.y
                });
            }

            this.updateSpecialBuildTileSignature();
        }

        getSpecialBuildTile(cx, cy) {
            return this.specialBuildTiles.get(this.cellKey(cx, cy)) || null;
        }

        collectPathCells(path = this.path) {
            if (!path?.points?.length) return [];

            const rasterizeSegmentCells = (startPoint, endPoint) => {
                const startCell = this.worldToCell(startPoint.x, startPoint.y);
                const endCell = this.worldToCell(endPoint.x, endPoint.y);
                const dx = endCell.cx - startCell.cx;
                const dy = endCell.cy - startCell.cy;
                const steps = Math.max(Math.abs(dx), Math.abs(dy));

                if (steps <= 0) {
                    return [startCell];
                }

                const cells = [];
                for (let s = 0; s <= steps; s++) {
                    const cx = Math.round(startCell.cx + (dx * s) / steps);
                    const cy = Math.round(startCell.cy + (dy * s) / steps);
                    const prev = cells[cells.length - 1];
                    if (!prev || prev.cx !== cx || prev.cy !== cy) {
                        cells.push({ cx, cy });
                    }
                }
                return cells;
            };

            const pathCells = [];
            for (let i = 0; i < path.points.length - 1; i++) {
                const a = path.points[i];
                const b = path.points[i + 1];
                const segmentCells = rasterizeSegmentCells(a, b);
                if (segmentCells.length <= 0) continue;

                for (let s = 0; s < segmentCells.length; s++) {
                    if (i > 0 && s === 0) continue;
                    pathCells.push(segmentCells[s]);
                }
            }

            return pathCells;
        }

        collectPathTiles(path = this.path) {
            if (!path?.points?.length) return new Map();

            const roundCoord = (value) => Math.round(value * 1000) / 1000;
            const ensureTile = (map, x, y) => {
                const key = `${x},${y}`;
                if (!map.has(key)) {
                    map.set(key, {
                        x,
                        y,
                        N: false,
                        E: false,
                        S: false,
                        W: false,
                        NW: false,
                        NE: false,
                        SW: false,
                        SE: false
                    });
                }
                return map.get(key);
            };
            const addLink = (map, x1, y1, x2, y2) => {
                const a = ensureTile(map, roundCoord(x1), roundCoord(y1));
                const b = ensureTile(map, roundCoord(x2), roundCoord(y2));

                if (x2 > x1 && y2 > y1) { a.SE = true; b.NW = true; return; }
                if (x2 > x1 && y2 < y1) { a.NE = true; b.SW = true; return; }
                if (x2 < x1 && y2 > y1) { a.SW = true; b.NE = true; return; }
                if (x2 < x1 && y2 < y1) { a.NW = true; b.SE = true; return; }
                if (x2 > x1) { a.E = true; b.W = true; return; }
                if (x2 < x1) { a.W = true; b.E = true; return; }
                if (y2 > y1) { a.S = true; b.N = true; return; }
                if (y2 < y1) { a.N = true; b.S = true; return; }
            };

            const tiles = new Map();
            const pathCells = this.collectPathCells(path);
            for (let i = 0; i < pathCells.length - 1; i++) {
                const from = this.cellCenter(pathCells[i].cx, pathCells[i].cy);
                const to = this.cellCenter(pathCells[i + 1].cx, pathCells[i + 1].cy);
                addLink(tiles, from.x, from.y, to.x, to.y);
            }

            return tiles;
        }

        rebuildFieldLayers(force = false) {
            if (!this.path) return;

            const layerKey = this.getFieldLayerKey();
            if (!force && this._fieldStaticGfx && this._fieldGridGfx && this._fieldLayerKey === layerKey) {
                return;
            }

            const fieldStatic = p.createGraphics(FIELD_WIDTH, this.fieldHeight);
            fieldStatic.clear();
            fieldStatic.imageMode(p.CENTER);

            const drawSpecialBuildTiles = () => {
                if (this.specialBuildTiles.size <= 0) return;

                for (const tile of this.specialBuildTiles.values()) {
                    const tileTexture = p.pathTextures?.[tile.textureKey];
                    const size = this.grid * 0.9;
                    fieldStatic.push();
                        fieldStatic.translate(tile.x, tile.y);
                        if (tileTexture) {
                            fieldStatic.image(tileTexture, 0, 0, size, size);
                        } else {
                            fieldStatic.rectMode(p.CENTER);
                            fieldStatic.textAlign(p.CENTER, p.CENTER);
                            fieldStatic.textFont(p.variables?.textFontFontick || "sans-serif");
                            const labelSize = Math.max(8, Math.floor(this.grid * 0.19));
                            const innerSize = size * 0.78;
                            fieldStatic.noStroke();
                            fieldStatic.fill(16, 18, 24, 72);
                            fieldStatic.rect(0, 2, size, size, 8);

                            fieldStatic.strokeWeight(2);
                            fieldStatic.stroke(255, 255, 255, 220);
                            fieldStatic.fill(100, 100, 100, 210);
                            fieldStatic.rect(0, 0, size, size, 8);

                            fieldStatic.noStroke();
                            fieldStatic.fill(255, 255, 255, 42);
                            fieldStatic.rect(0, -size * 0.18, innerSize, size * 0.24, 6);

                            fieldStatic.fill(255);
                            fieldStatic.textSize(labelSize);
                            fieldStatic.text(tile.label || "BUFF", 0, 1);
                        }
                    fieldStatic.pop();
                }
            };

            drawSpecialBuildTiles();

            const pathCells = this.collectPathCells();
            const tiles = this.collectPathTiles();
            const start = this.path?.points?.[0];
            const end = this.path?.points?.[this.path.points.length - 1];
            const transitionLookup = (() => {
                const dirToVec = {
                    N: [0, -1],
                    E: [1, 0],
                    S: [0, 1],
                    W: [-1, 0],
                    NW: [-1, -1],
                    NE: [1, -1],
                    SW: [-1, 1],
                    SE: [1, 1]
                };
                const vecToDir = new Map(
                    Object.entries(dirToVec).map(([dir, vec]) => [`${vec[0]},${vec[1]}`, dir])
                );
                const rotateVec = ([x, y], turns) => {
                    const t = ((turns % 4) + 4) % 4;
                    if (t === 1) return [y, -x];
                    if (t === 2) return [-x, -y];
                    if (t === 3) return [-y, x];
                    return [x, y];
                };
                const bases = [
                    { tex: p.pathTextures.uglDiag, dirs: ["W", "NW"] },
                    { tex: p.pathTextures.vertDiag, dirs: ["S", "NW"] }
                ];
                const lookup = new Map();

                for (const base of bases) {
                    if (!base.tex) continue;
                    for (let turns = 0; turns < 4; turns++) {
                        for (const flipX of [false, true]) {
                            for (const flipY of [false, true]) {
                                const transformedDirs = base.dirs.map((dir) => {
                                    let [x, y] = rotateVec(dirToVec[dir], turns);
                                    if (flipX) x *= -1;
                                    if (flipY) y *= -1;
                                    return vecToDir.get(`${x},${y}`);
                                });
                                if (transformedDirs.some(v => !v)) continue;

                                const key = transformedDirs.slice().sort().join("|");
                                if (!lookup.has(key)) {
                                    lookup.set(key, {
                                        tex: base.tex,
                                        rot: turns * p.HALF_PI,
                                        flipX,
                                        flipY
                                    });
                                }
                            }
                        }
                    }
                }

                return lookup;
            })();
            const transitionFillCommands = [];
            const transitionFillKeys = new Set();
            const transitionFillRotations = {
                NW: 0,
                NE: p.HALF_PI,
                SE: p.PI,
                SW: p.PI + p.HALF_PI
            };
            for (const tile of tiles.values()) {
                if (
                    (start &&
                    Math.abs(tile.x - start.x) < 0.01 &&
                    Math.abs(tile.y - start.y) < 0.01) ||
                    end &&
                    Math.abs(tile.x - end.x) < 0.01 &&
                    Math.abs(tile.y - end.y) < 0.01
                ) {
                    continue;
                }

                const drawCommands = [];
                const cardinalCount = [tile.N, tile.E, tile.S, tile.W].filter(Boolean).length;
                const diagonalDirs = ["NW", "NE", "SW", "SE"].filter((dir) => tile[dir]);
                const cardinalDirs = ["N", "E", "S", "W"].filter((dir) => tile[dir]);
                const diagonalCount = diagonalDirs.length;
                const hasMainDiag = tile.NW || tile.SE;
                const hasAntiDiag = tile.NE || tile.SW;
                const tileCell = this.worldToCell(tile.x, tile.y);
                const transitionKey = diagonalCount === 1 && cardinalCount === 1
                    ? [cardinalDirs[0], diagonalDirs[0]].sort().join("|")
                    : null;
                let transitionCommand = null;
                if (transitionKey) {
                    const cardinalDir = cardinalDirs[0];
                    const diagonalDir = diagonalDirs[0];
                    const transitionDirKey = `${cardinalDir}|${diagonalDir}`;
                    const oppositeAxis = {
                        N: "S",
                        S: "N",
                        E: "W",
                        W: "E"
                    };
                    const diagonalVertical = diagonalDir.includes("N") ? "N" : "S";
                    const diagonalHorizontal = diagonalDir.includes("W") ? "W" : "E";
                    let transitionFillConfig = null;
                    if (cardinalDir === "E" || cardinalDir === "W") {
                        transitionFillConfig = {
                            dx: cardinalDir === "W" ? -1 : 1,
                            dy: 0,
                            corner: `${diagonalVertical}${oppositeAxis[cardinalDir]}`
                        };
                    } else if (cardinalDir === "N" || cardinalDir === "S") {
                        transitionFillConfig = {
                            dx: 0,
                            dy: cardinalDir === "N" ? -1 : 1,
                            corner: `${oppositeAxis[cardinalDir]}${diagonalHorizontal}`
                        };
                    }
                    const vertDiagRotationOverrides = {
                        "S|NW": { tex: p.pathTextures.vertDiag, rot: 0, flipX: false, flipY: false },
                        "E|SW": { tex: p.pathTextures.vertDiag, rot: p.PI + p.HALF_PI, flipX: false, flipY: false },
                        "N|SE": { tex: p.pathTextures.vertDiag, rot: p.PI, flipX: false, flipY: false },
                        "W|NE": { tex: p.pathTextures.vertDiag, rot: p.HALF_PI, flipX: false, flipY: false }
                    };
                    const uglDiagRotationOverrides = {
                        "W|NW": { tex: p.pathTextures.uglDiag, rot: 0, flipX: false, flipY: false },
                        "S|SW": { tex: p.pathTextures.uglDiag, rot: p.PI + p.HALF_PI, flipX: false, flipY: false },
                        "E|SE": { tex: p.pathTextures.uglDiag, rot: p.PI, flipX: false, flipY: false },
                        "N|NE": { tex: p.pathTextures.uglDiag, rot: p.HALF_PI, flipX: false, flipY: false }
                    };
                    const manualTransitionMaps = {
                        vertical: {
                            "S|NW": { tex: p.pathTextures.vertDiag, rot: 0, flipX: false, flipY: false },
                            "S|NE": { tex: p.pathTextures.vertDiag, rot: 0, flipX: true, flipY: false },
                            "N|SW": { tex: p.pathTextures.vertDiag, rot: 0, flipX: false, flipY: true },
                            "N|SE": { tex: p.pathTextures.vertDiag, rot: 0, flipX: true, flipY: true }
                        },
                        horizontal: {
                            "W|NW": { tex: p.pathTextures.uglDiag, rot: 0, flipX: false, flipY: false },
                            "W|SW": { tex: p.pathTextures.uglDiag, rot: 0, flipX: false, flipY: true },
                            "E|NE": { tex: p.pathTextures.uglDiag, rot: 0, flipX: true, flipY: false },
                            "E|SE": { tex: p.pathTextures.uglDiag, rot: 0, flipX: true, flipY: true }
                        }
                    };

                    if (p.pathTextures.vertDiag && vertDiagRotationOverrides[transitionDirKey]) {
                        transitionCommand = vertDiagRotationOverrides[transitionDirKey];
                    }

                    if (!transitionCommand && p.pathTextures.uglDiag && uglDiagRotationOverrides[transitionDirKey]) {
                        transitionCommand = uglDiagRotationOverrides[transitionDirKey];
                    }

                    if (!transitionCommand && (cardinalDir === "N" || cardinalDir === "S") && p.pathTextures.vertDiag) {
                        transitionCommand = manualTransitionMaps.vertical[transitionDirKey] || null;
                    } else if (!transitionCommand && (cardinalDir === "E" || cardinalDir === "W") && p.pathTextures.uglDiag) {
                        transitionCommand = manualTransitionMaps.horizontal[transitionDirKey] || null;
                    }

                    if (!transitionCommand) {
                        transitionCommand = transitionLookup.get(transitionKey) || null;
                    }

                    if (
                        transitionCommand &&
                        transitionCommand.tex === p.pathTextures.uglDiag &&
                        p.pathTextures.diagCornerFill
                    ) {
                        const fillConfig = transitionFillConfig;
                        if (fillConfig) {
                            const targetCx = tileCell.cx + fillConfig.dx;
                            const targetCy = tileCell.cy + fillConfig.dy;
                            const fillKey = `${targetCx},${targetCy},${fillConfig.corner}`;
                            if (!transitionFillKeys.has(fillKey)) {
                                transitionFillKeys.add(fillKey);
                                transitionFillCommands.push({ cx: targetCx, cy: targetCy, corner: fillConfig.corner });
                            }
                        }
                    }
                }

                if (transitionCommand) {
                    drawCommands.push(transitionCommand);
                }

                if (!transitionCommand && cardinalCount > 0) {
                    let tex = p.pathTextures.straight;
                    let rot = 0;
                    const isCrossroads = tile.N && tile.E && tile.S && tile.W;

                    if (isCrossroads || cardinalCount >= 3) {
                        tex = p.pathTextures.crossroads;
                    } else if (
                        (tile.N && tile.E) ||
                        (tile.E && tile.S) ||
                        (tile.S && tile.W) ||
                        (tile.W && tile.N)
                    ) {
                        tex = p.pathTextures.corner;

                        if (tile.S && tile.W) rot = 0;
                        else if (tile.W && tile.N) rot = p.HALF_PI;
                        else if (tile.N && tile.E) rot = p.PI;
                        else if (tile.E && tile.S) rot = p.PI + p.HALF_PI;
                    } else {
                        rot = (tile.E || tile.W) ? p.PI : p.HALF_PI;
                    }

                    if (tex) {
                        drawCommands.push({ tex, rot });
                    }
                }

                if (!transitionCommand && (hasMainDiag || hasAntiDiag)) {
                    let tex = p.pathTextures.diag;
                    let rot = 0;
                    let flipX = false;
                    let flipY = false;
                    if (tile.NW && tile.SE) {
                        rot = 0;
                    } else if (tile.NE && tile.SW) {
                        rot = 0;
                        flipX = true;
                    }
                    const hasTopDiagPair = tile.NW && tile.NE;
                    const hasRightDiagPair = tile.NE && tile.SE;
                    const hasBottomDiagPair = tile.SE && tile.SW;
                    const hasLeftDiagPair = tile.SW && tile.NW;

                    if (p.pathTextures.diagHalfCross && diagonalCount === 2 && (
                        hasTopDiagPair ||
                        hasRightDiagPair ||
                        hasBottomDiagPair ||
                        hasLeftDiagPair
                    )) {
                        tex = p.pathTextures.diagHalfCross;
                        if (hasTopDiagPair) rot = 0;
                        else if (hasRightDiagPair) rot = p.HALF_PI;
                        else if (hasBottomDiagPair) rot = p.PI;
                        else if (hasLeftDiagPair) rot = p.PI + p.HALF_PI;
                    } else if (hasMainDiag && hasAntiDiag) {
                        tex = p.pathTextures.diagCross || p.pathTextures.diag;
                        rot = 0;
                        flipX = false;
                        flipY = false;
                    }

                    if (tex) {
                        drawCommands.push({ tex, rot, flipX, flipY });
                    }
                }

                fieldStatic.push();
                    fieldStatic.translate(tile.x, tile.y);
                    for (const cmd of drawCommands) {
                        fieldStatic.push();
                            fieldStatic.translate(cmd.ox || 0, cmd.oy || 0);
                            fieldStatic.rotate(cmd.rot);
                            fieldStatic.scale(cmd.flipX ? -1 : 1, cmd.flipY ? -1 : 1);
                            fieldStatic.image(cmd.tex, 0, 0, cmd.w || this.grid, cmd.h || this.grid);
                        fieldStatic.pop();
                    }
                fieldStatic.pop();
            }

            if (p.pathTextures.diagCornerFill && transitionFillCommands.length > 0) {
                for (const fill of transitionFillCommands) {
                    const rot = transitionFillRotations[fill.corner];
                    if (rot == null) continue;
                    const pos = this.cellCenter(fill.cx, fill.cy);
                    fieldStatic.push();
                        fieldStatic.translate(pos.x, pos.y);
                        fieldStatic.rotate(rot);
                        fieldStatic.image(p.pathTextures.diagCornerFill, 0, 0, this.grid, this.grid);
                    fieldStatic.pop();
                }
            }

            if (p.pathTextures.diagCornerFill && pathCells.length > 1) {
                const roadKeys = new Set(pathCells.map(cell => this.cellKey(cell.cx, cell.cy)));
                const fillCommands = [];
                const fillKeys = new Set();
                const cornerRotations = {
                    NW: 0,
                    NE: p.HALF_PI,
                    SE: p.PI,
                    SW: p.PI + p.HALF_PI
                };
                const queueFill = (cx, cy, corner) => {
                    const roadKey = this.cellKey(cx, cy);
                    if (roadKeys.has(roadKey)) return;

                    const key = `${roadKey}|${corner}`;
                    if (fillKeys.has(key)) return;
                    fillKeys.add(key);
                    fillCommands.push({ cx, cy, corner });
                };

                for (let i = 0; i < pathCells.length - 1; i++) {
                    const a = pathCells[i];
                    const b = pathCells[i + 1];
                    const dx = b.cx - a.cx;
                    const dy = b.cy - a.cy;
                    if (Math.abs(dx) !== 1 || Math.abs(dy) !== 1) continue;

                    const left = Math.min(a.cx, b.cx);
                    const right = Math.max(a.cx, b.cx);
                    const top = Math.min(a.cy, b.cy);
                    const bottom = Math.max(a.cy, b.cy);

                    if (dx === dy) {
                        queueFill(left, bottom, "NE");
                        queueFill(right, top, "SW");
                    } else {
                        queueFill(left, top, "SE");
                        queueFill(right, bottom, "NW");
                    }
                }

                for (const fill of fillCommands) {
                    const rot = cornerRotations[fill.corner];
                    if (rot == null) continue;
                    const pos = this.cellCenter(fill.cx, fill.cy);
                    fieldStatic.push();
                        fieldStatic.translate(pos.x, pos.y);
                        fieldStatic.rotate(rot);
                        fieldStatic.image(p.pathTextures.diagCornerFill, 0, 0, this.grid, this.grid);
                    fieldStatic.pop();
                }
            }

            const next = this.path?.points?.[1];
            if (start && next && p.pathTextures.cave) {
                const dx = next.x - start.x;
                const dy = next.y - start.y;
                const rot = Math.atan2(dy, dx);
                fieldStatic.push();
                    fieldStatic.translate(start.x, start.y);
                    fieldStatic.rotate(rot);
                    fieldStatic.image(p.pathTextures.cave, 0, 0, this.grid, this.grid);
                fieldStatic.pop();
            }

            const fieldGrid = p.createGraphics(FIELD_WIDTH, this.fieldHeight);
            fieldGrid.clear();
            const ox = this.fieldOffsetX || 0;
            const oy = this.fieldOffsetY || 0;
            fieldGrid.stroke(12, 22, 12, 105);
            fieldGrid.strokeWeight(2);
            for (let x = 0; x <= this.cols * this.grid; x += this.grid) {
                fieldGrid.line(x + ox, oy, x + ox, this.rows * this.grid + oy);
            }
            for (let y = 0; y <= this.rows * this.grid; y += this.grid) {
                fieldGrid.line(ox, y + oy, this.cols * this.grid + ox, y + oy);
            }
            fieldGrid.stroke(210, 235, 210, 35);
            fieldGrid.strokeWeight(1);
            for (let x = 0; x <= this.cols * this.grid; x += this.grid) {
                fieldGrid.line(x + ox, oy, x + ox, this.rows * this.grid + oy);
            }
            for (let y = 0; y <= this.rows * this.grid; y += this.grid) {
                fieldGrid.line(ox, y + oy, this.cols * this.grid + ox, y + oy);
            }

            this._fieldStaticGfx = fieldStatic;
            this._fieldGridGfx = fieldGrid;
            this._fieldLayerKey = layerKey;
        }

        drawFieldStatic() {
            if (!this._fieldStaticGfx) {
                this.rebuildFieldLayers();
            }
            if (!this._fieldStaticGfx) return;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 1);
                p.image(this._fieldStaticGfx, 0, 0);
            p.pop();
        }

        drawBuildGrid() {
            if (!this.selectedTowerType && !this.buildMode) return;
            if (!this._fieldGridGfx) {
                this.rebuildFieldLayers();
            }
            if (!this._fieldGridGfx) return;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 1);
                p.image(this._fieldGridGfx, 0, 0);
            p.pop();
        }

        getUnitSpatialKey(x, y) {
            const cellSize = this.unitSpatialCellSize || Math.max(48, this.grid * 2);
            const cx = Math.floor(x / cellSize);
            const cy = Math.floor(y / cellSize);
            return `${cx},${cy}`;
        }

        rebuildUnitSpatialHash() {
            const hash = new Map();
            let activeAliveUnits = 0;
            let activeBossSummonedUnits = 0;
            let activeSummonPortals = 0;
            for (const unit of this.units) {
                if (!unit?.alive || unit.reachedBase) continue;
                activeAliveUnits++;
                if (unit.bossSummoned) {
                    activeBossSummonedUnits++;
                }
                if (unit.id === "summon_portal") {
                    activeSummonPortals++;
                }
                const key = this.getUnitSpatialKey(unit.x, unit.y);
                let bucket = hash.get(key);
                if (!bucket) {
                    bucket = [];
                    hash.set(key, bucket);
                }
                bucket.push(unit);
            }
            this.unitSpatialHash = hash;
            this.activeAliveUnits = activeAliveUnits;
            this.activeBossSummonedUnits = activeBossSummonedUnits;
            this.activeSummonPortals = activeSummonPortals;
        }

        queueUnitSpawn(unit) {
            if (!unit) return;
            this.pendingUnitSpawns.push(unit);
        }

        flushPendingUnitSpawns() {
            if (!this.pendingUnitSpawns.length) return;
            this.units.push(...this.pendingUnitSpawns);
            this.pendingUnitSpawns.length = 0;
        }

        queryUnitsInRadius(source, radius, cacheDuration = 0) {
            if (!source) return [];

            const now = this.simTime ?? 0;
            const sourceCellKey = this.getUnitSpatialKey(source.x, source.y);
            const cached = source._nearbyUnitsCache;
            if (
                cached &&
                cached.radius === radius &&
                cached.cellKey === sourceCellKey &&
                cached.expiresAt > now
            ) {
                return cached.units;
            }

            const cellSize = this.unitSpatialCellSize || Math.max(48, this.grid * 2);
            const radiusCells = Math.ceil(Math.max(0, radius || 0) / cellSize);
            const centerX = Math.floor(source.x / cellSize);
            const centerY = Math.floor(source.y / cellSize);
            const units = [];

            for (let gx = centerX - radiusCells; gx <= centerX + radiusCells; gx++) {
                for (let gy = centerY - radiusCells; gy <= centerY + radiusCells; gy++) {
                    const bucket = this.unitSpatialHash?.get?.(`${gx},${gy}`);
                    if (!bucket || bucket.length === 0) continue;
                    units.push(...bucket);
                }
            }

            if (cacheDuration > 0) {
                source._nearbyUnitsCache = {
                    radius,
                    cellKey: sourceCellKey,
                    expiresAt: now + cacheDuration,
                    units
                };
            }

            return units;
        }

        getRandomPathIndex() {
            const count = this.getPathPresetCount() || 1;
            return Math.floor(Math.random() * count) + 1;
        }

        getRandomPathIndexForDifficulty(difficulty = null) {
            const key = difficulty || this.getPathDifficultyKeyForGameDifficulty();
            const presets = this.getPathPresetsForDifficulty(key);
            if (presets.length === 0) return this.getRandomPathIndex();

            const localIndex = Math.floor(Math.random() * presets.length) + 1;
            const presetEntry = this.getPathPresetEntryByDifficulty(key, localIndex);
            return presetEntry?.globalIndex || 1;
        }

        healNearby(source, radius, amount, cacheDuration = 0) {
            const radiusSq = radius * radius;
            let healedCount = 0;
            const nearbyUnits = this.queryUnitsInRadius(source, radius, cacheDuration);

            for (const unit of nearbyUnits) {

                if (!unit.alive) continue;
                if (unit.trioDown) continue;
                //  console.log(source, radius, amount)
                if (unit === source) continue;

                const dx = unit.x - source.x;
                const dy = unit.y - source.y;
                // console.log(source, radius, amount)
                if ((dx * dx) + (dy * dy) <= radiusSq) {
                    const maxHp = unit.hpMax ?? unit.maxHp ?? unit.hp;
                    const prevHp = unit.hp;
                    const adjustedAmount = unit.getAdjustedHealing(amount);
                    unit.hp = Math.min(
                        maxHp,
                        unit.hp + adjustedAmount
                    );
                    unit.applyAuraSpeed?.(1.12, 0.5);
                    if (unit.hp > prevHp) {
                        healedCount++;
                        unit.healFxTimer = Math.max(unit.healFxTimer || 0, 0.6);
                    }
                }
            }

            return healedCount;
        }

        jamTowersNearby(source, radius, fireRateMult = 0.55, duration = 1.9) {
            for (const tower of this.towers) {
                if (!tower) continue;
                if (tower.type?.id === "support") continue;

                const dx = tower.x - source.x;
                const dy = tower.y - source.y;
                const dist = Math.hypot(dx, dy);

                if (dist <= radius) {
                    tower.applyJammer(fireRateMult, duration);
                }
            }
        }

        spawnSplitEnemy(data, get_reward = true, defer = false) {
            let type;
            if(data.id === "boss_split")
                type = p.ENEMY_TYPES.boss_split;
            else
               type = p.ENEMY_TYPES.split; 

            const u = new Unit(
                this,
                this.path,
                type,
                {
                    splitLevel: data.level,
                    endlessTier: data?.endlessTier,
                    endlessRole: data?.endlessRole,
                    bossSummoned: data?.bossSummoned,
                    noRewardChildren: data?.noRewardChildren,
                    noChestDrop: data?.noChestDrop,
                    noBaseDamage: data?.noBaseDamage,
                    noScore: data?.noScore,
                    targetPriority: data?.targetPriority,
                    spawnInvulnerabilityDuration: data?.spawnInvulnerabilityDuration
                },
                get_reward 
            );

            u.x = data.x;
            u.y = data.y;

            // Текущий waypoint
            u.i = data.i;

            // Небольшой разброс (по желанию)
            const spread = 50;
            u.x += (Math.random() - 0.5) * spread;
            u.y += (Math.random() - 0.5) * spread;

            if (defer) {
                this.queueUnitSpawn(u);
            } else {
                this.units.push(u);
            }
        }

        spawnSummonPortal(data, defer = false) {
            const type = p.ENEMY_TYPES.summon_portal;
            if (!type) return null;

            const u = new Unit(
                this,
                this.path,
                type,
                {
                    endlessTier: data?.endlessTier,
                    endlessRole: "escort",
                    noBaseDamage: true,
                    noScore: true,
                    noChestDrop: true,
                    targetPriority: data?.targetPriority ?? type.targetPriority ?? 18,
                    spawnInvulnerabilityDuration: data?.spawnInvulnerabilityDuration ?? 0.12
                },
                false
            );

            u.x = data?.x ?? u.x;
            u.y = data?.y ?? u.y;
            u.i = data?.i ?? u.i;
            u.portalCharges = Math.max(0, Math.round(data?.portalCharges ?? u.portalCharges ?? 0));
            u.portalInitialCharges = Math.max(1, u.portalCharges || 1);
            u.portalLifetime = Math.max(0.8, data?.portalLifetime ?? u.portalLifetime ?? 4.4);
            u.portalOpenTime = Math.max(0.2, data?.portalOpenTime ?? u.portalOpenTime ?? 0.6);
            u.portalSpawnInterval = Math.max(0.3, data?.portalSpawnInterval ?? u.portalSpawnInterval ?? 0.82);
            u.portalSpawnTimer = u.portalOpenTime;
            u.portalHp = Math.max(1, data?.portalHp ?? u.portalHp ?? u.hpMax ?? 26);
            u.portalInvulnerable = data?.portalInvulnerable !== false;
            u.hpMax = u.portalHp;
            u.maxHp = u.portalHp;
            u.hp = u.portalHp;
            u.summonActiveCap = Math.max(0, data?.summonActiveCap ?? u.summonActiveCap ?? 6);

            if (defer) {
                this.queueUnitSpawn(u);
            } else {
                this.units.push(u);
            }

            this.playPortalSpawnSound();

            return u;
        }

        resolveTrioGroup(groupId) {
            if (!groupId) return;
            if (this.trioFailedGroups?.has(groupId)) return;
            if (this.trioSpawnPending && this.trioSpawnPending.id === groupId && this.trioSpawnPending.count > 0) {
                return;
            }

            const group = this.units.filter(
                u => u.trioGroupId === groupId && u.alive && !u.reachedBase
            );

            if (group.length === 0) return;

            const allDown = group.every(u => u.trioDown);
            if (!allDown) return;

            for (const u of group) {
                u.die("trio");
            }

            if (!this.trioEliteSpawned.has(groupId)) {
                this.trioEliteSpawned.add(groupId);
                const downOrder = [...group].sort((a, b) => {
                    const aOrder = a.trioDownOrder ?? 0;
                    const bOrder = b.trioDownOrder ?? 0;
                    if (aOrder !== bOrder) return aOrder - bOrder;

                    const aTime = a.trioDownStartedAt ?? 0;
                    const bTime = b.trioDownStartedAt ?? 0;
                    if (aTime !== bTime) return aTime - bTime;

                    const aIndex = Number.isFinite(a.trioIndex) ? a.trioIndex : 0;
                    const bIndex = Number.isFinite(b.trioIndex) ? b.trioIndex : 0;
                    return aIndex - bIndex;
                });
                const anchor = this.trioDownAnchors[groupId] || downOrder[0] || group[0];
                const eliteType = p.ENEMY_TYPES.boss_trio_elite;
                if (eliteType && anchor) {
                    const elite = new Unit(this, this.path, eliteType, {
                        bossAbilities: Array.isArray(anchor.bossAbilities) ? [...anchor.bossAbilities] : [],
                        endlessTier: anchor.endlessBossTier ?? 0,
                        endlessRole: "boss"
                    });
                    elite.x = anchor.x;
                    elite.y = anchor.y;
                    elite.i = anchor.i;
                    this.units.push(elite);
                }
                delete this.trioDownAnchors[groupId];
            }
        }

        failTrioGroup(groupId) {
            if (!groupId) return;
            if (!this.trioFailedGroups) this.trioFailedGroups = new Set();
            if (this.trioFailedGroups.has(groupId)) return;
            this.trioFailedGroups.add(groupId);

            for (const u of this.units) {
                if (u?.trioGroupId !== groupId) continue;
                if (u.reachedBase) continue;
                if (u.alive) {
                    u.die("trio");
                }
            }

            if (this.trioDownAnchors) {
                delete this.trioDownAnchors[groupId];
            }
        }

        cleanupTrioGroupTracking() {
            const hasAnchors = this.trioDownAnchors && Object.keys(this.trioDownAnchors).length > 0;
            const hasEliteMarks = this.trioEliteSpawned?.size > 0;
            const hasFailMarks = this.trioFailedGroups?.size > 0;
            if (!hasAnchors && !hasEliteMarks && !hasFailMarks) return;

            const activeGroupIds = new Set();
            for (const unit of this.units) {
                if (!unit?.trioGroupId) continue;
                activeGroupIds.add(`${unit.trioGroupId}`);
            }

            if (this.trioDownAnchors) {
                for (const groupId of Object.keys(this.trioDownAnchors)) {
                    if (!activeGroupIds.has(`${groupId}`)) {
                        delete this.trioDownAnchors[groupId];
                    }
                }
            }

            if (this.trioEliteSpawned?.size > 0) {
                for (const groupId of [...this.trioEliteSpawned]) {
                    if (!activeGroupIds.has(`${groupId}`)) {
                        this.trioEliteSpawned.delete(groupId);
                    }
                }
            }

            if (this.trioFailedGroups?.size > 0) {
                for (const groupId of [...this.trioFailedGroups]) {
                    if (!activeGroupIds.has(`${groupId}`)) {
                        this.trioFailedGroups.delete(groupId);
                    }
                }
            }
        }

        spawnLootChest(x, y, value = 20, lifetime = 5, sourceType = "normal") {
            this.lootChests.push(
                new LootChest(x, y, value, lifetime, sourceType)
            );
            this.playChestSpawnSound();
        }

        spawnDecoyPack(source, count = 2, spread = 26, lifetime = 2.5) {
            const type = p.ENEMY_TYPES.decoy;
            if (!type) return;

            const sideOffset = Math.max(8, spread * 0.45);
            const yJitter = Math.min(10, spread * 0.25);

            for (let i = 0; i < count; i++) {
                const u = new Unit(this, this.path, type);
                const side = i % 2 === 0 ? -1 : 1;
                const row = Math.floor(i / 2);
                const xOffset = side * (sideOffset + row * 6);

                u.x = source.x + xOffset;
                u.y = source.y + (Math.random() - 0.5) * yJitter;
                u.i = source.i;
                u.decoyLifetime = lifetime;
                u.decoyTimer = Math.random() * 0.15;
                u.texture = source?.texture || u.texture;
                this.units.push(u);
            }
        }

        createWaveEntry(type, data = {}, get_reward = true) {
            return { type, data, get_reward };
        }

        getWaveEntryType(entry) {
            return entry?.type || entry || null;
        }

        getWaveSpawnIntervalMultiplier(queue = this.waveQueue, wave = this.wave) {
            const hasBossHealer = Array.isArray(queue)
                && queue.some(entry => this.getWaveEntryType(entry)?.id === "boss_healer");
            if (!hasBossHealer) return 1;
            return wave > this.mainCampaignWaves ? 0.7 : 0.5;
        }

        getWaveSpawnInterval(queue = this.waveQueue, wave = this.wave) {
            const base = this.baseSpawnInterval ?? this.spawnInterval ?? 0.9;
            return Math.max(0.05, base * this.getWaveSpawnIntervalMultiplier(queue, wave));
        }

        getEndlessBossAbilityPool(type) {
            if (!type?.id) return [];

            const exclusions = {
                boss_summoner: ["ghost"],
                boss_warp: ["teleporter"]
            };

            const blocked = new Set(exclusions[type.id] || []);
            return Object.keys(p.BOSS_ABILITIES || {}).filter(id => !blocked.has(id));
        }

        getEndlessBossTier() {
            return Math.max(1, 1 + Math.floor(Math.max(0, this.wave - 10) / this.bossWaveInterval));
        }

        getEndlessBossLoadouts(type) {
            const loadouts = {
                boss_tank: [
                    ["shield", "regen"],
                    ["shield", "jammer"],
                    ["regen", "teleporter"]
                ],
                boss_summoner: [
                    ["regen", "decoy_master"],
                    ["jammer", "decoy_master"],
                    ["shield", "regen"]
                ],
                boss_healer: [
                    ["shield", "regen"],
                    ["regen", "ghost"],
                    ["shield", "ghost"]
                ],
                boss_warp: [
                    ["ghost", "decoy_master"],
                    ["ghost", "jammer"],
                    ["decoy_master", "jammer"]
                ]
            };

            return loadouts[type?.id] || [];
        }

        getEndlessEliteAbilityLoadouts() {
            return [
                ["shield", "jammer"],
                ["ghost", "teleporter"],
                ["regen", "decoy_master"],
                ["shield", "regen"],
                ["jammer", "teleporter"]
            ];
        }

        pushEndlessEliteEntries(queue, count = 2) {
            const type = p.ENEMY_TYPES?.end_game_unit;
            if (!type || count <= 0) return 0;

            const tier = this.getEndlessBossTier();
            let loadoutPool = this.getEndlessEliteAbilityLoadouts().map(loadout => [...loadout]);
            let pushed = 0;

            for (let i = 0; i < count; i++) {
                if (loadoutPool.length === 0) {
                    loadoutPool = this.getEndlessEliteAbilityLoadouts().map(loadout => [...loadout]);
                }
                const loadoutIndex = Math.floor(Math.random() * loadoutPool.length);
                const bossAbilities = loadoutPool.splice(loadoutIndex, 1)[0] || [];
                queue.push(
                    this.createWaveEntry(type, {
                        bossAbilities,
                        enableBossAbilityCycle: bossAbilities.length > 0,
                        bossAbilityCycleTier: tier
                    })
                );
                pushed++;
            }

            return pushed;
        }

        rollBossAbilities(type, tier = this.getEndlessBossTier()) {
            const pool = this.getEndlessBossAbilityPool(type);
            if (pool.length === 0) return [];

            const picked = [];
            const loadouts = this.getEndlessBossLoadouts(type)
                .filter(loadout => loadout.every(id => pool.includes(id)));

            if (loadouts.length > 0) {
                const selected = loadouts[Math.floor(Math.random() * loadouts.length)];
                picked.push(...selected);
            } else {
                const available = [...pool];
                const baseCount = Math.min(2, available.length);
                for (let i = 0; i < baseCount; i++) {
                    const idx = Math.floor(Math.random() * available.length);
                    picked.push(available[idx]);
                    available.splice(idx, 1);
                }
            }

            return picked.slice(0, 2);
        }

        pushEndlessWaveEntries(queue, typeId, count, tier, role = "escort") {
            const type = p.ENEMY_TYPES?.[typeId];
            if (!type || count <= 0) return;

            for (let i = 0; i < count; i++) {
                queue.push(
                    this.createWaveEntry(type, {
                        endlessTier: tier,
                        endlessRole: role
                    })
                );
            }
        }

        createEndlessBossWave() {
            const tier = this.getEndlessBossTier();
            const bossPool = [
                "boss_trio",
                "boss_tank",
                "boss_split",
                "boss_summoner",
                "boss_healer",
                "boss_warp"
            ];
            const bossIds = bossPool.filter(id => id !== this.lastEndlessBossId);

            const pickPool = bossIds.length > 0 ? bossIds : bossPool;
            const bossId = pickPool[Math.floor(Math.random() * pickPool.length)];
            const bossType = p.ENEMY_TYPES[bossId];
            if (!bossType) return [];
            this.lastEndlessBossId = bossId;

            const bossAbilities = this.rollBossAbilities(bossType, tier);
            const bossEntryData = {
                bossAbilities,
                endlessTier: tier,
                endlessRole: "boss"
            };

            if (bossId === "boss_trio") {
                return [
                    this.createWaveEntry(bossType, { ...bossEntryData }),
                    this.createWaveEntry(bossType, { ...bossEntryData }),
                    this.createWaveEntry(bossType, { ...bossEntryData })
                ];
            }

            return [this.createWaveEntry(bossType, bossEntryData)];
        }

        isBossWave(wave = this.wave) {
            if (wave <= 0) return false;
            if (wave <= this.mainCampaignWaves) {
                return wave % this.bossWaveInterval === 0;
            }
            return this.endlessMode && wave % this.bossWaveInterval === 0;
        }

        generateWave() {
            const queue = [];
            let keepFirstUnit = false;
            const isBossWave = this.isBossWave();
            const isEndGameWave = this.wave > this.mainCampaignWaves;
            const isTreasureWave = !isBossWave && !isEndGameWave && this.wave % 2 === 1;
            const forceTreasure = isTreasureWave;
            const excludeTreasure = !isTreasureWave;

            if (isBossWave) {
                const wave = this.generateBossWave();
                const firstType = this.getWaveEntryType(wave[0]);
                if(firstType?.id !== "boss_healer")
                    return wave;
                else {
                    queue.push(wave[0]);
                    keepFirstUnit = true;
                }
            }

            // Обычная волна
            const waveBudgetMult = this.difficultyProfile?.waveBudgetMult || 1;
            //ТЕСТ
            let budget = Math.max(6, Math.round((10 + this.wave * 3) * waveBudgetMult));

            const normalPool = this.getEnemyPool("normal", { excludeTreasure });
            const heroPool = this.getEnemyPool("hero", { excludeTreasure });
            let heroSpawnBudget = this.getHeroSpawnBudget();
            // console.log(heroSpawnBudget)
            if (keepFirstUnit) heroSpawnBudget = 0;

            if (isEndGameWave && !keepFirstUnit) {
                const endlessEliteCount = this.pushEndlessEliteEntries(queue, 2);
                const endlessEliteCost = p.ENEMY_TYPES?.end_game_unit?.cost ?? 0;
                budget = Math.max(0, budget - endlessEliteCount * endlessEliteCost);
                heroSpawnBudget = Math.max(0, heroSpawnBudget - endlessEliteCount);
            }

            while (heroSpawnBudget > 0 && budget > 0 && heroPool.length > 0) {
                const affordableHeroes = heroPool.filter(enemy => enemy.cost <= budget);
                if (affordableHeroes.length === 0) break;

                const enemy = affordableHeroes[
                    Math.floor(Math.random() * affordableHeroes.length)
                ];

                queue.push(enemy.type);
                budget -= enemy.cost;
                heroSpawnBudget -= 1;
            }

            while (budget > 0 && normalPool.length > 0) {
                const affordableNormals = normalPool.filter(enemy => enemy.cost <= budget);
                if (affordableNormals.length === 0) break;

                const enemy = affordableNormals[
                    Math.floor(Math.random() * affordableNormals.length)
                ];

                queue.push(enemy.type);
                budget -= enemy.cost;
            }

            if (budget > 0) {
                const fallbackPool = this.getEnemyPool(null, { excludeTreasure });
                while (budget > 0 && fallbackPool.length > 0) {
                    const affordable = fallbackPool.filter(enemy => enemy.cost <= budget);
                    if (affordable.length === 0) break;

                    const enemy = affordable[
                        Math.floor(Math.random() * affordable.length)
                    ];

                    queue.push(enemy.type);
                    budget -= enemy.cost;
                }
            }

            if (forceTreasure && p.ENEMY_TYPES.treasure) {
                const hasTreasure = queue.some(u => this.getWaveEntryType(u)?.id === "treasure");
                if (!hasTreasure) {
                    queue.push(p.ENEMY_TYPES.treasure);
                }
            }

            this.shuffleWaveQueue(queue, keepFirstUnit ? 1 : 0);
            return queue;
        }

        getHeroSpawnBudget() {
            const heroCapMult = this.difficultyProfile?.heroCapMult || 1;
            const earlyBase = this.wave <= 2 ? this.wave + 1 : 3;
            const scaled = earlyBase + Math.floor(Math.max(0, this.wave - 3) / 2);
            const cap = Math.min(10, scaled);
            return Math.max(0, Math.round(cap * heroCapMult));
        }

        shuffleWaveQueue(queue, startIndex = 0) {
            for (let i = queue.length - 1; i > startIndex; i--) {
                const j = startIndex + Math.floor(Math.random() * (i - startIndex + 1));
                [queue[i], queue[j]] = [queue[j], queue[i]];
            }
        }

        getEnemyPool(enemyClass = null, options = {}) {

            const pool = [];
            // const unlockOffset = this.difficultyProfile?.unlockOffset || 0;

            const addEnemy = (type, minWave = 0, maxWave = Infinity) => {
                if (!type) return;
                if (options.excludeTreasure && type.id === "treasure") return;
                if (this.wave < Math.max(1, minWave )) return; // +unlockOffset
                if (this.wave > maxWave) return;
                if (enemyClass && type.class !== enemyClass) return;
                const cost = type.cost ?? 1;
                pool.push({ type, cost });
            };

            addEnemy(p.ENEMY_TYPES.normal, 1, this.mainCampaignWaves);
            addEnemy(p.ENEMY_TYPES.treasure, 1, this.mainCampaignWaves);
            addEnemy(p.ENEMY_TYPES.tank, 1, this.mainCampaignWaves);

            
            addEnemy(p.ENEMY_TYPES.fast, 2, this.mainCampaignWaves);
           
          
            addEnemy(p.ENEMY_TYPES.teleporter, 3, this.mainCampaignWaves);
            addEnemy(p.ENEMY_TYPES.ghost, 3, this.mainCampaignWaves);
           
            addEnemy(p.ENEMY_TYPES.split, 4, this.mainCampaignWaves);
            addEnemy(p.ENEMY_TYPES.buffer, 4, this.mainCampaignWaves);
            addEnemy(p.ENEMY_TYPES.shield, 4, this.mainCampaignWaves);

            addEnemy(p.ENEMY_TYPES.jammer, 5, this.mainCampaignWaves);
            addEnemy(p.ENEMY_TYPES.regen, 5, this.mainCampaignWaves);
            
            addEnemy(p.ENEMY_TYPES.decoy_master, 5, this.mainCampaignWaves);
             
          

              
            addEnemy(p.ENEMY_TYPES.end_game_unit, this.endGameUnitStartWave);
        

            return pool;
        }

        generateBossWave() {
            if (this.wave > this.mainCampaignWaves) {
                return this.createEndlessBossWave();
            }

            const bossGroups = [
                ["boss_trio", "boss_tank"], // wave 5 
                [ "boss_summoner", "boss_split"], // wave 10 
                ["boss_healer","boss_warp"] // wave 15  
            ];

            const groupIndex = (Math.ceil(this.wave / this.bossWaveInterval) - 1) % bossGroups.length;
            const group = bossGroups[groupIndex] || bossGroups[0];
            const bossId = group[Math.floor(Math.random() * group.length)];

            if (bossId === "boss_trio") {
                return [
                    p.ENEMY_TYPES.boss_trio,
                    p.ENEMY_TYPES.boss_trio,
                    p.ENEMY_TYPES.boss_trio
                ];
            }

            return [p.ENEMY_TYPES[bossId]];
        }


        start(diff, level = 1) {
            const preset = p.DIFFICULTY_PRESETS[diff] || p.DIFFICULTY_PRESETS.normal;
            // ТЕСТ
            const DEBUG_TEST_MODE = {
                enabled: false,
                startWave: 14,
                startMoney: 1500,
                endlessMode: true
            };
            this.difficulty = diff || "normal";
            this.difficultyProfile = preset;
            const pathDifficulty = this.getPathDifficultyKeyForGameDifficulty(this.difficulty);
            const startMoneyOverride = p.menu?.testLevelPickerEnabled
                ? p.menu.getTestStartMoney?.(this.difficulty)
                : null;

            this.money = DEBUG_TEST_MODE.enabled
                ? DEBUG_TEST_MODE.startMoney
                : (Number.isFinite(startMoneyOverride) ? startMoneyOverride : preset.money);
            this.lives = preset.lives;
            this.maxLives = preset.lives;
            this.baseSpawnInterval = preset.spawnInterval;
            this.spawnInterval = this.baseSpawnInterval;
            this.timeAcc = 0;
            this.simTime = 0;
            this.unitSpatialHash = new Map();
            this.activeAliveUnits = 0;
            this.activeBossSummonedUnits = 0;
            this.activeSummonPortals = 0;
            this.pendingUnitSpawns.length = 0;
            this.specialBuildTiles.clear();
            this.updateSpecialBuildTileSignature();
            p.menu.time = 0;
            p.variables.score = 0;

            this.wave = 0;
            this.units.length = 0;
            this.towers.length = 0;
            this.projectiles.length = 0;
            this.goldPopups.length = 0;
            this.baseDamagePopups.length = 0;
            this.critPopups.length = 0;
            this.lootChests.length = 0;
            this.upgradePopups.length = 0;
            this.baseHitFx = 0;
            this.trioGroupSeq = 0;
            this.trioDownSeq = 0;
            this.trioSpawnPending = null;
            this.trioDownAnchors = {};
            this.trioEliteSpawned = new Set();
            this.trioFailedGroups = new Set();

            this.wave = DEBUG_TEST_MODE.enabled ? DEBUG_TEST_MODE.startWave : 0;
            this.waveState = "prep";
            this.prepTimer = 0;
            this.cleanupTimer = 0;
            p.gameEnded = false;
            p.gameWon = false;
            p.gamePassed = false;
            this.waitingEndChoice = false;
            this.paused = false;
            this.endlessMode = DEBUG_TEST_MODE.enabled ? DEBUG_TEST_MODE.endlessMode : false;
            this.endChoiceShown = DEBUG_TEST_MODE.enabled ? DEBUG_TEST_MODE.endlessMode : false;
            this.waveIntroText = "";
            this.waveIntroTimer = 0;
            this.selectedTowerType = null;
            this.damageClock = 0;
            this.waveDamageClock = 0;
            this.lastWaveDamageDuration = 0;
            this.aliveUnitHpRatioAvg = 1;
            p.menu?.resetEndScoreConversion?.();
            this.towerDamagePanelOpen = false;
            this.towerDamagePanelMode = "total";
            this.towerInstanceCounters = {};
            this.lastEndlessBossId = null;
            this._towerDamagePanelDirty = true;
            this._towerDamagePanelNextRefresh = 0;
            this.resetPerfStats();

            this.initTowerProgression();

            const requestedEntry = this.getPathPresetEntry(level);
            const keepCurrentDifficultyPath =
                this.chosenPathDifficulty === pathDifficulty &&
                Number.isFinite(this.chosenPathIndexInDifficulty);

            if (requestedEntry?.difficulty === pathDifficulty) {
                this.setLevelPath(level);
            } else if (keepCurrentDifficultyPath) {
                this.setLevelPathByDifficulty(pathDifficulty, this.chosenPathIndexInDifficulty);
            } else {
                this.setLevelPath(this.getRandomPathIndexForDifficulty(pathDifficulty));
            }
            this.generateSpecialBuildTiles();
            this.rebuildFieldLayers(true);
            try {
                p.variables.gameLoseMusic.pause();
                p.variables.gameLoseMusic.currentTime = 0;
            } catch (e) {}
            p.variables.gameMusic.play();
        }

        startWave() {
            this.wave += 1;
            this.resetWaveDamageStats();
            this.prepTimer = 0;
            this.waveQueue = this.generateWave();
      
            this.unitsToSpawn = this.waveQueue.length;
            this.spawnInterval = this.getWaveSpawnInterval(this.waveQueue, this.wave);
           
            // this.unitsToSpawn = 8 + this.wave * 2;
            this.spawnAcc = 0;
            this.cleanupTimer = 0;
            this.waveState = "spawning";
            this.paused = false;
            this.updatePauseButtonLabel();
            this.playWaveStartSound();
            this.triggerWaveIntro();
        }

        togglePause() {
            this.paused = !this.paused;
            this.updatePauseButtonLabel();
            this.playPauseSound(this.paused);
        }

        updatePauseButtonLabel() {
            if (!this.pauseButton) return;
            this.pauseButton.text = p.t(this.paused ? "button.start" : "button.pause");
        }

        worldToCell(x, y) {
            const ox = this.fieldOffsetX || 0;
            const oy = this.fieldOffsetY || 0;
            const cx = Math.floor((x - ox) / this.grid);
            const cy = Math.floor((y - oy) / this.grid);
            return { cx, cy };
        }

        cellCenter(cx, cy) {
            const ox = this.fieldOffsetX || 0;
            const oy = this.fieldOffsetY || 0;
            return { x: ox + cx * this.grid + this.grid/2, y: oy + cy * this.grid + this.grid/2 };
        }

        getCellRect(cx, cy, inset = 0) {
            const ox = this.fieldOffsetX || 0;
            const oy = this.fieldOffsetY || 0;
            const safeInset = Math.max(0, Math.min(this.grid / 2, inset || 0));
            const left = ox + cx * this.grid + safeInset;
            const top = oy + cy * this.grid + safeInset;
            const right = ox + (cx + 1) * this.grid - safeInset;
            const bottom = oy + (cy + 1) * this.grid - safeInset;
            return { left, top, right, bottom };
        }

        cellKey(cx, cy) { return `${cx},${cy}`; }

        buildPathForbiddenSet(path) {
            const set = new Set();
            const pathCells = this.collectPathCells(path);

            for (const cell of pathCells) {
                set.add(this.cellKey(cell.cx, cell.cy));
            }

            return set;
        }

        isCellFreeForTower(cx, cy) {
            // границы
            if (cx < 0 || cy < 0) return false;
            // if (cx >= p.width / this.grid || cy >= p.height / this.grid) return false;
            if (cx >= this.cols || cy >= this.rows) return false;

            const specialTile = this.getSpecialBuildTile(cx, cy);
            if (specialTile?.buildBlocked) return false;

            // запрещено на пути
            if (this.pathForbidden.has(this.cellKey(cx, cy))) return false;

            // не ставим друг на друга
            for (const t of this.towers) {
                const tc = this.worldToCell(t.x, t.y);
                if (tc.cx === cx && tc.cy === cy) return false;
            }
            return true;
        }

        refreshTowerBuffsImmediate() {
            for (const tower of this.towers) {
                if (!tower?.updateBuffs) continue;
                tower.buffRefreshTimer = 0;
                tower.updateBuffs(this.towers, 0);
            }
        }

        getBasePosition() {
            const points = this.path?.points;
            return points?.[points.length - 1] || null;
        }

        getBaseHoverRadius() {
            return 30;
        }

        beginFieldScissor() {
            const gl = p?._renderer?.GL || p?.drawingContext;
            if (!gl?.enable || !gl?.scissor) return null;

            const density = p.pixelDensity ? p.pixelDensity() : 1;
            const fieldH = Math.max(0, Math.min(this.fieldHeight ?? p.height, p.height));

            gl.enable(gl.SCISSOR_TEST);
            gl.scissor(
                0,
                Math.round((p.height - fieldH) * density),
                Math.round(FIELD_WIDTH * density),
                Math.round(fieldH * density)
            );
            return { gl };
        }

        endFieldScissor(state) {
            const gl = state?.gl;
            if (!gl) return;
            gl.disable?.(gl.SCISSOR_TEST);
        }

        isBaseHovered() {
            if (!p.gameStarted || p.gameEnded) return false;
            if (p.menu?.settingModal || this.waitingEndChoice || this.paused) return false;
            if (p.mouseX >= FIELD_WIDTH) return false;
            if (p.mouseY < 0 || p.mouseY > (this.fieldHeight ?? p.height)) return false;

            const mode = this.upgradeMode;
            if (mode && mode.kind !== "base") return false;

            const base = this.getBasePosition();
            if (!base) return false;
            return Math.hypot(p.mouseX - base.x, p.mouseY - base.y) <= this.getBaseHoverRadius();
        }

        getBaseHealCost() {
            return this.baseHealBaseCost + this.baseHealCount * this.baseHealCostStep;
        }

        canHealBase() {
            return this.lives < this.maxLives && this.money >= this.getBaseHealCost();
        }

        isCellInsideGrid(cx, cy) {
            return cx >= 0 && cy >= 0 && cx < this.cols && cy < this.rows;
        }

        getTowerAtCell(cx, cy) {
            if (!this.isCellInsideGrid(cx, cy)) return null;

            for (const tower of this.towers) {
                if (!tower) continue;
                const towerCx = Number.isFinite(tower.cellX) ? tower.cellX : this.worldToCell(tower.x, tower.y).cx;
                const towerCy = Number.isFinite(tower.cellY) ? tower.cellY : this.worldToCell(tower.x, tower.y).cy;
                if (towerCx === cx && towerCy === cy) {
                    return tower;
                }
            }

            return null;
        }

        circleIntersectsRect(x, y, radius, rect) {
            if (!rect || !Number.isFinite(radius) || radius <= 0) return false;
            const closestX = Math.max(rect.left, Math.min(x, rect.right));
            const closestY = Math.max(rect.top, Math.min(y, rect.bottom));
            const dx = x - closestX;
            const dy = y - closestY;
            return dx * dx + dy * dy <= radius * radius;
        }

        isSupportAuraAffectingCell(supportX, supportY, supportRange, cx, cy, coverageThreshold = 0.2) {
            if (!Number.isFinite(supportX) || !Number.isFinite(supportY)) return false;
            if (!Number.isFinite(supportRange) || supportRange <= 0) return false;
            if (!this.isCellInsideGrid(cx, cy)) return false;

            const inset = Math.max(0, this.grid * Math.max(0, coverageThreshold || 0));
            const rect = this.getCellRect(cx, cy, inset);
            return this.circleIntersectsRect(supportX, supportY, supportRange, rect);
        }

        isSupportAuraAffectingTower(supportTower, targetTower, coverageThreshold = 0.2) {
            if (!supportTower || !targetTower) return false;

            const cx = Number.isFinite(targetTower.cellX)
                ? targetTower.cellX
                : this.worldToCell(targetTower.x, targetTower.y).cx;
            const cy = Number.isFinite(targetTower.cellY)
                ? targetTower.cellY
                : this.worldToCell(targetTower.x, targetTower.y).cy;
            const supportRange = Number.isFinite(supportTower.range)
                ? supportTower.range
                : supportTower.type?.levels?.[supportTower.level - 1]?.range;

            return this.isSupportAuraAffectingCell(
                supportTower.x,
                supportTower.y,
                supportRange,
                cx,
                cy,
                coverageThreshold
            );
        }

        isTowerAuraRelevantCell(cx, cy) {
            if (!this.isCellInsideGrid(cx, cy)) return false;
            if (this.pathForbidden?.has(this.cellKey(cx, cy))) return false;

            const specialTile = this.getSpecialBuildTile(cx, cy);
            if (specialTile?.buildBlocked) return false;

            return true;
        }

        getSupportAffectedCells(supportTower) {
            if (!supportTower || supportTower.type?.id !== "support") return [];

            const supportRange = Number.isFinite(supportTower.range)
                ? supportTower.range
                : supportTower.type?.levels?.[supportTower.level - 1]?.range;
            if (!Number.isFinite(supportRange) || supportRange <= 0) return [];

            const supportCx = Number.isFinite(supportTower.cellX)
                ? supportTower.cellX
                : this.worldToCell(supportTower.x, supportTower.y).cx;
            const supportCy = Number.isFinite(supportTower.cellY)
                ? supportTower.cellY
                : this.worldToCell(supportTower.x, supportTower.y).cy;
            const cells = [];

            for (let cy = 0; cy < this.rows; cy++) {
                for (let cx = 0; cx < this.cols; cx++) {
                    if (cx === supportCx && cy === supportCy) continue;
                    if (!this.isTowerAuraRelevantCell(cx, cy)) continue;
                    if (!this.isSupportAuraAffectingCell(supportTower.x, supportTower.y, supportRange, cx, cy)) continue;
                    cells.push({ cx, cy, tower: this.getTowerAtCell(cx, cy) });
                }
            }

            return cells;
        }

        getTileActionIcon(tileType) {
            if (!tileType) return p.icons.upgrade;
            if (Number.isFinite(tileType.damageMult) && tileType.damageMult !== 1) return p.icons.damage;
            if (Number.isFinite(tileType.rangeMult) && tileType.rangeMult !== 1) return p.icons.range;
            if (Number.isFinite(tileType.fireRateMult) && tileType.fireRateMult !== 1) return p.icons.fireRate;
            if (Number.isFinite(tileType.killGoldBonus) && tileType.killGoldBonus > 0) return p.icons.gold;
            return p.icons.upgrade;
        }

        getTileDisplayName(tileTypeId) {
            if (!tileTypeId) return "";
            return p.t(`tile.${tileTypeId}.name`);
        }

        formatSignedPercent(mult) {
            const pct = Math.round(((mult ?? 1) - 1) * 100);
            return pct > 0 ? `+${pct}%` : `${pct}%`;
        }

        resolveSupportAuraModifier(current = 1, candidate = 1) {
            const safeCurrent = Number.isFinite(current) ? current : 1;
            const safeCandidate = Number.isFinite(candidate) ? candidate : 1;
            if (safeCandidate === 1) return safeCurrent;
            if (safeCurrent === 1) return safeCandidate;
            if (safeCurrent > 1 && safeCandidate > 1) return Math.max(safeCurrent, safeCandidate);
            if (safeCurrent < 1 && safeCandidate < 1) return Math.min(safeCurrent, safeCandidate);
            return safeCurrent > 1 ? safeCurrent : safeCandidate;
        }

        getSupportTileAuraEffects(tileOrId) {
            const tile = typeof tileOrId === "string"
                ? p.BUILD_SPECIAL_TILE_TYPES?.[tileOrId]
                : tileOrId;
            if (!tile) {
                return {
                    auraRangeMult: 1,
                    rangeBoostBonus: 0,
                    fireRateMult: 1,
                    damageMult: 1,
                    goldChance: 0,
                    goldBonus: 0
                };
            }

            const hasRangeModifier = Number.isFinite(tile.rangeMult) && tile.rangeMult !== 1;
            const auraRangeMult = hasRangeModifier
                ? (tile.rangeMult > 1 ? 1.1 : 0.9)
                : 1;
            const rangeBoostBonus = hasRangeModifier
                ? (tile.rangeMult > 1 ? 0.04 : -0.04)
                : 0;

            const fireRateMult = Number.isFinite(tile.fireRateMult) && tile.fireRateMult !== 1
                ? (tile.fireRateMult > 1 ? 1.04 : 0.96)
                : 1;
            const damageMult = Number.isFinite(tile.damageMult) && tile.damageMult !== 1
                ? (tile.damageMult > 1 ? 1.05 : 0.95)
                : 1;

            return {
                auraRangeMult,
                rangeBoostBonus,
                fireRateMult,
                damageMult,
                goldChance: Number.isFinite(tile.killGoldBonus) && tile.killGoldBonus > 0 ? 0.075 : 0,
                goldBonus: Number.isFinite(tile.killGoldBonus) && tile.killGoldBonus > 0 ? 1 : 0
            };
        }

        getSupportRangeBoostMult(baseBoost = 1, tileOrId) {
            const safeBaseBoost = Number.isFinite(baseBoost) ? baseBoost : 1;
            const effects = this.getSupportTileAuraEffects(tileOrId);
            return Math.max(0, safeBaseBoost + (effects.rangeBoostBonus || 0));
        }

        getSupportTileAuraDescription(tileOrId) {
            const tile = typeof tileOrId === "string"
                ? p.BUILD_SPECIAL_TILE_TYPES?.[tileOrId]
                : tileOrId;
            if (!tile) return "";

            const effects = this.getSupportTileAuraEffects(tile);
            if (effects.damageMult !== 1) {
                return p.t("stat.tile_damage", { value: this.formatSignedPercent(effects.damageMult) });
            }
            if (effects.fireRateMult !== 1) {
                return p.t("stat.tile_fire_rate", { value: this.formatSignedPercent(effects.fireRateMult) });
            }
            if (effects.auraRangeMult !== 1 || effects.rangeBoostBonus !== 0) {
                return p.t("stat.support_range_tile", {
                    aura: this.formatSignedPercent(effects.auraRangeMult),
                    buff: this.formatSignedPercent(1 + (effects.rangeBoostBonus || 0))
                });
            }
            if (effects.goldChance > 0 && effects.goldBonus > 0) {
                return p.t("stat.aura_gold_bonus", {
                    chance: `${Math.round(effects.goldChance * 1000) / 10}%`,
                    value: effects.goldBonus
                });
            }
            return "";
        }

        getTileEffectDescription(tileTypeId) {
            const tile = p.BUILD_SPECIAL_TILE_TYPES?.[tileTypeId];
            if (!tile) return "";

            if (Number.isFinite(tile.damageMult) && tile.damageMult !== 1) {
                return p.t("stat.tile_damage", { value: this.formatSignedPercent(tile.damageMult) });
            }
            if (Number.isFinite(tile.rangeMult) && tile.rangeMult !== 1) {
                return p.t("stat.tile_range", { value: this.formatSignedPercent(tile.rangeMult) });
            }
            if (Number.isFinite(tile.fireRateMult) && tile.fireRateMult !== 1) {
                return p.t("stat.tile_fire_rate", { value: this.formatSignedPercent(tile.fireRateMult) });
            }
            if (Number.isFinite(tile.killGoldBonus) && tile.killGoldBonus > 0) {
                return p.t("stat.tile_gold", { value: Math.round(tile.killGoldBonus) });
            }
            if (tile.buildBlocked) {
                return p.t("tooltip.tile_effect_blocked");
            }

            return this.getTileDisplayName(tileTypeId);
        }

        getTileBuyCost(tileTypeId) {
            return this.tileActionCosts?.positive?.[tileTypeId] ?? 60;
        }

        getTileClearCost(tile) {
            return tile?.buildBlocked
                ? (this.tileActionCosts?.clearBlocked ?? 65)
                : (this.tileActionCosts?.clearNegative ?? 45);
        }

        getTileMenuActions(cx, cy) {
            if (!this.isCellInsideGrid(cx, cy)) return [];
            if (this.pathForbidden?.has(this.cellKey(cx, cy))) return [];

            const currentTile = this.getSpecialBuildTile(cx, cy);
            if (currentTile?.kind === "negative") {
                return [{
                    id: "clear_tile",
                    action: "clear_tile",
                    icon: p.icons.sell,
                    cost: this.getTileClearCost(currentTile),
                    tileTypeId: currentTile.id,
                    cx,
                    cy
                }];
            }

            if (currentTile) return [];

            const actions = [];
            for (const tileTypeId of this.buyablePositiveTileIds || []) {
                const tileType = p.BUILD_SPECIAL_TILE_TYPES?.[tileTypeId];
                if (!tileType) continue;

                actions.push({
                    id: `buy_${tileType.id}`,
                    action: "buy_tile",
                    icon: this.getTileActionIcon(tileType),
                    cost: this.getTileBuyCost(tileType.id),
                    tileTypeId: tileType.id,
                    cx,
                    cy
                });
            }

            return actions;
        }

        openTileMenu(cx, cy, options = {}) {
            const actions = this.getTileMenuActions(cx, cy);
            const tile = this.getSpecialBuildTile(cx, cy);
            if (actions.length <= 0 && !tile) return false;

            const pos = this.cellCenter(cx, cy);
            this.selectedTowerType = null;
            this.buildMode = null;
            this.upgradeMode = {
                kind: options.kind || "tile",
                tower: options.tower || null,
                cx,
                cy,
                x: options.x ?? pos.x,
                y: options.y ?? pos.y,
                radius: options.radius ?? 42,
                showTileInfo: options.showTileInfo ?? !!tile
            };
            return true;
        }

        openTowerTileMenu(tower) {
            if (!tower) return false;

            const cx = Number.isFinite(tower.cellX) ? tower.cellX : this.worldToCell(tower.x, tower.y).cx;
            const cy = Number.isFinite(tower.cellY) ? tower.cellY : this.worldToCell(tower.x, tower.y).cy;

            return this.openTileMenu(cx, cy, {
                kind: "tower_tile",
                tower,
                x: tower.x,
                y: tower.y,
                radius: 36
            });
        }

        applySpecialTileAtCell(cx, cy, tileTypeId) {
            const tileType = p.BUILD_SPECIAL_TILE_TYPES?.[tileTypeId];
            if (!tileType || !this.isCellInsideGrid(cx, cy)) return false;

            const pos = this.cellCenter(cx, cy);
            this.specialBuildTiles.set(this.cellKey(cx, cy), {
                ...tileType,
                goldEarned: 0,
                cx,
                cy,
                x: pos.x,
                y: pos.y
            });
            return true;
        }

        handleSpecialBuildTilesChanged() {
            this.updateSpecialBuildTileSignature();
            this._fieldStaticGfx = null;
            this._fieldGridGfx = null;
            this._fieldLayerKey = "";
            this._towerStatsPanelNextRefresh = 0;
            this.refreshTowerBuffsImmediate();
        }

        isUpgradeMenuItemAffordable(item, mode = this.upgradeMode) {
            if (!item) return false;
            if (item.id === "sell") return true;
            if (item.id === "heal") return this.canHealBase();

            const cost = Math.max(0, item.cost ?? 0);
            return this.money >= cost;
        }

        getUpgradeMenuTooltip(item, mode = this.upgradeMode) {
            if (!item) return null;

            if (item.id === "tile_actions") {
                return {
                    title: p.t("tooltip.tile_actions.title"),
                    text: p.t("tooltip.tile_actions.text"),
                    side: mode?.kind === "tower" ? "left" : "top"
                };
            }

            if (item.action === "buy_tile") {
                const effectText = this.getTileEffectDescription(item.tileTypeId);
                const supportEffectText = this.getSupportTileAuraDescription(item.tileTypeId);
                const isSupportTowerMenu = mode?.tower?.type?.id === "support";
                const detail = isSupportTowerMenu && supportEffectText
                    ? p.t("tooltip.support_tile_effect_prefix", { name: p.t("tower.support"), value: supportEffectText })
                    : p.t("tooltip.tile_effect_prefix", { value: effectText });
                return {
                    title: p.t("tooltip.tile_buy.title"),
                    text: p.t("tooltip.tile_buy.text", {
                        tile: this.getTileDisplayName(item.tileTypeId)
                    }),
                    detail,
                    side: mode?.kind === "tower_tile"
                        ? "left"
                        : mode?.kind === "tile"
                            ? "bottom"
                            : "top"
                };
            }

            if (item.action === "clear_tile") {
                const effectText = this.getTileEffectDescription(item.tileTypeId);
                const supportEffectText = this.getSupportTileAuraDescription(item.tileTypeId);
                const isSupportTowerMenu = mode?.tower?.type?.id === "support";
                const detail = isSupportTowerMenu && supportEffectText
                    ? p.t("tooltip.support_tile_effect_prefix", { name: p.t("tower.support"), value: supportEffectText })
                    : p.t("tooltip.tile_effect_prefix", { value: effectText });
                return {
                    title: p.t("tooltip.tile_clear.title"),
                    text: p.t("tooltip.tile_clear.text", {
                        tile: this.getTileDisplayName(item.tileTypeId)
                    }),
                    detail,
                    side: mode?.kind === "tower_tile"
                        ? "left"
                        : mode?.kind === "tile"
                            ? "bottom"
                            : "top"
                };
            }

            return null;
        }

        drawTileActionsButtonIcon(x, y, affordable = true, hovered = false) {
            const alpha = affordable ? (hovered ? 255 : 230) : 165;
            const strokeAlpha = affordable ? (hovered ? 255 : 220) : 150;

            p.push();
                p.noFill();
                p.stroke(225, 240, 255, strokeAlpha);
                p.strokeWeight(1.7);
                p.rectMode(p.CENTER);

                const size = 5.2;
                const gap = 5.8;
                const offsets = [
                    [-gap, -gap],
                    [ gap, -gap],
                    [-gap,  gap],
                    [ gap,  gap]
                ];

                for (const [ox, oy] of offsets) {
                    p.rect(x + ox, y + oy, size, size, 1.6);
                }

                p.noStroke();
                p.fill(132, 210, 255, alpha);
                p.circle(x + gap, y - gap, 3.6);
            p.pop();
        }

        drawTileClearButtonIcon(x, y, affordable = true, hovered = false) {
            const strokeAlpha = affordable ? (hovered ? 255 : 230) : 150;

            p.push();
                p.noFill();
                p.stroke(255, 224, 224, strokeAlpha);
                p.strokeWeight(1.9);
                p.rectMode(p.CENTER);
                p.rect(x, y, 11.5, 11.5, 2.5);

                p.stroke(255, 108, 108, strokeAlpha);
                p.strokeWeight(2.8);
                p.line(x - 4.2, y - 4.2, x + 4.2, y + 4.2);
                p.strokeWeight(1.8);
                p.line(x + 1.8, y - 5.2, x + 5.6, y - 1.4);
                p.line(x - 5.6, y + 1.4, x - 1.8, y + 5.2);
            p.pop();
        }

        getUpgradeMenuTooltipLayout(panel) {
            const boxW = 244;
            const pad = 10;
            const bodySize = 12;
            const headerH = 28;
            const lineH = 14;
            const textMaxW = boxW - pad * 2;
            const wrapText = (text = "") => {
                const source = `${text}`.trim();
                if (!source) return [];

                const lines = [];
                p.textSize(bodySize);
                const paragraphs = source.split(/\n+/);
                for (const paragraph of paragraphs) {
                    const words = paragraph.split(/\s+/).filter(Boolean);
                    if (words.length === 0) {
                        lines.push("");
                        continue;
                    }
                    let current = "";
                    for (const word of words) {
                        const next = current ? `${current} ${word}` : word;
                        if (current && p.textWidth(next) > textMaxW) {
                            lines.push(current);
                            current = word;
                        } else {
                            current = next;
                        }
                    }
                    if (current) lines.push(current);
                }
                return lines;
            };

            p.push();
                p.textFont(p.variables.textFontFontick);
                const bodyLines = wrapText(panel.text || "");
                const detailLines = wrapText(panel.detail || "");
                const bodyBlockH = Math.max(lineH, bodyLines.length * lineH);
                const detailBlockH = detailLines.length > 0 ? detailLines.length * lineH + 4 : 0;
                const boxH = headerH + pad + bodyBlockH + (detailBlockH > 0 ? detailBlockH + 4 : 0) + pad;
            p.pop();

            return {
                boxW,
                boxH,
                pad,
                bodySize,
                headerH,
                lineH,
                bodyLines,
                detailLines
            };
        }

        isPopupHovered(x, y, w, h) {
            return (
                p.mouseX >= x &&
                p.mouseX <= x + w &&
                p.mouseY >= y &&
                p.mouseY <= y + h
            );
        }

        drawUpgradeMenuTooltip(panel, x, y) {
            if (!panel) return;

            const titleSize = 13;
            const {
                boxW,
                boxH,
                pad,
                bodySize,
                headerH,
                lineH,
                bodyLines,
                detailLines
            } = this.getUpgradeMenuTooltipLayout(panel);

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 8);
                p.textFont(p.variables.textFontFontick);
                p.textAlign(p.LEFT, p.TOP);
                p.rectMode(p.CORNER);
                p.textLeading(14);

                let tx = x - boxW / 2;
                let ty = y - boxH - 14;
                if (panel.side === "left") {
                    tx = x - boxW - 18;
                    ty = y - boxH / 2;
                } else if (panel.side === "right") {
                    tx = x + 18;
                    ty = y - boxH / 2;
                } else if (panel.side === "bottom") {
                    tx = x - boxW / 2;
                    ty = y + 28;
                }

                tx = Math.max(10, Math.min(FIELD_WIDTH - boxW - 10, tx));
                ty = Math.max(10, Math.min((this.fieldHeight ?? p.height) - boxH - 10, ty));
                const hovered = this.isPopupHovered(tx, ty, boxW, boxH);
                const bgAlphaScale = hovered ? 0.28 : 1;
                const textAlphaScale = hovered ? 0.6 : 1;

                p.noStroke();
                p.fill(16, 22, 34, 236 * bgAlphaScale);
                p.rect(tx, ty, boxW, boxH, 8);

                const headerColor = panel.headerColor || [58, 108, 176];
                p.fill(headerColor[0], headerColor[1], headerColor[2], 160 * bgAlphaScale);
                p.rect(tx, ty, boxW, headerH, 8, 8, 0, 0);

                p.fill(255, 255, 255, 255 * textAlphaScale);
                p.textSize(titleSize);
                p.text(panel.title || "", tx + pad, ty + 7);

                p.fill(220, 230, 240, 255 * textAlphaScale);
                p.textSize(bodySize);
                let textY = ty + headerH + pad - 2;
                for (const line of bodyLines) {
                    p.text(line, tx + pad, textY);
                    textY += lineH;
                }
                if (detailLines.length > 0) {
                    p.fill(150, 214, 255, 255 * textAlphaScale);
                    textY += 4;
                    for (const line of detailLines) {
                        p.text(line, tx + pad, textY);
                        textY += lineH;
                    }
                }
            p.pop();
        }

        getTileInfoPanelData(cx, cy) {
            const tile = this.getSpecialBuildTile(cx, cy);
            if (!tile) return null;

            let detail = p.t("tooltip.tile_effect_prefix", {
                value: this.getTileEffectDescription(tile.id)
            });
            const supportEffectText = this.getSupportTileAuraDescription(tile);
            if (supportEffectText) {
                detail += `\n${p.t("tooltip.support_tile_effect_prefix", {
                    name: p.t("tower.support"),
                    value: supportEffectText
                })}`;
            }
            if (Number.isFinite(tile.killGoldBonus) && tile.killGoldBonus > 0) {
                detail += ` ${p.t("stat.tile_gold_earned", {
                    value: Math.round(tile.goldEarned ?? 0)
                })}`;
            }

            return {
                title: p.t(tile.kind === "negative" ? "tile.info.debuff" : "tile.info.buff"),
                text: this.getTileDisplayName(tile.id),
                detail,
                kind: tile.kind || "positive",
                headerColor: tile.kind === "negative" ? [196, 82, 82] : [58, 108, 176],
                side: "top"
            };
        }

        drawTileInfoPanel(cx, cy) {
            const panel = this.getTileInfoPanelData(cx, cy);
            if (!panel) return;
            const tilePos = this.cellCenter(cx, cy);
            this.drawUpgradeMenuTooltip(panel, tilePos.x, tilePos.y);
        }

        getBuildHoverTileInfoSide(anchorX, anchorY, panel) {
            const { boxW, boxH } = this.getUpgradeMenuTooltipLayout(panel);
            const margin = 10;
            const fieldH = this.fieldHeight ?? p.height;
            const canRight = anchorX + 18 + boxW <= FIELD_WIDTH - margin;
            const canLeft = anchorX - 18 - boxW >= margin;
            const canBottom = anchorY + 28 + boxH <= fieldH - margin;
            const canTop = anchorY - 14 - boxH >= margin;
            const preferRight = anchorX < FIELD_WIDTH * 0.5;

            if (preferRight && canRight) return "right";
            if (!preferRight && canLeft) return "left";
            if (canRight) return "right";
            if (canLeft) return "left";
            if (canBottom) return "bottom";
            if (canTop) return "top";

            return preferRight ? "right" : "left";
        }

        drawSelectedTowerHoverTileInfo() {
            if (!this.selectedTowerType) return;
            if (p.mouseX >= FIELD_WIDTH) return;

            const { cx, cy } = this.worldToCell(p.mouseX, p.mouseY);
            const panel = this.getTileInfoPanelData(cx, cy);
            if (!panel) return;

            const pos = this.cellCenter(cx, cy);
            this.drawUpgradeMenuTooltip(
                {
                    ...panel,
                    side: this.getBuildHoverTileInfoSide(pos.x, pos.y, panel)
                },
                pos.x,
                pos.y
            );
        }

        executeUpgradeMenuAction(item, mode = this.upgradeMode) {
            if (!item || !mode) return false;
            const tower = mode.tower;

            if (item.id === "upgrade") {
                if (this.money < item.cost || !tower) return true;
                this.money -= item.cost;
                tower.upgrade();
                this.refreshTowerBuffsImmediate();
                this._towerDamagePanelDirty = true;
                this.playTowerUpgradeSound(tower.level - 1);
                return true;
            }

            if (item.id === "heal") {
                const healValue = Math.min(
                    this.baseHealAmount,
                    Math.max(0, (this.maxLives || 0) - this.lives)
                );
                if (this.money < item.cost || healValue <= 0) return true;
                this.money -= item.cost;
                this.lives = Math.min(this.maxLives || this.lives + healValue, this.lives + healValue);
                this.baseHealCount += 1;

                const base = this.getBasePosition() || { x: mode.x, y: mode.y };
                this.upgradePopups.push(
                    new TowerUpgradePopup(
                        base.x,
                        base.y - 26,
                        p.t("base.heal_amount", { value: healValue })
                    )
                );
                this.playBaseHealSound();
                return true;
            }

                    if (item.id === "sell") {
                        if (!tower) return true;
                        this.money += item.cost;
                        this.spawnGoldPopup(tower.x, tower.y - 20, item.cost);
                        this.towers = this.towers.filter(tt => tt !== tower);
                        this._towerProgressVersion = (this._towerProgressVersion || 0) + 1;
                        this._towerPanelDirty = true;
                this._towerDamagePanelDirty = true;
                this.refreshTowerBuffsImmediate();
                this.playTowerSellSound();
                return true;
            }

            if (item.id === "tile_actions") {
                if (!tower) return true;
                return this.openTowerTileMenu(tower);
            }

            const cx = item.cx ?? mode.cx;
            const cy = item.cy ?? mode.cy;

            if (item.action === "clear_tile") {
                const tile = this.getSpecialBuildTile(cx, cy);
                if (!tile || tile.kind !== "negative") return true;
                if (this.money < item.cost) return true;
                this.money -= item.cost;
                this.specialBuildTiles.delete(this.cellKey(cx, cy));
                this.handleSpecialBuildTilesChanged();
                this.playTowerBuildSound();
                return true;
            }

            if (item.action === "buy_tile") {
                if (this.getSpecialBuildTile(cx, cy)) return true;
                if (this.money < item.cost) return true;
                if (!this.applySpecialTileAtCell(cx, cy, item.tileTypeId)) return true;
                this.money -= item.cost;
                this.handleSpecialBuildTilesChanged();
                this.playTowerBuildSound();
                return true;
            }

            return false;
        }

        getUpgradeMenuItems(mode = this.upgradeMode) {
            if (!mode) return [];

            if (mode.kind === "base") {
                return [{
                    id: "heal",
                    icon: p.icons.heal,
                    cost: this.getBaseHealCost()
                }];
            }

            if (mode.kind === "tile") {
                return this.getTileMenuActions(mode.cx, mode.cy);
            }

            if (mode.kind === "tower_tile") {
                return this.getTileMenuActions(mode.cx, mode.cy);
            }

            const tower = mode.tower;
            if (!tower) return [];

            const types = [];
            if (tower.level < tower.maxLevel) {
                types.push({
                    id: "upgrade",
                    cost: tower.upgradeCost()
                });
            }

            const towerCx = Number.isFinite(tower.cellX) ? tower.cellX : this.worldToCell(tower.x, tower.y).cx;
            const towerCy = Number.isFinite(tower.cellY) ? tower.cellY : this.worldToCell(tower.x, tower.y).cy;
            if (this.getTileMenuActions(towerCx, towerCy).length > 0) {
                types.push({
                    id: "tile_actions",
                    icon: p.icons.upgrade
                });
            }

            types.push({
                id: "sell",
                cost: tower.sellValue()
            });

            return types;
        }

        getUpgradeMenuCenter(mode = this.upgradeMode) {
            if (!mode) return null;

            const radius = mode.radius ?? 36;
            const pad = radius + 20;
            const useCanvasBounds = mode.kind === "tower" || mode.kind === "tower_tile";
            const maxX = mode.kind === "base"
                ? Math.max(pad, FIELD_WIDTH - pad)
                : mode.kind === "tile"
                    ? Math.max(pad, FIELD_WIDTH - pad)
                : Math.max(pad, (useCanvasBounds ? p.width : FIELD_WIDTH) - pad);
            const maxY = Math.max(
                pad,
                ((useCanvasBounds ? p.height : (this.fieldHeight ?? p.height)) - pad)
            );
            return {
                x: Math.max(pad, Math.min(maxX, mode.x)),
                y: Math.max(pad, Math.min(maxY, mode.y))
            };
        }

        getUpgradeMenuItemAngle(mode, types, index) {
            const item = types[index];
            const defaultAngle = -Math.PI / 2 + index * ((Math.PI * 2) / Math.max(1, types.length));

            if (types.length === 1) {
                if (mode.kind === "base") return -Math.PI / 2;
                if (mode.kind === "tower_tile") return -Math.PI / 2;
                return Math.PI / 2;
            }

            if (mode.kind === "tower") {
                if (item.id === "upgrade") return -Math.PI / 2;
                if (item.id === "tile_actions") return 0;
                if (item.id === "sell") return Math.PI / 2;
            }

            if (types.length === 2) {
                if (types.some(entry => entry.id === "tile_actions")) {
                    if (item.id === "tile_actions") return 0;
                    if (item.id === "sell") return Math.PI / 2;
                    if (item.id === "upgrade") return -Math.PI / 2;
                }
                return item.id === "upgrade" ? -Math.PI / 2 : Math.PI / 2;
            }

            return defaultAngle;
        }

        handleClick(x, y) {
            // привязка к сетке
            // if (this.buildMode || this.upgradeMode) return;
            // if (!this.selectedTowerType || this.upgradeMode) return;
            if (this.upgradeMode) return;
            if (p.mouseButton !== p.LEFT) return;

            let clickedTower = null;
            let clickedTowerDist = Infinity;
            for (const t of this.towers) {
                if (!t) continue;
                const d = Math.hypot(t.x - x, t.y - y);
                const hitRadius = typeof t.getHoverRadius === "function"
                    ? t.getHoverRadius()
                    : Math.max(14, Math.min(t.w || 0, t.h || 0) * 0.48);
                if (d <= hitRadius && d < clickedTowerDist) {
                    clickedTower = t;
                    clickedTowerDist = d;
                }
            }

            if (clickedTower) {
                this.selectedTowerType = null;
                this.openUpgradeMenu(clickedTower);
                return;
            }

            const basePos = this.getBasePosition();
            if (basePos) {
                const dBase = Math.hypot(basePos.x - x, basePos.y - y);
                if (dBase <= this.getBaseHoverRadius()) {
                    this.selectedTowerType = null;
                    this.openBaseMenu();
                    return;
                }
            }

            if (!this.selectedTowerType) {
                if (x >= FIELD_WIDTH) return;

                const { cx, cy } = this.worldToCell(x, y);
                if (this.getTowerAtCell(cx, cy)) return;
                if (!this.getSpecialBuildTile(cx, cy)) return;
                this.openTileMenu(cx, cy);
                return;
            }

            // 3️⃣ КЛИК ТОЛЬКО В ПОЛЕ
            if (x >= FIELD_WIDTH) return;

            const { cx, cy } = this.worldToCell(x, y);
            if (!this.isCellFreeForTower(cx, cy)) return;

            const towerType = p.TOWER_TYPES[this.selectedTowerType];
            if (!this.canBuildTowerType(towerType)) {
                this.selectedTowerType = null;
                this.buildMode = null;
                return;
            }
            const buildCost = this.getTowerBuildCost(towerType.id);
            if (this.money < buildCost) {
                this.buildMode = null;
                return;
            }

            const pos = this.cellCenter(cx, cy);

            this.buildMode = {
                cx,
                cy,
                x: pos.x,
                y: pos.y,
                radius: 36,
            
                // добавляем координаты клетки и центра
                cellX: cx,
                cellY: cy,
                towerX: pos.x,
                towerY: pos.y,
            };

            this.money -= buildCost;
            const towerNumber = this.getNextTowerInstanceNumber(towerType.id);
            const tower = new Tower(pos.x, pos.y, towerType, this, towerNumber);
            tower.cellX = cx;
            tower.cellY = cy;
            tower.maxLevel = Math.max(1, this.getTowerMaxLevel(towerType.id));
            tower.specialBuildTile = this.getSpecialBuildTile(cx, cy);
            this.towers.push(tower);
            this.playTowerBuildSound();
            this._towerProgressVersion = (this._towerProgressVersion || 0) + 1;
            this._towerPanelDirty = true;
            this.refreshTowerBuffsImmediate();

            this.buildMode = null;
            this.selectedTowerType = null;
        }

        collectLootChestReward(chest, { playSound = true, showPopups = true } = {}) {
            if (!chest?.collect?.()) return false;

            if (playSound) {
                this.playChestPickupSound();
            }

            const upgradeOptions = this.getChestUpgradeOptions();
            let goldReward = 20;

            if (upgradeOptions.length > 0) {
                const pick = this.pickChestUpgradeOption(upgradeOptions, chest.sourceType);
                const granted = this.applyChestUpgrade(pick);
                if (granted) {
                    goldReward = 10;
                    if (showPopups) {
                        const towerName = p.TOWER_TYPES[pick.towerId]?.name || pick.towerId;
                        const text = pick.kind === "unlock"
                            ? p.t("chest.unlock", { tower: towerName })
                            : p.t("chest.level_up", { tower: towerName });
                        this.upgradePopups.push(
                            new TowerUpgradePopup(chest.x, chest.y - 26, text, pick.towerId)
                        );
                    }
                }
            }

            this.money += goldReward;
            if (showPopups) {
                this.spawnGoldPopup(chest.x, chest.y - 18, goldReward);
            }

            return true;
        }

        autoCollectAllLootChests({ playSound = true, showPopups = true } = {}) {
            let collectedCount = 0;

            for (let i = this.lootChests.length - 1; i >= 0; i--) {
                const chest = this.lootChests[i];
                if (!chest || chest.dead) continue;

                if (!this.collectLootChestReward(chest, { playSound: false, showPopups })) continue;
                collectedCount += 1;
            }

            if (collectedCount > 0 && playSound) {
                this.playChestPickupSound();
            }
            if (collectedCount > 0) {
                this.lootChests = this.lootChests.filter(chest => !chest.dead);
            }

            return collectedCount;
        }

        handleLootChestClick(x, y) {
            if (p.mouseButton !== p.LEFT) return false;
            if (x >= FIELD_WIDTH) return false;

            for (let i = this.lootChests.length - 1; i >= 0; i--) {
                const chest = this.lootChests[i];
                if (!chest || chest.dead) continue;

                const d = Math.hypot(chest.x - x, chest.y - y);
                if (d > chest.pickRadius) continue;

                return this.collectLootChestReward(chest);
            }

            return false;
        }

        openUpgradeMenu(tower) {
            this._towerStatsPanelGfx = null;
            this._towerStatsPanelState = null;
            this._towerStatsPanelNextRefresh = 0;
            this.upgradeMode = {
                kind: "tower",
                tower,
                x: tower.x,
                y: tower.y,
                radius: 36
            };
        }

        openBaseMenu() {
            const base = this.getBasePosition();
            if (!base) return;

            this.upgradeMode = {
                kind: "base",
                x: base.x,
                y: base.y,
                radius: 36
            };
        }

        drawUpgradeMenu() {
            if (!this.upgradeMode) return;
            const mode = this.upgradeMode;
            const { x, y, radius } = mode;
            const center = this.getUpgradeMenuCenter(mode);
            const cx = center?.x ?? x;
            const cy = center?.y ?? y;
            const tower = mode.tower;
            const types = this.getUpgradeMenuItems(mode);
            const showTileInfo = !!mode.showTileInfo && !!this.getSpecialBuildTile(mode.cx, mode.cy);
            if (types.length === 0 && !showTileInfo) return;

            const btnR = 14;
            let hover = -1;
            let hoverButton = null;
        
            if (types.length > 0) {
                p.push();
                    p.translate(-p.width/2, -p.height/2, 3);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(11);
                    const fieldClip = this.beginFieldScissor();
                    if (mode.kind === "tower" && tower?.type?.id === "support") {
                        const affectedCells = this.getSupportAffectedCells(tower);
                        p.rectMode(p.CENTER);
                        for (const cell of affectedCells) {
                            const tilePos = this.cellCenter(cell.cx, cell.cy);
                            const hasTower = !!cell.tower;

                            p.noStroke();
                            p.fill(
                                hasTower ? 110 : 90,
                                235,
                                hasTower ? 150 : 130,
                                hasTower ? 72 : 46
                            );
                            p.rect(tilePos.x, tilePos.y, this.grid * 0.78, this.grid * 0.78, 10);

                            p.noFill();
                            p.stroke(
                                hasTower ? 140 : 120,
                                255,
                                hasTower ? 190 : 170,
                                hasTower ? 205 : 145
                            );
                            p.strokeWeight(hasTower ? 2.2 : 1.4);
                            p.rect(tilePos.x, tilePos.y, this.grid * 0.78, this.grid * 0.78, 10);
                        }
                    }

                    p.noFill();
                    p.stroke(120, 200, 255, 120);
                    p.strokeWeight(2);
                    if (mode.kind === "tower" && tower?.type?.id === "orbital") {
                        p.rectMode(p.CORNER);
                        p.rect(0, 0, FIELD_WIDTH, this.fieldHeight);
                    } else if (mode.kind === "tower") {
                        p.circle(tower.x, tower.y, tower.range * 2);
                    } else if (mode.kind === "tile" || mode.kind === "tower_tile") {
                        p.rectMode(p.CENTER);
                        const tilePos = this.cellCenter(mode.cx, mode.cy);
                        p.rect(tilePos.x, tilePos.y, this.grid * 0.92, this.grid * 0.92, 10);
                    } else {
                        p.circle(x, y, this.getBaseHoverRadius() * 2.4);
                    }

                    p.fill(120, 200, 255, 25);
                    p.noStroke();
                    if (mode.kind === "tower" && tower?.type?.id === "orbital") {
                        p.rectMode(p.CORNER);
                        p.rect(0, 0, FIELD_WIDTH, this.fieldHeight);
                    } else if (mode.kind === "tower") {
                        p.circle(tower.x, tower.y, tower.range * 2);
                    } else if (mode.kind === "tile" || mode.kind === "tower_tile") {
                        p.rectMode(p.CENTER);
                        const tilePos = this.cellCenter(mode.cx, mode.cy);
                        p.rect(tilePos.x, tilePos.y, this.grid * 0.92, this.grid * 0.92, 10);
                    } else {
                        p.circle(x, y, this.getBaseHoverRadius() * 2.4);
                    }
                    this.endFieldScissor(fieldClip);
                    p.translate(0, 0, 3);

                    types.forEach((t, i) => {
                        const a = this.getUpgradeMenuItemAngle(mode, types, i);
                        const anchorX = (mode.kind === "base" && types.length === 1) ? x : cx;
                        const anchorY = (mode.kind === "base" && types.length === 1) ? y : cy;
                        const bx = anchorX + Math.cos(a) * radius;
                        const by = anchorY + Math.sin(a) * radius;
                        const affordable = this.isUpgradeMenuItemAffordable(t, mode);
                        const hovered = Math.hypot(p.mouseX - bx, p.mouseY - by) < btnR;
                        if (hovered) {
                            hover = i;
                            hoverButton = { item: t, x: bx, y: by };
                        }

                        const isSellAction = t.id === "sell";
                        const isHealAction = t.id === "heal";
                        const fillColor = !affordable
                            ? [92, 96, 108, 190]
                            : hovered
                                ? (isHealAction ? [120, 172, 126, 240] : [96, 126, 176, 240])
                                : (isHealAction ? [76, 116, 82, 228] : [68, 90, 126, 228]);
                        const strokeColor = !affordable
                            ? [170, 125, 125]
                            : (isHealAction ? [188, 255, 198] : [236, 244, 255]);

                        p.stroke(...strokeColor, hovered ? 235 : 195);
                        p.strokeWeight(1.6);
                        p.fill(...fillColor);
                        p.circle(bx, by, btnR * 2);

                        if (!affordable) {
                            p.tint(255, 100, 100, 160);
                        } else {
                            p.tint(255, 248, 238, 255);
                        }
                        if (isHealAction) {
                            p.noTint();
                            p.strokeWeight(3.6);
                            if (affordable) {
                                p.stroke(96, 255, 132, hovered ? 255 : 235);
                            } else {
                                p.stroke(255, 92, 92, 235);
                            }
                            p.line(bx, by - 6, bx, by + 6);
                            p.line(bx - 6, by, bx + 6, by);

                            const healLabel = `+${this.baseHealAmount}hp`;
                            const labelY = by - btnR - 8;
                            p.textSize(14);
                            const labelW = Math.max(42, p.textWidth(healLabel) + 12);
                            const labelH = 16;

                            p.noStroke();
                            p.fill(18, 24, 34, 220);
                            p.rectMode(p.CENTER);
                            p.rect(bx, labelY - labelH / 2 + 2, labelW, labelH, 5);

                            p.noStroke();
                            if (affordable) {
                                p.fill(96, 255, 132, 235);
                            } else {
                                p.fill(255, 108, 108, 210);
                            }
                            p.textAlign(p.CENTER, p.BOTTOM);
                            p.textSize(14);
                            p.text(healLabel, bx, labelY);
                        } else if (t.id === "upgrade") {
                            p.noFill();
                            p.strokeCap(p.ROUND);
                            p.strokeWeight(3.2);
                            p.stroke(
                                affordable ? 122 : 110,
                                affordable ? 242 : 125,
                                affordable ? 138 : 110,
                                hovered ? 255 : 220
                            );
                            p.line(bx, by + 5, bx, by - 3);
                            p.line(bx, by - 6, bx - 4, by - 2);
                            p.line(bx, by - 6, bx + 4, by - 2);
                        } else if (t.id === "sell") {
                            p.noFill();
                            p.strokeCap(p.ROUND);
                            p.strokeWeight(3.2);
                            p.stroke(
                                affordable ? 255 : 170,
                                affordable ? 96 : 125,
                                affordable ? 96 : 125,
                                hovered ? 255 : 220
                            );
                            p.line(bx - 5, by - 5, bx + 5, by + 5);
                            p.line(bx + 5, by - 5, bx - 5, by + 5);
                        } else if (t.id === "tile_actions") {
                            p.noTint();
                            this.drawTileActionsButtonIcon(bx, by, affordable, hovered);
                        } else if (t.id === "clear_tile") {
                            p.noTint();
                            this.drawTileClearButtonIcon(bx, by, affordable, hovered);
                        } else if (t.icon) {
                            p.imageMode(p.CENTER);
                            p.image(t.icon, bx, by , 20, 20);
                        }

                        p.textAlign(p.CENTER, p.TOP);
                        p.textSize(16);

                        if (!affordable)
                            p.fill(255, 0, 0);
                        else
                            p.fill(255, 220, 80);

                        if (Number.isFinite(t.cost)) {
                            const costText = t.id === "sell" ? `+${t.cost}` : `${t.cost}`;
                            p.text(costText, bx-10, by + 10);
                            if (p.goldTexture) {
                                p.tint(255, 255, 255, 255);
                                p.imageMode(p.CENTER);
                                p.image(p.goldTexture, bx + 10, by + 19, 14, 14);
                            } else {
                                p.noStroke();
                                p.fill(232, 188, 64);
                                p.circle(bx + 10, by + 19, 14);
                                p.fill(255, 225, 120);
                                p.circle(bx + 8.5, by + 17.5, 4.5);
                            }
                        }
                        p.tint(255, 255, 255, 255);

                    });

                p.pop();
            }
            this.upgradeHoverIndex = hover;
            if (mode.kind === "tower" && tower) {
                this.drawTowerStats(tower, x, y);
            }
            if (showTileInfo && mode.kind === "tile") {
                this.drawTileInfoPanel(mode.cx, mode.cy);
            }
            if (hoverButton) {
                const tooltip = this.getUpgradeMenuTooltip(hoverButton.item, mode);
                if (tooltip) {
                    this.drawUpgradeMenuTooltip(tooltip, hoverButton.x, hoverButton.y);
                }
            }
        }

        drawSelectedTowerGhost() {
            if (!this.selectedTowerType) return;
            if (p.mouseX >= FIELD_WIDTH) return;
            
            const { cx, cy } = this.worldToCell(p.mouseX, p.mouseY);
            // if (!this.isCellFreeForTower(cx, cy)) return;

            const pos = this.cellCenter(cx, cy);
            const t = p.TOWER_TYPES[this.selectedTowerType];
            const range = this.getBuildPreviewRange(t, cx, cy, pos.x, pos.y);
            const canBuild = this.isCellFreeForTower(cx, cy) && this.canBuildTowerType(t);

            p.push();
                p.translate(-p.width/2, -p.height/2, 2);

                // ─── радиус атаки ───
               if (canBuild) {
                    const fieldClip = this.beginFieldScissor();
                    p.noFill();
                    p.stroke(120, 200, 255, 120);
                    if (t.id === "orbital") {
                        p.rectMode(p.CORNER);
                        p.rect(0, 0, FIELD_WIDTH, this.fieldHeight);
                    } else {
                        p.circle(pos.x, pos.y, range * 2);
                    }
                    this.endFieldScissor(fieldClip);
                }

                // ─── призрак башни ───
                p.tint(canBuild ? 80 : 220, canBuild ? 200 : 80, 80, 160);
                p.noStroke();
                p.texture(t.texture[0]);
                p.rect(pos.x -t.w/2, pos.y -t.h/2, t.w, t.h);
                p.noTint();

                if (!canBuild) {
                    p.stroke(255, 80, 80, 180);
                    p.strokeWeight(4);
                    const s = this.grid * 0.7;
                    p.line(pos.x - s, pos.y - s, pos.x + s, pos.y + s);
                    p.line(pos.x + s, pos.y - s, pos.x - s, pos.y + s);
                }
            p.pop();
        }

        getBuildPreviewRange(towerType, cx, cy, x, y) {
            if (!towerType?.levels?.[0]) return 0;
            if (towerType.id === "orbital") return towerType.levels[0].range;

            let range = towerType.levels[0].range || 0;
            const specialTile = this.getSpecialBuildTile(cx, cy);
            if (Number.isFinite(specialTile?.rangeMult)) {
                const selfRangeMult = towerType.id === "support"
                    ? this.getSupportTileAuraEffects(specialTile).auraRangeMult
                    : specialTile.rangeMult;
                range *= selfRangeMult;
            }

            let bestRangeBoost = 1;
            for (const tower of this.towers) {
                if (tower?.type?.id !== "support") continue;

                const lvl = tower.type.levels?.[tower.level - 1];
                if (!lvl) continue;

                const supportAuraRange = Number.isFinite(tower.range) ? tower.range : lvl.range;
                if (!Number.isFinite(supportAuraRange) || supportAuraRange <= 0) continue;

                if (this.isSupportAuraAffectingCell(tower.x, tower.y, supportAuraRange, cx, cy)) {
                    bestRangeBoost = this.resolveSupportAuraModifier(
                        bestRangeBoost,
                        this.getSupportRangeBoostMult(lvl.rangeBoost || 1, tower.specialBuildTile)
                    );
                }
            }

            return range * bestRangeBoost;
        }

        canBuildTowerType(t) {
            if (!t) return false;
            if (!this.isTowerUnlocked(t.id)) return false;
            if (t.legendary && this.hasLegendaryTower()) return false;
            if (this.hasTowerTypeHardLimit(t.id)) {
                const limit = this.getTowerTypeLimit(t.id);
                const count = this.getTowerCountByType(t.id);
                if (count >= limit) return false;
            }
            return true;
        }

        hasLegendaryTower() {
            return this.towers.some(t => t?.type?.legendary);
        }

        initTowerProgression() {
            const keys = Object.keys(p.TOWER_TYPES);
            this.towerUnlocks = {};
            this.towerMaxLevels = {};
            this.chosenLegendaryId = this.pickLegendaryTowerId();
            this._unlockedTowerKeys = null;
            this._towerProgressVersion = (this._towerProgressVersion || 0) + 1;
            this._towerPanelDirty = true;

            for (const key of keys) {
                const isStarter = key === "basic" || key === "sniper";
                this.towerUnlocks[key] = isStarter;
                this.towerMaxLevels[key] = isStarter ? 1 : 0;
            }

            if (p.menu?.testLevelPickerEnabled && p.menu?.testUnlockAllTowersEnabled) {
                const testPool = ["basic", "pulse", "sniper", "cleaver", "multishot", "burn", "support", "slow", "rocket", "orbital", "singularity", "cat_revolver"];
                for (const id of testPool) {
                    this.towerUnlocks[id] = true;
                    this.towerMaxLevels[id] = 3;
                }
            }

        }

        pickLegendaryTowerId() {
            const legendaries = Object.keys(p.TOWER_TYPES).filter(
                key => p.TOWER_TYPES[key]?.legendary
            );
            if (legendaries.length === 0) return null;
            return legendaries[Math.floor(Math.random() * legendaries.length)];
        }

        isTowerUnlocked(id) {
            return !!this.towerUnlocks?.[id];
        }

        getUnlockedTowerKeys() {
            if (this._unlockedTowerKeys) return this._unlockedTowerKeys;
            this._unlockedTowerKeys = Object.keys(p.TOWER_TYPES).filter(
                key => this.isTowerUnlocked(key)
            );
            return this._unlockedTowerKeys;
        }

        hasTowerTypeHardLimit(id) {
            const type = p.TOWER_TYPES[id];
            return !!type?.legendary;
        }

        getTowerTypeLimit(id) {
            const type = p.TOWER_TYPES[id];
            if (!type) return 0;
            if (type.legendary) {
                if (Number.isFinite(type.maxCount)) return type.maxCount;
                return 1;
            }
            return Infinity;
        }

        getTowerCountByType(id) {
            let count = 0;
            for (const t of this.towers) {
                if (t?.type?.id === id) count += 1;
            }
            return count;
        }

        getTowerSoftCap(id) {
            const type = p.TOWER_TYPES[id];
            if (!type) return 3;
            if (type.legendary) return 1;
            if (["slow", "burn", "pulse", "support"].includes(id)) return 2;
            return 3;
        }

        getTowerBuildCostMultiplier(id, existingCount = this.getTowerCountByType(id)) {
            const type = p.TOWER_TYPES[id];
            if (!type) return 1;
            if (type.legendary) return 1;
            const softCap = this.getTowerSoftCap(id);
            return existingCount >= softCap
                ? existingCount - softCap + 2
                : 1;
        }

        getTowerBuildCost(id, existingCount = this.getTowerCountByType(id)) {
            const type = p.TOWER_TYPES[id];
            if (!type) return 0;
            const baseCost = Math.max(0, Number(type.cost) || 0);
            const mult = this.getTowerBuildCostMultiplier(id, existingCount);
            return Math.max(0, Math.round(baseCost * mult));
        }

        getUiGraphicsDensity() {
            const scaleX = Math.max(0.1, p.uiScaleX || 1);
            const scaleY = Math.max(0.1, p.uiScaleY || 1);
            return Math.min(2, 1 / Math.min(scaleX, scaleY));
        }

        createUiGraphics(w, h) {
            const gfx = p.createGraphics(w, h);
            if (gfx.pixelDensity) {
                gfx.pixelDensity(this.getUiGraphicsDensity());
            }
            return gfx;
        }

        getUiTextGraphicsDensity() {
            const scaleX = Math.max(1, p.uiScaleX || 1);
            const scaleY = Math.max(1, p.uiScaleY || 1);
            return Math.min(4, Math.max(2, scaleX, scaleY));
        }

        createUiTextGraphics(w, h) {
            const gfx = p.createGraphics(w, h);
            if (gfx.pixelDensity) {
                gfx.pixelDensity(this.getUiTextGraphicsDensity());
            }
            return gfx;
        }

        drawTowerLevelBadge(ctx, cx, cy, size, unlocked = false) {
            const radius = size / 2;
            ctx.push();
                ctx.strokeWeight(1.2);
                if (unlocked) {
                    ctx.stroke(214, 232, 248, 230);
                    ctx.fill(88, 104, 124, 235);
                } else {
                    ctx.stroke(120, 140, 165, 180);
                    ctx.fill(54, 66, 84, 220);
                }
                ctx.circle(cx, cy, size);

                ctx.noFill();
                ctx.strokeCap(ctx.ROUND);
                if (unlocked) {
                    ctx.stroke(122, 242, 138, 235);
                    ctx.strokeWeight(2.2);
                    ctx.line(cx, cy + radius * 0.45, cx, cy - radius * 0.1);
                    ctx.line(cx, cy - radius * 0.45, cx - radius * 0.34, cy - radius * 0.05);
                    ctx.line(cx, cy - radius * 0.45, cx + radius * 0.34, cy - radius * 0.05);
                } else {
                    ctx.stroke(255, 118, 118, 225);
                    ctx.strokeWeight(2);
                    ctx.line(cx - radius * 0.48, cy - radius * 0.48, cx + radius * 0.48, cy + radius * 0.48);
                }
            ctx.pop();
        }

        shouldCacheHoverUiPanels() {
            return (p.graphicsQuality || "low") !== "high";
        }

        invalidateUiGraphics() {
            this._towerCardCache = new Map();
            this._towerCardCacheSize = "";
            this._towerCostCache = new Map();
            this._towerPanelGfx = null;
            this._towerPanelTextGfx = null;
            this._towerPanelDirty = true;
            this._towerPanelState = null;
            this._towerPanelTextDirty = true;
            this._towerPanelTextState = null;
            this._towerBuildTooltipCache = new Map();
            this._towerStatsPanelGfx = null;
            this._towerStatsPanelState = null;
            this._towerStatsPanelNextRefresh = 0;
            this._towerDamagePanelGfx = null;
            this._towerDamagePanelDirty = true;
            this._towerDamagePanelNextRefresh = 0;
        }

        getTowerCardBase(key, cardW, cardH) {
            const sizeKey = `${cardW}x${cardH}`;
            if (this._towerCardCacheSize !== sizeKey) {
                this._towerCardCache = new Map();
                this._towerCardCacheSize = sizeKey;
            }

            const cached = this._towerCardCache.get(key);
            if (cached) return cached;

            const t = p.TOWER_TYPES[key];
            const gfx = this.createUiGraphics(cardW, cardH);
            gfx.textFont(p.variables.textFontFontick);
            gfx.noStroke();
            gfx.fill(36, 46, 60, 230);
            gfx.rect(0, 0, cardW, cardH, 10);

            if (t.legendary) {
                gfx.noStroke();
                gfx.fill(255, 194, 92, 24);
                gfx.rect(4, 4, cardW - 8, cardH - 8, 9);
                gfx.fill(255, 230, 165, 14);
                gfx.rect(8, 8, cardW - 16, cardH - 16, 8);

                gfx.fill(255, 214, 115, 22);
                gfx.quad(10, 12, cardW - 28, 12, cardW - 52, 28, 28, 28);

                gfx.noFill();
                gfx.stroke(255, 170, 70, 55);
                gfx.strokeWeight(7);
                gfx.rect(4, 4, cardW - 8, cardH - 8, 9);

                gfx.stroke(255, 216, 132, 220);
                gfx.strokeWeight(2.2);
                gfx.rect(2, 2, cardW - 4, cardH - 4, 8);

                gfx.stroke(255, 244, 214, 95);
                gfx.strokeWeight(1);
                gfx.rect(6, 6, cardW - 12, cardH - 12, 7);

            }

            const iconSize = Math.min(cardW - 24, 48);
            const iconX = (cardW - iconSize) / 2;
            const iconY = 20;
            gfx.noStroke();
            if (t.legendary) {
                gfx.fill(255, 183, 72, 32);
                gfx.rect(iconX - 7, iconY - 7, iconSize + 14, iconSize + 14, 12);
                gfx.fill(255, 228, 172, 22);
                gfx.rect(iconX - 4, iconY - 4, iconSize + 8, iconSize + 8, 10);
            }
            gfx.fill(24, 30, 40, 220);
            gfx.rect(iconX - 3, iconY - 3, iconSize + 6, iconSize + 6, 8);
            gfx.imageMode(gfx.CORNER);
            gfx.image(t.texture[0], iconX, iconY, iconSize, iconSize);

            this._towerCardCache.set(key, gfx);
            return gfx;
        }

        getTowerCostCache(key, cost, measureWidth) {
            const cacheKey = `${key}:${cost}`;
            const cached = this._towerCostCache.get(cacheKey);
            if (cached && Number.isFinite(cached.width)) return cached;
            const text = `${Math.max(0, Math.round(cost || 0))}`;
            const width = measureWidth ? measureWidth(text) : p.textWidth(text);
            const entry = { text, width };
            this._towerCostCache.set(cacheKey, entry);
            return entry;
        }

        getTowerLevelCap(id) {
            const type = p.TOWER_TYPES[id];
            const levels = type?.levels?.length || this.towerLevelCap;
            return Math.min(this.towerLevelCap, levels);
        }

        getTowerMaxLevel(id) {
            return this.towerMaxLevels?.[id] ?? 0;
        }

        setTowerMaxLevel(id, level) {
            const cap = this.getTowerLevelCap(id);
            const next = Math.max(0, Math.min(cap, Math.round(level || 0)));
            this.towerMaxLevels[id] = next;
            this._towerProgressVersion = (this._towerProgressVersion || 0) + 1;
            this._towerPanelDirty = true;

            for (const t of this.towers) {
                if (t?.type?.id === id) {
                    t.maxLevel = next;
                }
            }
        }

        unlockTower(id) {
            if (!p.TOWER_TYPES[id]) return false;
            if (this.isTowerUnlocked(id)) return false;

            this.towerUnlocks[id] = true;
            this._unlockedTowerKeys = null;
            this._towerProgressVersion = (this._towerProgressVersion || 0) + 1;
            this._towerPanelDirty = true;
            if (this.getTowerMaxLevel(id) < 1) {
                this.setTowerMaxLevel(id, 1);
            }
            return true;
        }

        increaseTowerMaxLevel(id, amount = 1) {
            if (!this.isTowerUnlocked(id)) return false;
            const current = this.getTowerMaxLevel(id);
            const cap = this.getTowerLevelCap(id);
            const inc = Math.max(1, Math.round(amount || 0));
            const next = Math.min(cap, current + inc);
            if (next === current) return false;
            this.setTowerMaxLevel(id, next);
            return true;
        }

        getChestUpgradeOptions() {
            const options = [];
            const keys = Object.keys(p.TOWER_TYPES);
            const wave = this.wave || 0;

            for (const key of keys) {
                const type = p.TOWER_TYPES[key];
                const isLegendary = !!type?.legendary;
                const unlocked = this.isTowerUnlocked(key);

                if (!unlocked) {
                    if (isLegendary && key !== this.chosenLegendaryId) continue;
                    if (isLegendary && wave < this.legendaryUnlockWave) continue;
                    options.push({ kind: "unlock", towerId: key });
                    continue;
                }

                const cap = this.getTowerLevelCap(key);
                if (this.getTowerMaxLevel(key) < cap) {
                    options.push({ kind: "level", towerId: key });
                }
            }

            return options;
        }

        getChestLegendaryUnlockWeight(sourceType = "normal") {
            return sourceType === "boss" ? 2.5 : 0.35;
        }

        pickChestUpgradeOption(options, sourceType = "normal") {
            if (!Array.isArray(options) || options.length === 0) return null;

            const legendaryUnlocks = options.filter(option => {
                const type = p.TOWER_TYPES?.[option?.towerId];
                return option?.kind === "unlock" && !!type?.legendary;
            });
            if (sourceType === "boss" && legendaryUnlocks.length > 0) {
                if (Math.random() < 0.5) {
                    return legendaryUnlocks[Math.floor(Math.random() * legendaryUnlocks.length)];
                }

                const nonLegendaryOptions = options.filter(option => !legendaryUnlocks.includes(option));
                if (nonLegendaryOptions.length > 0) {
                    return nonLegendaryOptions[Math.floor(Math.random() * nonLegendaryOptions.length)];
                }
            }

            const weightedOptions = [];
            let totalWeight = 0;
            for (const option of options) {
                const type = p.TOWER_TYPES?.[option?.towerId];
                const isLegendaryUnlock = option?.kind === "unlock" && !!type?.legendary;
                const weight = isLegendaryUnlock
                    ? this.getChestLegendaryUnlockWeight(sourceType)
                    : 1;
                if (!(weight > 0)) continue;
                totalWeight += weight;
                weightedOptions.push({ option, totalWeight });
            }

            if (weightedOptions.length === 0 || totalWeight <= 0) return options[0] || null;

            const roll = Math.random() * totalWeight;
            for (const entry of weightedOptions) {
                if (roll < entry.totalWeight) {
                    return entry.option;
                }
            }

            return weightedOptions[weightedOptions.length - 1]?.option || null;
        }

        applyChestUpgrade(option) {
            if (!option) return false;
            if (option.kind === "unlock") {
                return this.unlockTower(option.towerId);
            }
            if (option.kind === "level") {
                return this.increaseTowerMaxLevel(option.towerId, 1);
            }
            return false;
        }
        
        drawTowerPanel() {
            const panelX = FIELD_WIDTH + 8;
            const panelY = 8;
            const panelW = p.width - panelX - 8;
            const panelH = p.height - 16;
            const panelPad = 10;
            const cols = 2;
            const gap = 10;
            const cardsTop = panelY + 42;
            const cardW = Math.floor((panelW - panelPad * 2 - gap) / cols);
            const cardH = 92;

            let hoverTower = null;
            let hoverItem = null;
            let hoverX = 0;
            let hoverY = 0;
            const hasLegendary = this.hasLegendaryTower();
            const towerCounts = new Map();
            for (const tower of this.towers) {
                const id = tower?.type?.id;
                if (!id) continue;
                towerCounts.set(id, (towerCounts.get(id) || 0) + 1);
            }

            const keys = this.getUnlockedTowerKeys();
            const layoutKey = `${panelW}x${panelH}|${keys.join(",")}`;
            if (!this._towerPanelLayout || this._towerPanelLayoutKey !== layoutKey) {
                this._towerPanelLayoutKey = layoutKey;
                this._towerPanelLayout = [];
                for (let idx = 0; idx < keys.length; idx++) {
                    const col = idx % cols;
                    const row = Math.floor(idx / cols);
                    const x = panelPad + col * (cardW + gap);
                    const y = cardsTop + row * (cardH + gap);
                    this._towerPanelLayout.push({
                        key: keys[idx],
                        x,
                        y,
                        w: cardW,
                        h: cardH
                    });
                }
                this._towerPanelDirty = true;
            }

            let hoverKey = null;
            if (this._towerPanelLayout) {
                for (const item of this._towerPanelLayout) {
                    const x = panelX + item.x;
                    const y = panelY + item.y;
                    if (
                        p.mouseX > x &&
                        p.mouseX < x + item.w &&
                        p.mouseY > y &&
                        p.mouseY < y + item.h
                    ) {
                        hoverKey = item.key;
                        hoverItem = item;
                        hoverTower = p.TOWER_TYPES[item.key];
                        hoverX = panelX - 190;
                        hoverY = y + 36;
                        break;
                    }
                }
            }

            let affordableSig = "";
            let countsSig = "";
            if (this._towerPanelLayout) {
                const affordableParts = [];
                const countParts = [];
                for (const item of this._towerPanelLayout) {
                    const t = p.TOWER_TYPES[item.key];
                    const blockedLegendary = t.legendary && hasLegendary;
                    const count = towerCounts.get(item.key) || 0;
                    const buildCost = this.getTowerBuildCost(item.key, count);
                    affordableParts.push(this.money >= buildCost && !blockedLegendary ? "1" : "0");
                    countParts.push(`${towerCounts.get(item.key) || 0}`);
                }
                affordableSig = affordableParts.join("");
                countsSig = countParts.join(",");
            }

            const progressVer = this._towerProgressVersion || 0;
            const state = this._towerPanelState || {};
            if (
                this._towerPanelDirty ||
                state.affordableSig !== affordableSig ||
                state.countsSig !== countsSig ||
                state.selected !== this.selectedTowerType ||
                state.hasLegendary !== hasLegendary ||
                state.progressVer !== progressVer ||
                state.panelW !== panelW ||
                state.panelH !== panelH
            ) {
                this._towerPanelDirty = false;
                this._towerPanelState = {
                    affordableSig,
                    countsSig,
                    selected: this.selectedTowerType,
                    hasLegendary,
                    progressVer,
                    panelW,
                    panelH
                };

                if (
                    !this._towerPanelGfx ||
                    this._towerPanelGfx.width !== panelW ||
                    this._towerPanelGfx.height !== panelH
                ) {
                    this._towerPanelGfx = this.createUiGraphics(panelW, panelH);
                }

                const g = this._towerPanelGfx;
                g.clear();
                g.push();
                    g.stroke(90, 115, 145, 220);
                    g.strokeWeight(2);
                    g.fill(20, 26, 34, 220);
                    g.rect(0, 0, panelW, panelH, 12);
                g.pop();

                g.push();
                    g.textFont(p.variables.textFontFontick);
                    g.textSize(13);
                    g.textAlign(g.RIGHT, g.CENTER);

                    if (this._towerPanelLayout) {
                        const accentIds = new Set(["slow", "burn", "pulse", "support"]);
                        const accentStroke = [90, 170, 255];
                        for (const item of this._towerPanelLayout) {
                            const key = item.key;
                            const t = p.TOWER_TYPES[key];
                            const baseCard = this.getTowerCardBase(key, cardW, cardH);
                            g.image(baseCard, item.x, item.y);

                            const blockedLegendary = t.legendary && hasLegendary;
                            const count = towerCounts.get(key) || 0;
                            const limit = this.getTowerTypeLimit(key);
                            const blockedByLimit = this.hasTowerTypeHardLimit(key) && count >= limit;
                            const buildCost = this.getTowerBuildCost(key, count);
                            const affordable = this.money >= buildCost && !blockedLegendary && !blockedByLimit;
                            const selected = this.selectedTowerType === key;

                            g.textAlign(g.RIGHT, g.CENTER);
                            g.textSize(13);
                            g.strokeWeight(2);
                            if (!affordable) {
                                g.stroke(255, 85, 85);
                            } else if (selected && t.legendary) {
                                g.stroke(255, 236, 170);
                            } else if (selected) {
                                g.stroke(70, 220, 120);
                            } else if (t.legendary) {
                                g.stroke(255, 205, 120);
                            } else if (accentIds.has(key)) {
                                g.stroke(...accentStroke);
                            } else {
                                g.stroke(80, 100, 125);
                            }
                            g.noFill();
                            g.rect(item.x, item.y, cardW, cardH, 10);

                            g.noStroke();
                            const rowY = item.y + cardH - 11;
                            if (!blockedByLimit && p.icons.gold) {
                                const costMultiplier = this.getTowerBuildCostMultiplier(key, count);
                                const showCostMultiplier =
                                    !this.hasTowerTypeHardLimit(key) &&
                                    count >= this.getTowerSoftCap(key) &&
                                    costMultiplier > 1;
                                const costText = showCostMultiplier
                                    ? `${buildCost} (x${costMultiplier})`
                                    : `${buildCost}`;
                                const costWidth = g.textWidth(costText);
                                const costY = rowY;
                                const costRightX = item.x + cardW - 8;
                                const goldSize = 12;
                                const goldGap = 4;
                                const goldX = costRightX - costWidth - goldGap - goldSize;
                                const goldY = costY - goldSize / 2;
                                g.image(p.icons.gold, goldX, goldY, goldSize, goldSize);
                            }

                        }
                    }
                g.pop();
            }

            const textState = this._towerPanelTextState || {};
            if (
                this._towerPanelTextDirty ||
                textState.affordableSig !== affordableSig ||
                textState.countsSig !== countsSig ||
                textState.progressVer !== progressVer ||
                textState.layoutKey !== layoutKey ||
                textState.panelW !== panelW ||
                textState.panelH !== panelH
            ) {
                this._towerPanelTextDirty = false;
                this._towerPanelTextState = {
                    affordableSig,
                    countsSig,
                    progressVer,
                    layoutKey,
                    panelW,
                    panelH
                };

                if (
                    !this._towerPanelTextGfx ||
                    this._towerPanelTextGfx.width !== panelW ||
                    this._towerPanelTextGfx.height !== panelH
                ) {
                    this._towerPanelTextGfx = this.createUiTextGraphics(panelW, panelH);
                }

                const gText = this._towerPanelTextGfx;
                gText.clear();
                gText.push();
                    gText.noStroke();

                    if (this._towerPanelLayout) {
                        for (const item of this._towerPanelLayout) {
                            const key = item.key;
                            const t = p.TOWER_TYPES[key];
                            const blockedLegendary = t.legendary && hasLegendary;
                            const count = towerCounts.get(key) || 0;
                            const limit = this.getTowerTypeLimit(key);
                            const blockedByLimit = this.hasTowerTypeHardLimit(key) && count >= limit;
                            const buildCost = this.getTowerBuildCost(key, count);
                            const affordable = this.money >= buildCost && !blockedLegendary && !blockedByLimit;
                            const maxLevel = this.getTowerMaxLevel(key);
                            const levelCap = this.getTowerLevelCap(key);

                            gText.textFont(p.variables.textFontFontick);
                            const rowY = item.y + cardH - 11;
                            const label = String(t.name || t.id || "").toUpperCase();
                            gText.textAlign(gText.CENTER, gText.CENTER);
                            gText.textSize(10);
                            if (t.legendary) {
                                gText.fill(232, 238, 248, 230);
                            } else {
                                gText.fill(232, 238, 248, 230);
                            }
                            gText.text(label, item.x + cardW / 2, item.y + 8);

                            const badgeSize = 12;
                            const badgeGap = 5;
                            const badgeX = item.x + cardW - badgeSize / 2 - 10;
                            const badgeStackH = levelCap * badgeSize + Math.max(0, levelCap - 1) * badgeGap;
                            const badgeY = item.y + Math.round((cardH - badgeStackH) / 2) + badgeSize / 2;
                            for (let i = 0; i < levelCap; i++) {
                                const filled = i < maxLevel;
                                this.drawTowerLevelBadge(
                                    gText,
                                    badgeX,
                                    badgeY + i * (badgeSize + badgeGap),
                                    badgeSize,
                                    filled
                                );
                            }

                            if (this.hasTowerTypeHardLimit(key)) {
                                const segmentCount = Math.max(1, limit);
                                const filledSegments = Math.max(0, Math.min(segmentCount, count));
                                const segW = 8;
                                const segH = 7;
                                const segGap = 4;
                                const segX = item.x + 8;
                                const segY = rowY - segH / 2;

                                for (let i = 0; i < segmentCount; i++) {
                                    const filled = i < filledSegments;
                                    if (filled) {
                                        gText.fill(120, 210, 255, 235);
                                    } else if (blockedByLimit) {
                                        gText.fill(255, 170, 140, 220);
                                    } else {
                                        gText.fill(92, 108, 128, 210);
                                    }
                                    gText.rect(segX + i * (segW + segGap), segY + 1, segW, segH, 3);
                                }
                            } else {
                                const segmentCount = this.getTowerSoftCap(key);
                                const filledSegments = Math.max(0, Math.min(segmentCount, count));
                                const segW = 8;
                                const segH = 7;
                                const segGap = 4;
                                const segX = item.x + 8;
                                const segY = rowY - segH / 2;

                                for (let i = 0; i < segmentCount; i++) {
                                    const filled = i < filledSegments;
                                    if (filled) {
                                        gText.fill(120, 210, 255, 235);
                                    } else {
                                        gText.fill(92, 108, 128, 210);
                                    }
                                    gText.rect(segX + i * (segW + segGap), segY+1, segW, segH, 3);
                                }
                            }

                            if (!blockedByLimit) {
                                gText.textAlign(gText.RIGHT, gText.CENTER);
                                gText.textSize(13);
                                if (affordable) {
                                    gText.fill(255, 200, 120);
                                } else {
                                    gText.fill(255, 0, 0);
                                }
                                const costMultiplier = this.getTowerBuildCostMultiplier(key, count);
                                const showCostMultiplier =
                                    !this.hasTowerTypeHardLimit(key) &&
                                    count >= this.getTowerSoftCap(key) &&
                                    costMultiplier > 1;
                                const costText = showCostMultiplier
                                    ? `${buildCost} (x${costMultiplier})`
                                    : `${buildCost}`;
                                const costY = rowY;
                                const costRightX = item.x + cardW - 8;
                                gText.text(costText, costRightX, costY);
                            }
                        }
                    }
                gText.pop();
            }

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 5);
                if (this._towerPanelGfx) {
                    p.image(this._towerPanelGfx, panelX, panelY);
                }

                p.noStroke();
                p.fill(220, 230, 240);
                p.textFont(p.variables.textFontFontick);
                p.textAlign(p.LEFT, p.CENTER);
                p.textSize(16);
                p.text(p.t("panel.towers"), panelX + panelPad, panelY + 20);

                if (this._towerPanelTextGfx) {
                    p.image(this._towerPanelTextGfx, panelX, panelY);
                }

                if (hoverItem) {
                    const hoverType = p.TOWER_TYPES[hoverItem.key];
                    const blockedLegendary = hoverType?.legendary && hasLegendary;
                    const count = towerCounts.get(hoverItem.key) || 0;
                    const limit = this.getTowerTypeLimit(hoverItem.key);
                    const blockedByLimit = this.hasTowerTypeHardLimit(hoverItem.key) && count >= limit;
                    const buildCost = this.getTowerBuildCost(hoverItem.key, count);
                    const affordable = this.money >= buildCost && !blockedLegendary && !blockedByLimit;
                    const selected = this.selectedTowerType === hoverItem.key;

                    p.noFill();
                    p.strokeWeight(2);
                    if (!affordable) {
                        p.stroke(255, 85, 85);
                    } else if (selected) {
                        p.stroke(70, 220, 120);
                    } else {
                        p.stroke(190, 210, 235);
                    }
                    p.rect(panelX + hoverItem.x, panelY + hoverItem.y, hoverItem.w, hoverItem.h, 10);
                }

                // gold display (fast overlay)
                p.noStroke();
                p.textFont(p.variables.textFontFontick);
                p.textAlign(p.RIGHT, p.CENTER);
                p.textSize(16);
                const goldY = panelY + 20;
                const goldText = `${this.money}`;
                p.fill(255, 220, 120);
                p.text(goldText, panelX + panelW - panelPad, goldY);
                if (p.goldTexture) {
                    const goldSize = 20;
                    const goldX = panelX + panelW - panelPad - p.textWidth(goldText) - goldSize - 6;
                    p.image(p.goldTexture, goldX, goldY + 2 - goldSize / 2, goldSize, goldSize);
                }
            p.pop();

            if (hoverTower) {
                this.drawBuildTooltip(
                    hoverTower,
                    hoverTower.levels[0],
                    hoverX,
                    hoverY
                );
            }

            // ===== Speed buttons =====
            if (this.areSpeedButtonsVisible()) {
                const { btnW, btnH, speedGap, baseX, baseY, speeds } = this.getSpeedButtonsLayout();
                if (!p.icons.speed1) p.icons.speed1 = p.loadImage("./img/icons/speed1.png");
                if (!p.icons.speed2) p.icons.speed2 = p.loadImage("./img/icons/speed2.png");
                if (!p.icons.speed3) p.icons.speed3 = p.loadImage("./img/icons/speed3.png");
                const speedIcons = [p.icons.speed2, p.icons.speed1, p.icons.speed2, p.icons.speed3];

                p.push();
                    p.translate(-p.width / 2, -p.height / 2, 5);
                    p.textAlign(p.CENTER, p.CENTER);
                    p.textSize(14);

                    speeds.forEach((s, i) => {
                        const x = baseX + i * (btnW + speedGap);
                        const y = baseY;

                        const hovered =
                            p.mouseX > x &&
                            p.mouseX < x + btnW &&
                            p.mouseY > y &&
                            p.mouseY < y + btnH;

                        if (p.gameSpeed === s) {
                            p.fill(80, 200, 120);
                        } else if (hovered) {
                            p.fill(90);
                        } else {
                            p.fill(60);
                        }

                        p.stroke(200);
                        p.rect(x, y, btnW, btnH, 6);

                        p.noStroke();
                        const icon = speedIcons[i];
                        if (icon) {
                            const iconW = 30;
                            const iconH = 30;
                            if (speeds[i] === 0.5) {
                                p.push();
                                    p.translate(x + btnW / 2, y + btnH / 2);
                                    p.scale(-1, 1);
                                    p.imageMode(p.CENTER);
                                    p.image(icon, 0, 0, iconW, iconH);
                                p.pop();
                            } else {
                                p.image(icon, x + (btnW - iconW) / 2, y + (btnH - iconH) / 2, iconW, iconH);
                            }
                        } else {
                            p.fill(255);
                            p.text(`${s}x`, x + btnW / 2, y + btnH / 2);
                        }
                    });
                p.pop();
            }
        }

        handleUpgradeMenuClick(x, y) {
            if (!this.upgradeMode) return false;
            const mode = this.upgradeMode;
            const { radius } = mode;
            const center = this.getUpgradeMenuCenter(mode);
            const cx = center?.x ?? mode.x;
            const cy = center?.y ?? mode.y;
            const tower = mode.tower;
            const types = this.getUpgradeMenuItems(mode);
            if (types.length === 0) {
                this.upgradeMode = null;
                return true;
            }

            for (let i = 0; i < types.length; i++) {
                const a = this.getUpgradeMenuItemAngle(mode, types, i);
                const anchorX = (mode.kind === "base" && types.length === 1) ? mode.x : cx;
                const anchorY = (mode.kind === "base" && types.length === 1) ? mode.y : cy;
                const bx = anchorX + Math.cos(a) * radius;
                const by = anchorY + Math.sin(a) * radius;
        
                if (Math.hypot(x - bx, y - by) < 14) {
                    const t = types[i];
                    const prevMode = this.upgradeMode;
                    this.executeUpgradeMenuAction(t, mode);
                    if (this.upgradeMode === prevMode) {
                        this.upgradeMode = null;
                    }
                    return true;
                }
            }
        
            this.upgradeMode = null;
            return true;
        }

        getTowerStatsPanelData(tower) {
            const type = tower.type;
            const towerTitle = tower.displayName || type.name;
            const lvlIndex = tower.level - 1;
            const cur = type.levels[lvlIndex];
            const next = tower.level < tower.maxLevel ? type.levels[lvlIndex + 1] : null;

            const toBuffPercent = (mult) => `${Math.round((mult - 1) * 100)}%`;
            const burnStackCap = 5;
            const statLine = (a, b) => {
                if (b === undefined || b === null) return `${a}`;
                return `${a} -> ${b}`;
            };
            const roundStat = (value) => Math.round(value * 100) / 100;
            const formatPlainNumber = (value) => `${roundStat(value)}`;
            const createTileAdjustedStat = ({
                icon,
                tone,
                baseValue,
                adjustedValue,
                nextValue,
                formatter = formatPlainNumber,
                goodWhenNegative = false,
                currentText,
                nextText
            }) => ({
                icon,
                tone,
                ...this.buildTileAdjustedLine(
                    baseValue,
                    adjustedValue,
                    nextValue,
                    formatter,
                    { goodWhenNegative, currentText, nextText }
                )
            });

            let bestFireRateBoost = 1;
            let bestRangeBoost = 1;
            let bestDamageBoost = 1;
            let bestCritChanceBoost = 0;
            let bestKillGoldChance = 0;
            let bestKillGoldBonus = 0;
            const specialTile = tower.specialBuildTile;
            const supportSelfTileEffects = this.getSupportTileAuraEffects(specialTile);
            const specialDamageMult = Number.isFinite(specialTile?.damageMult) ? specialTile.damageMult : 1;
            const specialRangeMult = Number.isFinite(specialTile?.rangeMult)
                ? (type.id === "support" ? (supportSelfTileEffects.auraRangeMult || 1) : specialTile.rangeMult)
                : 1;
            const specialFireRateMult = Number.isFinite(specialTile?.fireRateMult) ? specialTile.fireRateMult : 1;
            const supportAuraFireRateTileBoost = supportSelfTileEffects.fireRateMult || 1;
            const supportAuraDamageTileBoost = supportSelfTileEffects.damageMult || 1;
            const supportAuraRangeBoostCur = this.getSupportRangeBoostMult(cur.rangeBoost || 1, specialTile);
            const supportAuraRangeBoostNext = next
                ? this.getSupportRangeBoostMult(next.rangeBoost || 1, specialTile)
                : undefined;
            const supportAuraGoldChance = supportSelfTileEffects.goldChance || 0;
            const supportAuraGoldBonus = supportSelfTileEffects.goldBonus || 0;
            const jamMult = (tower.jamTimer > 0 && type.id !== "support")
                ? Math.max(0.2, Math.min(1, tower.jamFireRateMult || 1))
                : 1;
            const jamPenaltyPct = jamMult < 1 ? Math.round((1 - jamMult) * 100) : 0;
            const appendJamPenaltyToLine = (line) => {
                if (!line || jamPenaltyPct <= 0) return line;

                const penaltySegments = [
                    { text: " ", color: [245, 248, 255] },
                    { text: "-", color: [255, 110, 110] },
                    { text: `${jamPenaltyPct}%`, color: [255, 110, 110] }
                ];

                if (Array.isArray(line.segments) && line.segments.length > 0) {
                    const segments = [...line.segments];
                    const arrowIndex = segments.findIndex(segment => segment?.text === " -> ");
                    if (arrowIndex >= 0) {
                        segments.splice(arrowIndex, 0, ...penaltySegments);
                    } else {
                        segments.push(...penaltySegments);
                    }
                    return { ...line, segments };
                }

                if (typeof line.text === "string" && line.text.length > 0) {
                    const arrowIndex = line.text.indexOf(" -> ");
                    if (arrowIndex >= 0) {
                        return {
                            ...line,
                            segments: [
                                { text: line.text.slice(0, arrowIndex), color: [245, 248, 255] },
                                ...penaltySegments,
                                { text: line.text.slice(arrowIndex), color: [210, 220, 235] }
                            ]
                        };
                    }

                    return {
                        ...line,
                        segments: [
                            { text: line.text, color: [245, 248, 255] },
                            ...penaltySegments
                        ]
                    };
                }

                return line;
            };

            for (const t of this.towers) {
                if (t === tower) continue;
                if (t.type.id !== "support") continue;

                const lvl = t.type.levels[t.level - 1];
                const supportTile = t.specialBuildTile;
                if (!this.isSupportAuraAffectingTower(t, tower)) continue;

                const supportEffects = this.getSupportTileAuraEffects(supportTile);
                bestRangeBoost = this.resolveSupportAuraModifier(
                    bestRangeBoost,
                    this.getSupportRangeBoostMult(lvl.rangeBoost || 1, supportTile)
                );

                if (type.id === "support") continue;

                bestFireRateBoost = this.resolveSupportAuraModifier(
                    bestFireRateBoost,
                    (lvl.fireRateBoost || 1) * (supportEffects.fireRateMult || 1)
                );
                bestDamageBoost = this.resolveSupportAuraModifier(
                    bestDamageBoost,
                    supportEffects.damageMult || 1
                );
                if (tower.baseCritChance > 0 && lvl.critChanceBoost) {
                    bestCritChanceBoost = Math.max(bestCritChanceBoost, lvl.critChanceBoost);
                }
                bestKillGoldChance = Math.max(bestKillGoldChance, supportEffects.goldChance || 0);
                bestKillGoldBonus = bestKillGoldChance > 0 ? 1 : bestKillGoldBonus;
            }

            let lines = [];
            if (type.id === "support") {
                const curAuraRangeBase = cur.range;
                const curAuraRangeTotal = Math.round(cur.range * specialRangeMult * bestRangeBoost);
                const nextAuraRangeTotal = next && Math.round(next.range * specialRangeMult * bestRangeBoost);
                lines = [
                    createTileAdjustedStat({
                        icon: p.icons.range,
                        tone: [90, 170, 255],
                        baseValue: curAuraRangeBase,
                        adjustedValue: curAuraRangeTotal,
                        nextValue: nextAuraRangeTotal,
                        formatter: (value) => `${Math.round(value)}`
                    }),
                    {
                        icon: p.icons.fireRate,
                        text: p.t("stat.fire_rate_buff", { value: statLine(
                            toBuffPercent((cur.fireRateBoost || 1) * supportAuraFireRateTileBoost),
                            next && toBuffPercent((next.fireRateBoost || 1) * supportAuraFireRateTileBoost)
                        ) }),
                        tone: [110, 220, 140]
                    },
                    {
                        icon: p.icons.range,
                        text: p.t("stat.range_buff", {
                            value: statLine(
                                toBuffPercent(supportAuraRangeBoostCur),
                                next && toBuffPercent(supportAuraRangeBoostNext)
                            )
                        }),
                        tone: [110, 220, 255]
                    },
                    {
                        icon: p.icons.crit,
                        text: p.t("stat.crit_chance_buff", { value: statLine(
                            `${Math.round((cur.critChanceBoost || 0) * 100)}%`,
                            next && `${Math.round((next.critChanceBoost || 0) * 100)}%`
                        ) }),
                        tone: [255, 190, 130]
                    }
                ];
                if (supportAuraDamageTileBoost > 1) {
                    lines.push({
                        icon: p.icons.damage,
                        text: p.t("stat.damage_buff", { value: toBuffPercent(supportAuraDamageTileBoost) }),
                        tone: [220, 90, 90]
                    });
                } else if (supportAuraDamageTileBoost < 1) {
                    lines.push({
                        icon: p.icons.damage,
                        text: p.t("stat.tile_damage", { value: this.formatSignedPercent(supportAuraDamageTileBoost) }),
                        tone: [255, 120, 120]
                    });
                }
                if (supportAuraGoldChance > 0 && supportAuraGoldBonus > 0) {
                    lines.push({
                        icon: p.icons.gold,
                        text: p.t("stat.aura_gold_bonus", {
                            chance: `${Math.round(supportAuraGoldChance * 1000) / 10}%`,
                            value: supportAuraGoldBonus
                        }),
                        tone: [255, 210, 120]
                    });
                }
            } else if (type.id === "singularity") {
                const curDmgBase = cur.damage;
                const curDmg = cur.damage * specialDamageMult * bestDamageBoost;
                const nextDmg = next ? next.damage * specialDamageMult * bestDamageBoost : undefined;
                const curCharge = Math.round((cur.chargePerEnemy || 0) * 1000) / 10;
                const nextCharge = next ? Math.round((next.chargePerEnemy || 0) * 1000) / 10 : undefined;
                const curRangeBase = cur.range;
                const curRange = cur.range * bestRangeBoost * specialRangeMult;
                const nextRange = next ? next.range * bestRangeBoost * specialRangeMult : undefined;

                lines = [
                    createTileAdjustedStat({
                        icon: p.icons.damage,
                        tone: [220, 90, 90],
                        baseValue: curDmgBase,
                        adjustedValue: curDmg,
                        nextValue: nextDmg !== undefined ? roundStat(nextDmg) : undefined
                    }),
                    {
                        icon: p.icons.fireRate,
                        text: p.t("stat.charge_per_enemy", {
                            value: statLine(
                                this.formatChargeRate(curCharge),
                                nextCharge !== undefined ? this.formatChargeRate(nextCharge) : undefined
                            )
                        }),
                        tone: [110, 220, 140]
                    },
                    createTileAdjustedStat({
                        icon: p.icons.range,
                        tone: [90, 170, 255],
                        baseValue: curRangeBase,
                        adjustedValue: curRange,
                        nextValue: nextRange !== undefined ? Math.round(nextRange) : undefined,
                        formatter: (value) => `${Math.round(value)}`
                    })
                ];

                if (cur.slowFactor || next?.slowFactor) {
                    const curSlow = Math.round((1 - cur.slowFactor) * 100);
                    const nextSlow = next && Math.round((1 - next.slowFactor) * 100);
                    
                    lines.push({
                        icon: p.icons.slow,
                        text: statLine(`${curSlow}%`, next && `${nextSlow}%`),
                        tone: [110, 220, 255]
                    });
                }
                if (cur.burnDamage || next?.burnDamage) {
                    const curBurn = Math.round(((cur.burnDamage || 0) * specialDamageMult * bestDamageBoost) * 100) / 100;
                    const nextBurn = next ? Math.round(((next.burnDamage || 0) * specialDamageMult * bestDamageBoost) * 100) / 100 : undefined;
                    lines.push({
                        icon: p.icons.fire,
                        text: p.t("stat.burn_dps", { value: statLine(curBurn, nextBurn), stacks: burnStackCap }),
                        tone: [255, 140, 90]
                    });
                    lines.push({
                        icon: p.icons.info,
                        text: this.formatBurnHealCutValue(burnStackCap),
                        tone: [255, 170, 170]
                    });
                }
                if (cur.burnDuration || next?.burnDuration) {
                    const curDur = Math.round((cur.burnDuration || 0) * 10) / 10;
                    const nextDur = next ? Math.round((next.burnDuration || 0) * 10) / 10 : undefined;
                    lines.push({
                        icon: p.icons.info,
                        text: p.t("stat.burn_time", {
                            value: statLine(
                                `${curDur}${p.t("abbr.seconds")}`,
                                nextDur !== undefined ? `${nextDur}${p.t("abbr.seconds")}` : undefined
                            )
                        }),
                        tone: [255, 200, 120]
                    });
                }
            } else if (type.id === "orbital") {
                const curDamageBase = cur.damage;
                const curDamage = cur.damage * specialDamageMult * bestDamageBoost;
                const curAttackRateBase = this.getTowerAttackRateInfo(type, cur, jamMult);
                const curAttackRate = this.getTowerAttackRateInfo(type, cur, bestFireRateBoost * jamMult * specialFireRateMult);
                const nextDamage = next ? next.damage * specialDamageMult * bestDamageBoost : undefined;
                const nextAttackRate = next ? this.getTowerAttackRateInfo(type, next, bestFireRateBoost * jamMult * specialFireRateMult) : undefined;

                lines = [
                    createTileAdjustedStat({
                        icon: p.icons.damage,
                        tone: [220, 90, 90],
                        baseValue: curDamageBase,
                        adjustedValue: curDamage,
                        nextValue: nextDamage !== undefined ? roundStat(nextDamage) : undefined,
                        formatter: (value) => this.formatTowerDamageText(type, cur, value),
                        nextText: nextDamage !== undefined ? this.formatTowerDamageText(type, next || cur, nextDamage) : undefined
                    }),
                    appendJamPenaltyToLine(createTileAdjustedStat({
                        icon: p.icons.fireRate,
                        tone: [110, 220, 140],
                        baseValue: curAttackRateBase?.interval ?? 0,
                        adjustedValue: curAttackRate?.interval ?? 0,
                        nextValue: nextAttackRate?.interval,
                        formatter: (value) => `${Number(value.toFixed(value < 1 ? 2 : 1))}${p.t("abbr.seconds")}`,
                        goodWhenNegative: true,
                        currentText: this.formatAttackRateText(curAttackRate),
                        nextText: nextAttackRate ? this.formatAttackRateText(nextAttackRate) : undefined
                    })),
                    {
                        icon: p.icons.range,
                        text: "9999",
                        tone: [120, 200, 255]
                    }
                ];

                if (cur.slowFactor || next?.slowFactor) {
                    const curSlow = Math.round((1 - cur.slowFactor) * 100);
                    const nextSlow = next && Math.round((1 - next.slowFactor) * 100);
                    const curDur = Math.round((cur.slowDuration || 0) * 10) / 10;
                    const nextDur = next ? Math.round((next.slowDuration || 0) * 10) / 10 : undefined;
                    lines.push({
                        icon: p.icons.slow,
                        text: p.t("stat.slow", {
                            value: statLine(
                                this.formatSlowValue(curSlow, curDur),
                                nextDur !== undefined ? this.formatSlowValue(nextSlow, nextDur) : undefined
                            )
                        }),
                        tone: [110, 220, 255]
                    });
                }
            } else {
                const curDamageBase = cur.damage;
                const curDamage = cur.damage * specialDamageMult * bestDamageBoost;
                const curAttackRateBase = this.getTowerAttackRateInfo(type, cur, jamMult);
                const curAttackRate = this.getTowerAttackRateInfo(type, cur, bestFireRateBoost * jamMult * specialFireRateMult);
                const curRangeBase = cur.range;
                const curRange = cur.range * bestRangeBoost * specialRangeMult;
                const nextDamage = next ? next.damage * specialDamageMult * bestDamageBoost : undefined;
                const nextAttackRate = next ? this.getTowerAttackRateInfo(type, next, bestFireRateBoost * jamMult * specialFireRateMult) : undefined;
                const nextRange = next ? next.range * bestRangeBoost * specialRangeMult : undefined;

                lines = [
                    createTileAdjustedStat({
                        icon: p.icons.damage,
                        tone: [220, 90, 90],
                        baseValue: curDamageBase,
                        adjustedValue: curDamage,
                        nextValue: nextDamage !== undefined ? roundStat(nextDamage) : undefined,
                        formatter: (value) => this.formatTowerDamageText(type, cur, value),
                        nextText: nextDamage !== undefined ? this.formatTowerDamageText(type, next || cur, nextDamage) : undefined
                    }),
                    appendJamPenaltyToLine(createTileAdjustedStat({
                        icon: p.icons.fireRate,
                        tone: [110, 220, 140],
                        baseValue: curAttackRateBase?.interval ?? 0,
                        adjustedValue: curAttackRate?.interval ?? 0,
                        nextValue: nextAttackRate?.interval,
                        formatter: (value) => `${Number(value.toFixed(value < 1 ? 2 : 1))}${p.t("abbr.seconds")}`,
                        goodWhenNegative: true,
                        currentText: type.id === "cat_revolver"
                            ? this.formatAttackRateText(curAttackRate, { showBurst: true })
                            : this.formatAttackRateText(curAttackRate),
                        nextText: nextAttackRate
                            ? (
                                type.id === "cat_revolver"
                                    ? this.formatAttackRateText(nextAttackRate, { showBurst: true })
                                    : this.formatAttackRateText(nextAttackRate)
                            )
                            : undefined
                    })),
                    createTileAdjustedStat({
                        icon: p.icons.range,
                        tone: [90, 170, 255],
                        baseValue: curRangeBase,
                        adjustedValue: curRange,
                        nextValue: nextRange !== undefined ? Math.round(nextRange) : undefined,
                        formatter: (value) => `${Math.round(value)}`
                    })
                ];

                if ((cur.projectileCount ?? 1) > 1 || (next?.projectileCount ?? 1) > 1) {
                    lines.push({
                        icon: p.icons.multishot,
                        text: statLine(
                            Math.max(1, cur.projectileCount ?? 1),
                            next ? Math.max(1, next.projectileCount ?? 1) : undefined
                        ),
                        tone: [240, 210, 120]
                    });
                }

                if (cur.splashRadius || next?.splashRadius) {
                    const curSplash = Math.round(cur.splashRadius ?? 0);
                    const nextSplash = next ? Math.round(next.splashRadius ?? 0) : undefined;
                    lines.push({
                        icon: p.icons.aoe,
                        text: statLine(curSplash, nextSplash),
                        tone: [255, 170, 110]
                    });
                }

                if (type.id === "cleaver") {
                    const stunPct = Math.round((1 - (type.primarySlowFactor ?? 0)) * 100);
                    const curStunDur = Math.round((cur.primarySlowDuration ?? type.primarySlowDuration ?? 0.5) * 10) / 10;
                    const nextStunDur = next
                        ? Math.round((next.primarySlowDuration ?? type.primarySlowDuration ?? curStunDur) * 10) / 10
                        : undefined;
                    lines.push({
                        icon: p.icons.slow,
                        text: p.t("stat.slow", { value: this.formatSlowValue(stunPct, statLine(curStunDur, nextStunDur)) }),
                        tone: [110, 220, 255]
                    });
                }

                

                if (cur.bounces || next?.bounces) {
                    const nextBounces = (next && next.bounces != null) ? next.bounces : undefined;
                    lines.push({
                        icon: p.icons.bounce,
                        text: statLine(cur.bounces ?? 0, nextBounces),
                        tone: [170, 170, 170]
                    });
                }

                if (cur.slowFactor || next?.slowFactor) {
                    const curSlow = Math.round((1 - cur.slowFactor) * 100);
                    const nextSlow = next && Math.round((1 - next.slowFactor) * 100);
                    
                    lines.push({
                        icon: p.icons.slow,
                        text: statLine(`${curSlow}%`, next && `${nextSlow}%`),
                        tone: [110, 220, 255]
                    });
                }
                if (cur.burnDamage || next?.burnDamage) {
                    const curBurn = Math.round(((cur.burnDamage || 0) * specialDamageMult * bestDamageBoost) * 100) / 100;
                    const nextBurn = next ? Math.round(((next.burnDamage || 0) * specialDamageMult * bestDamageBoost) * 100) / 100 : undefined;
                    lines.push({
                        icon: p.icons.fire,
                        text: p.t("stat.burn_dps", { value: statLine(curBurn, nextBurn), stacks: burnStackCap }),
                        tone: [255, 140, 90]
                    });
                    lines.push({
                        icon: p.icons.info,
                        text: this.formatBurnHealCutValue(burnStackCap),
                        tone: [255, 170, 170]
                    });
                }
                if (cur.burnDuration || next?.burnDuration) {
                    const curDur = Math.round((cur.burnDuration || 0) * 10) / 10;
                    const nextDur = next ? Math.round((next.burnDuration || 0) * 10) / 10 : undefined;
                    lines.push({
                        icon: p.icons.info,
                        text: p.t("stat.burn_time", {
                            value: statLine(
                                `${curDur}${p.t("abbr.seconds")}`,
                                nextDur !== undefined ? `${nextDur}${p.t("abbr.seconds")}` : undefined
                            )
                        }),
                        tone: [255, 200, 120]
                    });
                }
                if (jamMult < 1) {
                    // Jam penalty is shown inline in the fire-rate row to keep temporary debuffs easy to scan.
                }
            }

            if (type.id !== "support" && bestDamageBoost > 1) {
                lines.push({
                    icon: p.icons.damage,
                    text: p.t("stat.damage_buff", { value: toBuffPercent(bestDamageBoost) }),
                    tone: [220, 90, 90]
                });
            } else if (type.id !== "support" && bestDamageBoost < 1) {
                lines.push({
                    icon: p.icons.damage,
                    text: p.t("stat.tile_damage", { value: this.formatSignedPercent(bestDamageBoost) }),
                    tone: [255, 120, 120]
                });
            }

            if (type.id !== "support" && bestKillGoldChance > 0 && bestKillGoldBonus > 0) {
                lines.push({
                    icon: p.icons.gold,
                    text: p.t("stat.aura_gold_bonus", {
                        chance: `${Math.round(bestKillGoldChance * 1000) / 10}%`,
                        value: bestKillGoldBonus
                    }),
                    tone: [255, 210, 120]
                });
            }

            let specialShotLine = null;
                if (type.id !== "support") {
                if (type.id === "basic" && ((cur.specialShotChance || 0) > 0 || (next?.specialShotChance || 0) > 0)) {
                    specialShotLine = {
                        icon: p.icons.info,
                        text: p.t("stat.special_shot", { value: statLine(
                            this.formatChanceValue(cur.specialShotChance || 0),
                            next ? this.formatChanceValue(next.specialShotChance || 0) : undefined
                        ) }),
                        tone: [255, 205, 120]
                    };
                }

                const baseCritChance = cur.critChance ?? type.critChance ?? tower.baseCritChance ?? 0;
                const nextCritChanceBase = next ? (next.critChance ?? type.critChance ?? baseCritChance) : undefined;
                const baseCritMult = cur.critMult ?? type.critMult ?? tower.baseCritMult ?? 1;
                const nextCritMult = next ? (next.critMult ?? type.critMult ?? baseCritMult) : undefined;
                if ((baseCritChance || nextCritChanceBase || bestCritChanceBoost > 0) && baseCritMult > 1) {
                    const curChance = Math.max(0, baseCritChance + bestCritChanceBoost);
                    const nextChance = nextCritChanceBase !== undefined
                        ? Math.max(0, nextCritChanceBase + bestCritChanceBoost)
                        : undefined;
                    const fmtCrit = (chance, mult) => this.formatCritValue(chance, mult);
                    const critSegments = this.buildTileAdjustedSegments(
                        baseCritChance,
                        curChance,
                        (chance) => `${Math.round(chance * 100)}%`
                    );
                    if (critSegments) {
                        lines.push({
                            icon: p.icons.crit,
                            tone: [255, 190, 130],
                            segments: [
                                { text: `${p.t("stat.crit", { value: "" })}`.replace(/:\s*$/, ": "), color: [245, 248, 255] },
                                ...critSegments,
                                { text: ` x${baseCritMult.toFixed(1)}`, color: [245, 248, 255] },
                                ...(nextChance !== undefined
                                    ? [
                                        { text: " -> ", color: [210, 220, 235] },
                                        { text: fmtCrit(nextChance, nextCritMult ?? baseCritMult), color: [245, 248, 255] }
                                    ]
                                    : [])
                            ]
                        });
                    } else {
                        lines.push({
                            icon: p.icons.crit,
                            text: p.t("stat.crit", { value: statLine(
                                fmtCrit(curChance, baseCritMult),
                                nextChance !== undefined ? fmtCrit(nextChance, nextCritMult ?? baseCritMult) : undefined
                            ) }),
                            tone: [255, 190, 130]
                        });
                    }
                }
            }

            const specialTileLines = this.getTowerSpecialBuildTileStatLines(tower);
            if (specialTileLines.length > 0) {
                lines.push(...specialTileLines);
            }
            if (specialShotLine) {
                lines.push(specialShotLine);
            }

            const w = 252;
            const headH = 28;
            const rowH = 22;
            const pad = 10;
            const iconSize = 18;
            const h = headH + lines.length * rowH + pad * 2;

            return {
                towerTitle,
                levelLabel: next
                    ? p.t("stat.level_progress", { level: tower.level, next: tower.level + 1 })
                    : p.t("stat.level_max", { level: tower.level }),
                levelLabelTint: next ? [210, 230, 255] : [255, 210, 255],
                lines,
                w,
                h,
                headH,
                rowH,
                pad,
                iconSize
            };
        }

        renderTowerStatsPanel(ctx, panel, ox = 0, oy = 0, alphaScale = 1) {
            const {
                towerTitle,
                levelLabel,
                levelLabelTint,
                lines,
                w,
                h,
                headH,
                rowH,
                pad,
                iconSize
            } = panel;
            const alpha = (value) => Math.max(0, Math.min(255, Math.round(value * alphaScale)));

            ctx.push?.();
            if (ctx.textFont) {
                ctx.textFont(p.variables.textFontFontick);
            }
            if (ctx.imageMode) {
                ctx.imageMode(p.CORNER);
            }

            ctx.stroke(255, 255, 255, alpha(35));
            ctx.strokeWeight(1);
            ctx.fill(16, 22, 34, alpha(238));
            ctx.rect(ox, oy, w, h, 10);

            ctx.noStroke();
            ctx.fill(60, 110, 180, alpha(130));
            ctx.rect(ox, oy, w, headH, 10, 10, 0, 0);

            ctx.fill(255, 255, 255, alpha(255));
            ctx.textAlign(p.LEFT, p.CENTER);
            ctx.textSize(13);
            ctx.text(towerTitle, ox + pad, oy + headH / 2 + 1);

            ctx.textAlign(p.RIGHT, p.CENTER);
            ctx.textSize(11);
            ctx.fill(levelLabelTint[0], levelLabelTint[1], levelLabelTint[2], alpha(255));
            ctx.text(levelLabel, ox + w - pad, oy + headH / 2 + 1);

            lines.forEach((line, i) => {
                const rowY = oy + headH + pad + i * rowH;
                const tone = line.tone || [180, 180, 180];

                ctx.noStroke();
                ctx.fill(tone[0], tone[1], tone[2], alpha(42));
                ctx.rect(ox + 6, rowY - 2, w - 12, rowH - 2, 6);

                if (line.icon) {
                    ctx.tint?.(255, alpha(255));
                    ctx.image(line.icon, ox + pad, rowY, iconSize, iconSize);
                    ctx.noTint?.();
                }

                ctx.fill(245, 248, 255, alpha(255));
                ctx.textAlign(p.LEFT, p.CENTER);
                ctx.textSize(13);
                const textX = ox + pad + iconSize + 8;
                const textY = rowY + iconSize / 2;
                if (Array.isArray(line.segments) && line.segments.length > 0) {
                    let cursorX = textX;
                    for (const segment of line.segments) {
                        if (!segment?.text) continue;
                        const color = segment.color || [245, 248, 255];
                        ctx.fill(color[0], color[1], color[2], alpha(255));
                        ctx.text(segment.text, cursorX, textY);
                        cursorX += ctx.textWidth(segment.text);
                    }
                } else {
                    ctx.text(line.text, textX, textY);
                }
            });
            ctx.pop?.();
        }

        buildTowerStatsPanelGfx(tower) {
            const panel = this.getTowerStatsPanelData(tower);
            const gfx = this.createUiGraphics(panel.w, panel.h);
            gfx.clear();
            this.renderTowerStatsPanel(gfx, panel);
            return { gfx, w: panel.w, h: panel.h };
        }

        drawTowerStats(tower, x, y) {
            const useCache = this.shouldCacheHoverUiPanels();
            let panelGfx = this._towerStatsPanelGfx;
            let panelW = this._towerStatsPanelState?.w || panelGfx?.width || 220;
            let panelH = this._towerStatsPanelState?.h || panelGfx?.height || 120;
            let directPanel = null;

            if (!useCache) {
                directPanel = this.getTowerStatsPanelData(tower);
                panelW = directPanel.w;
                panelH = directPanel.h;
            } else {
                const now = this.getPerfNow();
                const cacheState = this._towerStatsPanelState || {};
                const needsRefresh =
                    !this._towerStatsPanelGfx ||
                    cacheState.tower !== tower ||
                    cacheState.level !== tower.level ||
                    cacheState.maxLevel !== tower.maxLevel ||
                    cacheState.typeId !== tower.type?.id ||
                    now >= (this._towerStatsPanelNextRefresh || 0);

                if (needsRefresh) {
                    const panel = this.buildTowerStatsPanelGfx(tower);
                    this._towerStatsPanelGfx = panel.gfx;
                    this._towerStatsPanelState = {
                        tower,
                        level: tower.level,
                        maxLevel: tower.maxLevel,
                        typeId: tower.type?.id,
                        w: panel.w,
                        h: panel.h
                    };
                    this._towerStatsPanelNextRefresh = now + 120;
                }

                panelGfx = this._towerStatsPanelGfx;
                panelW = this._towerStatsPanelState?.w || panelGfx?.width || 220;
                panelH = this._towerStatsPanelState?.h || panelGfx?.height || 120;
            }

            let sx = x + 88;
            let sy = y - panelH / 2;
            const hudButtons = [
                this.pauseButton,
                this.waveButton,
                this.towerStatsButton
            ].filter(Boolean);
            const hudButtonsTop = hudButtons.length > 0
                ? Math.min(...hudButtons.map(btn => btn.y - btn.h / 2 + p.height / 2))
                : p.height - 10;
            const maxStatsY = Math.max(10, hudButtonsTop - panelH - 12);

            sx = Math.min(Math.max(sx, 10), p.width - panelW - 10);
            sy = Math.min(Math.max(sy, 10), maxStatsY);
            const hovered = this.isPopupHovered(sx, sy, panelW, panelH);
            const panelAlphaScale = hovered ? 0.4 : 1;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 7);
                if (useCache) {
                    p.tint(255, 255 * panelAlphaScale);
                    p.image(panelGfx, sx, sy);
                    p.noTint();
                } else if (directPanel) {
                    this.renderTowerStatsPanel(p, directPanel, sx, sy, panelAlphaScale);
                }
            p.pop();
        }

        drawTowerDamagePanel() {
            if (!this.towerDamagePanelOpen) return;

            const mode = this.towerDamagePanelMode || "total";
            const rows = this.getTowerDamageRows(mode);
            const { panelX, panelY, panelW, titleH, tabH, headH, rowH, pad, maxRows, tabs, closeButton } = this.getTowerDamagePanelMetrics();
            const visibleRows = rows.slice(0, maxRows);
            const hasMore = rows.length > visibleRows.length;
            const bodyRows = Math.max(visibleRows.length, 1) + (hasMore ? 1 : 0);
            const panelH = headH + pad * 2 + bodyRows * rowH;
            const needsResize =
                !this._towerDamagePanelGfx ||
                this._towerDamagePanelGfx.width !== panelW ||
                this._towerDamagePanelGfx.height !== panelH;

            if (needsResize) {
                this._towerDamagePanelGfx = this.createUiGraphics(panelW, panelH);
                this._towerDamagePanelDirty = true;
            }

            if (this._towerDamagePanelDirty) {
                const gfx = this._towerDamagePanelGfx;
                gfx.clear();

                const clipText = (text, maxWidth) => {
                    if (gfx.textWidth(text) <= maxWidth) return text;
                    let clipped = text;
                    while (clipped.length > 0 && gfx.textWidth(`${clipped}...`) > maxWidth) {
                        clipped = clipped.slice(0, -1);
                    }
                    return clipped ? `${clipped}...` : "...";
                };

                gfx.stroke(255, 255, 255, 35);
                gfx.strokeWeight(1);
                gfx.fill(16, 22, 34, 240);
                gfx.rect(0, 0, panelW, panelH, 10);

                gfx.noStroke();
                gfx.fill(60, 110, 180, 130);
                gfx.rect(0, 0, panelW, titleH, 10, 10, 0, 0);
                gfx.fill(30, 45, 68, 215);
                gfx.rect(0, titleH, panelW, tabH, 0, 0, 0, 0);
                gfx.fill(255, 255, 255, 20);
                gfx.rect(pad, titleH - 2, panelW - pad * 2, 1, 1);

                gfx.fill(255);
                gfx.textAlign(p.LEFT, p.CENTER);
                gfx.textSize(14);
                gfx.text(p.t("panel.tower_damage"), pad, titleH / 2 + 1);

                gfx.stroke(255, 90, 90, 235);
                gfx.strokeWeight(1.4);
                gfx.fill(110, 24, 32, 220);
                gfx.rect(closeButton.x, closeButton.y, closeButton.w, closeButton.h, 6);
                gfx.line(
                    closeButton.x + 5,
                    closeButton.y + 5,
                    closeButton.x + closeButton.w - 5,
                    closeButton.y + closeButton.h - 5
                );
                gfx.line(
                    closeButton.x + closeButton.w - 5,
                    closeButton.y + 5,
                    closeButton.x + 5,
                    closeButton.y + closeButton.h - 5
                );

                tabs.forEach(tab => {
                    const active = tab.id === mode;
                    gfx.stroke(active ? 110 : 80, active ? 180 : 110, active ? 255 : 150, active ? 220 : 120);
                    gfx.strokeWeight(active ? 1.6 : 1);
                    gfx.fill(active ? [60, 120, 210, 190] : [36, 52, 76, 180]);
                    gfx.rect(tab.x, tab.y, tab.w, tab.h, 7);

                    gfx.noStroke();
                    gfx.fill(active ? 255 : 205);
                    gfx.textAlign(p.CENTER, p.CENTER);
                    gfx.textSize(11);
                    gfx.text(tab.label, tab.x + tab.w / 2, tab.y + tab.h / 2 + 1);
                });

                if (visibleRows.length === 0) {
                    gfx.fill(220, 230, 255);
                    gfx.textAlign(p.LEFT, p.TOP);
                    gfx.textSize(13);
                    gfx.text(
                        mode === "wave" ? p.t("panel.no_wave_damage") : p.t("panel.no_damage"),
                        pad,
                        headH + pad
                    );
                } else {
                    visibleRows.forEach((entry, index) => {
                        const rowY = headH + pad + index * rowH;
                        const tower = entry.tower;
                        const accent = this.getTowerListAccentColor(tower);
                        const dmgX = panelW - pad;
                        const nameMaxWidth = Math.max(80, dmgX - pad - 18);
                        const nameText = clipText(`${index + 1}. ${entry.name}`, nameMaxWidth);

                        gfx.stroke(accent[0], accent[1], accent[2], 210);
                        gfx.strokeWeight(1.6);
                        gfx.fill(accent[0], accent[1], accent[2], 18 + (index % 2) * 8);
                        gfx.rect(6, rowY - 1, panelW - 12, rowH - 2, 6);

                        gfx.noStroke();
                        gfx.fill(245, 248, 255);
                        gfx.textAlign(p.LEFT, p.CENTER);
                        gfx.textSize(12);
                        gfx.text(nameText, pad, rowY + rowH / 2);

                        gfx.textAlign(p.RIGHT, p.CENTER);
                        gfx.fill(255, 210, 90);
                        gfx.text(p.t("panel.damage_value", { value: Math.round(entry.totalDamage) }), dmgX, rowY + rowH / 2);
                    });

                    if (hasMore) {
                        const rowY = headH + pad + visibleRows.length * rowH;
                        gfx.fill(200, 210, 230);
                        gfx.textAlign(p.LEFT, p.CENTER);
                        gfx.textSize(11);
                        gfx.text(p.t("panel.more_towers", { count: rows.length - visibleRows.length }), pad, rowY + rowH / 2);
                    }
                }

                this._towerDamagePanelDirty = false;
            }

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 8);
                p.image(this._towerDamagePanelGfx, panelX, panelY);
            p.pop();
        }

        getBuildTooltipPanelData(t, base) {
            const pad = 10;
            const rowH = 22;
            const headH = 30;
            const iconSize = 18;
            const toBuffPercent = (mult) => `${Math.round((mult - 1) * 100)}%`;
            const burnStackCap = 5;

            let lines = [];
            if (t.id === "support") {
                lines = [
                    { icon: p.icons.range, text: `${Math.round(base.range)}`, tone: [90, 170, 255] },
                    { icon: p.icons.fireRate, text: p.t("stat.fire_rate_buff", { value: toBuffPercent(base.fireRateBoost) }), tone: [110, 220, 140] },
                    // { icon: p.icons.damage, text: `Damage Buff: ${toBuffPercent(base.damageBoost)}`, tone: [220, 90, 90] },
                    { icon: p.icons.range, text: p.t("stat.range_buff", { value: toBuffPercent(base.rangeBoost) }), tone: [110, 220, 255] },
                    { icon: p.icons.crit, text: p.t("stat.crit_chance_buff", { value: `${Math.round((base.critChanceBoost || 0) * 100)}%` }), tone: [255, 190, 130] },
                ];
            } else if (t.id === "singularity") {
                const charge = Math.round((base.chargePerEnemy || 0) * 1000) / 10;

                lines = [
                    { icon: p.icons.damage, text: `${base.damage}`, tone: [220, 90, 90] },
                    { icon: p.icons.fireRate, text: p.t("stat.charge_per_enemy", { value: this.formatChargeRate(charge) }), tone: [110, 220, 140] },
                    { icon: p.icons.range, text: `${Math.round(base.range)}`, tone: [90, 170, 255] }
                ];

                if (base.slowFactor) {
                    lines.push({
                        icon: p.icons.slow,
                        text: Math.round((1 - base.slowFactor) * 100) + "%",
                        tone: [110, 220, 255]
                    });
                }
                if (base.burnDamage) {
                    const burn = Math.round(base.burnDamage * 100) / 100;
                    lines.push({
                        icon: p.icons.fire,
                        text: p.t("stat.burn_dps", { value: burn, stacks: burnStackCap }),
                        tone: [255, 140, 90]
                    });
                    lines.push({
                        icon: p.icons.info,
                        text: this.formatBurnHealCutValue(burnStackCap),
                        tone: [255, 170, 170]
                    });
                }
                if (base.burnDuration) {
                    const dur = Math.round(base.burnDuration * 10) / 10;
                    lines.push({
                        icon: p.icons.info,
                        text: p.t("stat.burn_time", { value: `${dur}${p.t("abbr.seconds")}` }),
                        tone: [255, 200, 120]
                    });
                }
            } else if (t.id === "orbital") {
                const attackRate = this.getTowerAttackRateInfo(t, base);

                lines = [
                    { icon: p.icons.damage, text: `${base.damage}`, tone: [220, 90, 90] },
                    { icon: p.icons.fireRate, text: `${this.formatAttackRateText(attackRate)}`, tone: [110, 220, 140] },
                    { icon: p.icons.range, text: `9999`, tone: [120, 200, 255] }
                ];

                if (base.slowFactor) {
                    const slowPct = Math.round((1 - base.slowFactor) * 100);
                    const slowDur = Math.round((base.slowDuration || 0) * 10) / 10;
                    lines.push({
                        icon: p.icons.slow,
                        text: p.t("stat.slow", { value: this.formatSlowValue(slowPct, slowDur) }),
                        tone: [110, 220, 255]
                    });
                }
            } else {
                const attackRate = this.getTowerAttackRateInfo(t, base);
                lines = [
                    { icon: p.icons.damage, text: this.formatTowerDamageText(t, base, base.damage), tone: [220, 90, 90] },
                    {
                        icon: p.icons.fireRate,
                        text: t.id === "cat_revolver"
                            ? `${this.formatAttackRateText(attackRate, { showBurst: true })}`
                            : `${this.formatAttackRateText(attackRate)}`,
                        tone: [110, 220, 140]
                    },
                    { icon: p.icons.range, text: `${Math.round(base.range)}`, tone: [90, 170, 255] }
                ];

                if ((base.projectileCount ?? 1) > 1) {
                    lines.push({
                        icon: p.icons.multishot,
                        text: `${Math.max(1, base.projectileCount ?? 1)}`,
                        tone: [240, 210, 120]
                    });
                }

                let specialShotLine = null;
                if (t.id === "basic" && (base.specialShotChance || 0) > 0) {
                    specialShotLine = {
                        icon: p.icons.info,
                        text: p.t("stat.special_shot", { value: this.formatChanceValue(base.specialShotChance) }),
                        tone: [255, 205, 120]
                    };
                }

                if (base.splashRadius) {
                    lines.push({
                        icon: p.icons.aoe,
                        text: `${Math.round(base.splashRadius)}`,
                        tone: [255, 170, 110]
                    });
                }

                if (t.id === "cleaver") {
                    const stunPct = Math.round((1 - (t.primarySlowFactor ?? 0)) * 100);
                    const stunDur = Math.round((base.primarySlowDuration ?? t.primarySlowDuration ?? 0.5) * 10) / 10;
                    lines.push({
                        icon: p.icons.slow,
                        text: p.t("stat.slow", { value: this.formatSlowValue(stunPct, stunDur) }),
                        tone: [110, 220, 255]
                    });
                }

                if (base.bounces) {
                    lines.push({
                        icon: p.icons.bounce,
                        text: `${base.bounces}`,
                        tone: [170, 170, 170]
                    });
                }
                
                if (base.slowFactor) {
                    lines.push({
                        icon: p.icons.slow,
                        text: Math.round((1 - base.slowFactor) * 100) + "%",
                        tone: [110, 220, 255]
                    });
                }
                if (base.burnDamage) {
                    const burn = Math.round(base.burnDamage * 100) / 100;
                    lines.push({
                        icon: p.icons.fire,
                        text: p.t("stat.burn_dps", { value: burn, stacks: burnStackCap }),
                        tone: [255, 140, 90]
                    });
                    lines.push({
                        icon: p.icons.info,
                        text: this.formatBurnHealCutValue(burnStackCap),
                        tone: [255, 170, 170]
                    });
                }
                if (base.burnDuration) {
                    const dur = Math.round(base.burnDuration * 10) / 10;
                    lines.push({
                        icon: p.icons.info,
                        text: p.t("stat.burn_time", { value: `${dur}${p.t("abbr.seconds")}` }),
                        tone: [255, 200, 120]
                    });
                }

                const baseCritChance = base.critChance ?? t.critChance ?? 0;
                const baseCritMult = base.critMult ?? t.critMult ?? 1;
                if (baseCritChance > 0 && baseCritMult > 1) {
                    lines.push({
                        icon: p.icons.crit,
                        text: p.t("stat.crit", { value: this.formatCritValue(baseCritChance, baseCritMult) }),
                        tone: [255, 190, 130]
                    });
                }
                if (specialShotLine) {
                    lines.push(specialShotLine);
                }
            }
            
            const w = 190;
            const h = headH + lines.length * rowH + pad * 2;

            return {
                title: t.name,
                lines,
                w,
                h,
                headH,
                rowH,
                pad,
                iconSize
            };
        }

        renderBuildTooltipPanel(ctx, panel, ox = 0, oy = 0) {
            const { title, lines, w, h, headH, rowH, pad, iconSize } = panel;

            ctx.push?.();
            if (ctx.textFont) {
                ctx.textFont(p.variables.textFontFontick);
            }
            if (ctx.imageMode) {
                ctx.imageMode(p.CORNER);
            }

            ctx.stroke(255, 255, 255, 35);
            ctx.strokeWeight(1);
            ctx.fill(16, 22, 34, 238);
            ctx.rect(ox, oy, w, h, 10);

            ctx.noStroke();
            ctx.fill(58, 108, 176, 130);
            ctx.rect(ox, oy, w, headH, 10, 10, 0, 0);

            ctx.fill(255);
            ctx.textAlign(p.LEFT, p.CENTER);
            ctx.textSize(13);
            ctx.text(title, ox + pad, oy + headH / 2 + 1);

            lines.forEach((line, i) => {
                const rowY = oy + headH + pad + i * rowH;
                const tone = line.tone || [180, 180, 180];

                ctx.noStroke();
                ctx.fill(tone[0], tone[1], tone[2], 42);
                ctx.rect(ox + 6, rowY - 2, w - 12, rowH - 2, 6);

                if (line.icon) {
                    ctx.image(line.icon, ox + pad, rowY, iconSize, iconSize);
                }

                ctx.fill(240);
                ctx.textAlign(p.LEFT, p.CENTER);
                ctx.textSize(13);
                ctx.text(
                    line.text,
                    ox + pad + iconSize + 8,
                    rowY + iconSize / 2
                );
            });
            ctx.pop?.();
        }

        buildTowerBuildTooltipGfx(t, base) {
            const panel = this.getBuildTooltipPanelData(t, base);
            const gfx = this.createUiGraphics(panel.w, panel.h);
            gfx.clear();
            this.renderBuildTooltipPanel(gfx, panel);
            return { gfx, w: panel.w, h: panel.h };
        }

        drawBuildTooltip(t, base, x, y) {
            const useCache = this.shouldCacheHoverUiPanels();
            const cacheKey = t?.id || "unknown";
            let cached = useCache ? this._towerBuildTooltipCache.get(cacheKey) : null;
            let directPanel = null;
            if (!useCache) {
                directPanel = this.getBuildTooltipPanelData(t, base);
            } else if (!cached) {
                cached = this.buildTowerBuildTooltipGfx(t, base);
                this._towerBuildTooltipCache.set(cacheKey, cached);
            }

            const margin = 14;
            let tx = x + 18;
            const panelW = useCache ? cached.w : directPanel.w;
            const panelH = useCache ? cached.h : directPanel.h;
            let ty = y - panelH / 2;

            if (tx + panelW > p.width - margin) {
                tx = x - panelW - 18;
            }

            if (ty + panelH > p.height - margin) {
                ty = p.height - panelH - margin;
            }

            if (ty < margin) {
                ty = margin;
            }

            p.push();
                p.translate(-p.width / 2, -p.height / 2 , 5);
                if (useCache) {
                    p.image(cached.gfx, tx, ty);
                } else if (directPanel) {
                    this.renderBuildTooltipPanel(p, directPanel, tx, ty);
                }
            p.pop();
        }

        drawLivesIndicator() {
            const base = this.path.points[this.path.points.length - 1];;
            const x = base.x;
            const y = base.y;
            const r = 24;


            const safeLives = Math.max(this.lives, 0);
            const colorIndex = Math.floor(safeLives / 10) % 10;
            const color = p.STEAM_LEVEL_COLORS[colorIndex];
            const shapeIndex = Math.floor(safeLives / 100) % 2;
            const outerR = r * 1.25;

            p.push();
                p.translate(-p.width / 2, -p.height / 2, 2);

                if (this.isBaseHovered()) {
                    p.noStroke();
                    p.fill(92, 160, 230, 30);
                    p.circle(x, y, outerR * 2.55);

                    p.noFill();
                    p.stroke(255, 208, 138, 150);
                    p.strokeWeight(1.8);
                    p.circle(x, y, outerR * 2.2);
                }

                const drawHexagon = (cx, cy, radius) => {
                    p.beginShape();
                    for (let i = 0; i < 6; i++) {
                        const a = p.TWO_PI * (i / 6) - p.PI / 6;
                        p.vertex(cx + Math.cos(a) * radius, cy + Math.sin(a) * radius);
                    }
                    p.endShape(p.CLOSE);
                };

                // основной контур (0–99 круг, 100–199 шестиугольник, далее повтор)
                p.fill(30, 30, 30);
                p.stroke(...color);
                p.strokeWeight(2.5);
                if (shapeIndex === 0) {
                    p.circle(x, y, outerR * 2);
                } else {
                    drawHexagon(x, y, outerR);
                }

                if (this.baseHitFx > 0) {
                    const hitT = this.baseHitFx;
                    p.noStroke();
                    p.fill(255, 90, 90, 85 * hitT);
                    p.circle(x, y, r * (2.4 + (1 - hitT) * 0.5));

                    p.noFill();
                    p.stroke(255, 80, 80, 220 * hitT);
                    p.strokeWeight(1.5 + 3 * hitT);
                    p.circle(x, y, r * (2.6 + (1 - hitT) * 0.7));
                }


                // цифра
                p.noStroke();
                p.fill(255);
                p.textAlign(p.CENTER, p.CENTER);
                p.textSize(18);
                p.text(this.lives, x, y - 2);
            p.pop();
        }

        spawnUnit() {
            const entry = this.waveQueue.shift();
            const type = this.getWaveEntryType(entry);
            const data = { ...(entry?.data || {}) };
            const get_reward = entry?.get_reward ?? true;

            if (!type) return;

            if (type?.id === "boss_trio") {
                if (!this.trioSpawnPending || this.trioSpawnPending.count <= 0) {
                    this.trioGroupSeq += 1;
                    this.trioSpawnPending = { id: this.trioGroupSeq, count: 3 };
                }

                const trioIndex = 3 - this.trioSpawnPending.count;
                data.trioGroupId = this.trioSpawnPending.id;
                data.trioIndex = trioIndex;
                this.trioSpawnPending.count -= 1;
            }

            if (data.spawnInvulnerabilityDuration == null) {
                data.spawnInvulnerabilityDuration = this.waveSpawnInvulnerability;
            }

            const u = new Unit(this, this.path, type, data, get_reward);
            this.units.push(u);
        }

        resetTowerCombatState() {
            for (const t of this.towers) {
                if (!t) continue;

                t.cooldown = 0;
                t.jamTimer = 0;
                t.jamFireRateMult = 1;

                if (t.magazine > 0) {
                    t.shotsLeft = t.magazine;
                    t.reloadTimer = 0;
                    t.timeSinceShot = 0;
                }
            }
        }

        update(dt) {
            const perfUpdateStart = this.getPerfNow();
            this.damageClock += dt;
            this.simTime += dt;
            if (this.waveIntroTimer > 0) {
                this.waveIntroTimer = Math.max(0, this.waveIntroTimer - dt);
            }
            if (this.waveState !== "prep") {
                this.waveDamageClock += dt;
            }

            if (this.waveState === "prep") {
                if (this.canAutoStartNextWave()) {
                    this.prepTimer += dt / Math.max(1, p.gameSpeed || 1);
                } else {
                    this.prepTimer = 0;
                }
                this.projectiles = [];
                this.baseHitFx = 0;

                for (const g of this.goldPopups) {
                    g.update(dt);
                }
                for (const d of this.baseDamagePopups) {
                    d.update(dt);
                }
                for (const c of this.critPopups) {
                    c.update(dt);
                }
                for (const u of this.upgradePopups) {
                    u.update(dt);
                }
                for (const chest of this.lootChests) {
                    chest.update(dt);
                }

                this.goldPopups = this.goldPopups.filter(g => !g.dead);
                this.baseDamagePopups = this.baseDamagePopups.filter(d => !d.dead);
                this.critPopups = this.critPopups.filter(c => !c.dead);
                this.upgradePopups = this.upgradePopups.filter(u => !u.dead);
                this.lootChests = this.lootChests.filter(chest => !chest.dead);
                if (this.canAutoStartNextWave() && this.prepTimer >= this.autoStartWaveDelay) {
                    this.startWave();
                }
                this.addPerfSample("update", this.getPerfNow() - perfUpdateStart);
                return;
            }

            if (this.waveState !== "prep" && this.waveState !== "cleanup") {
                this.timeAcc += dt;
                if (this.timeAcc >= 1) {
                    const inc = Math.floor(this.timeAcc);
                    p.menu.time += inc;
                    this.timeAcc -= inc;
                }
            }
            
            if (this.waveState === "spawning") {
                if (this.unitsToSpawn > 0) {
                    this.spawnAcc += dt;
                    while (this.spawnAcc >= this.spawnInterval && this.unitsToSpawn > 0) {
                        this.spawnAcc -= this.spawnInterval;
                        this.unitsToSpawn--;
                        this.spawnUnit();
                    }
                } else {
                    // все враги заспавнены
                    this.waveState = "active";
                }
            }

            if (this.waveState === "active") {
                const anyAlive = this.units.some(u => u.alive && !u.reachedBase);
                if (!anyAlive) {
                    this.waveState = "cleanup";
                    this.cleanupTimer = 0;
                    this.resetTowerCombatState();
                    this.playTempSound(p.variables.soundWaveEnd || p.variables.soundBound);
                }
            }

            let hpRatioSum = 0;
            let aliveCount = 0;
            this.rebuildUnitSpatialHash();
            for (const u of this.units) {
                if (!u.alive || u.reachedBase) continue;
                const maxHp = u.hpMax ?? u.maxHp ?? 0;
                if (maxHp <= 0) continue;
                hpRatioSum += Math.max(0, Math.min(1, u.hp / maxHp));
                aliveCount++;
            }
            this.aliveUnitHpRatioAvg = aliveCount > 0 ? (hpRatioSum / aliveCount) : 1;

            let perfStart = this.getPerfNow();
            for (const u of this.units) u.update(dt);
            this.addPerfSample("unitsUpdate", this.getPerfNow() - perfStart);
            this.flushPendingUnitSpawns();

            // урон базе
            for (const u of this.units) {
                if (u.reachedBase && u.alive) {
                    u.alive = false;
                    if (u.noBaseDamage) continue;
                    const hitDamage = Math.max(1, Math.round(u.contactDamage ?? 1));
                    this.lives -= hitDamage;
                    this.baseHitFx = 1;
                    this.playTempSound(p.variables.soundBaseHit || p.variables.soundBound);

                    const base = this.path.getPoint(this.path.lastIndex()) || { x: u.x, y: u.y };
                    this.baseDamagePopups.push(
                        new BaseDamagePopup(base.x, base.y - 18, hitDamage)
                    );

                    if (u.trioGroupId) {
                        this.failTrioGroup(u.trioGroupId);
                    }
                }
            }

            perfStart = this.getPerfNow();
            for (const t of this.towers) {
                t.update(dt, this.units, this.projectiles);
                t.updateBuffs(this.towers, dt);
            }
            this.addPerfSample("towersUpdate", this.getPerfNow() - perfStart);

            perfStart = this.getPerfNow();
            for (const pr of this.projectiles) pr.update(dt, this.units);;
            this.addPerfSample("projectilesUpdate", this.getPerfNow() - perfStart);

            for (const u of this.units) {
                if (!u.alive && !u._rewarded && !u.reachedBase) {
                    u._rewarded = true;
                    const reward = Math.max(0, Math.round(u.reward ?? 0));
                    this.money += reward;
                    if (!u.noScore) {
                        p.variables.score += u.cost;
                    }
                    if (reward > 0) {
                        this.spawnGoldPopup(u.x, u.y - 20, reward);
                    }

                    const killerTower = u.lastHitTower;
                    const killerTile = killerTower?.specialBuildTile || null;
                    const killGoldBonus = Math.max(0, Math.round(killerTile?.killGoldBonus ?? 0));
                    if (killGoldBonus > 0) {
                        this.money += killGoldBonus;
                        killerTile.goldEarned = Math.max(0, Math.round((killerTile.goldEarned ?? 0) + killGoldBonus));
                        this._towerStatsPanelNextRefresh = 0;
                        this.spawnGoldPopup(killerTower.x, killerTower.y - 20, killGoldBonus);
                    }

                    const auraGoldChance = Math.max(0, Number(killerTower?.cachedAuraKillGoldChance) || 0);
                    const auraGoldBonus = Math.max(0, Math.round(killerTower?.cachedAuraKillGoldBonus ?? 0));
                    const auraGoldTile = killerTower?.cachedAuraGoldTile || null;
                    if (auraGoldChance > 0 && auraGoldBonus > 0 && Math.random() < auraGoldChance) {
                        this.money += auraGoldBonus;
                        if (auraGoldTile) {
                            auraGoldTile.goldEarned = Math.max(0, Math.round((auraGoldTile.goldEarned ?? 0) + auraGoldBonus));
                        }
                        this._towerStatsPanelNextRefresh = 0;
                        this.spawnGoldPopup(killerTower.x, killerTower.y - 34, auraGoldBonus);
                    }

                    const isBoss = u.enemyClass === "boss" || u.id.startsWith("boss_");
                    if (isBoss) {
                        const allowBossChest =
                            !u.noChestDrop &&
                            u.id !== "boss_trio" &&
                            (u.id !== "boss_split" || (u.splitLevel || 0) === 0);
                        if (allowBossChest) {
                            this.spawnLootChest(
                                u.x,
                                u.y,
                                u.chestGold ?? 20,
                                u.chestLifetime ?? 5,
                                "boss"
                            );
                        }
                    } else {
                        const chestChance = u.chestDropChance ?? 0;
                        if (chestChance > 0 && Math.random() < chestChance) {
                            this.spawnLootChest(
                                u.x,
                                u.y,
                                u.chestGold ?? 20,
                                u.chestLifetime ?? 5,
                                "normal"
                            );
                        }
                    }

                }
            }

            for (const g of this.goldPopups) {
                g.update(dt);
            }
            for (const d of this.baseDamagePopups) {
                d.update(dt);
            }
            for (const c of this.critPopups) {
                c.update(dt);
            }
            for (const u of this.upgradePopups) {
                u.update(dt);
            }
            for (const chest of this.lootChests) {
                chest.update(dt);
            }
            this.baseHitFx = Math.max(0, this.baseHitFx - dt * 2.2);

            perfStart = this.getPerfNow();
            // чистка
            this.units = this.units.filter(u => !u.shouldRemove);
            this.cleanupTrioGroupTracking();
            this.projectiles = this.projectiles.filter(pr => pr.alive);
            this.goldPopups = this.goldPopups.filter(g => !g.dead);
            this.baseDamagePopups = this.baseDamagePopups.filter(d => !d.dead);
            this.critPopups = this.critPopups.filter(c => !c.dead);
            this.upgradePopups = this.upgradePopups.filter(u => !u.dead);
            this.lootChests = this.lootChests.filter(chest => !chest.dead);
            this.addPerfSample("cleanup", this.getPerfNow() - perfStart);

            if (this.waveState === "cleanup") {
                this.cleanupTimer += dt;

                const hasPendingDeathFx = this.units.some(u => !u.alive && !u.shouldRemove);
                const hasPendingProjectiles = this.projectiles.length > 0;
                const hasPendingPopups = this.goldPopups.length > 0 || this.critPopups.length > 0 || this.upgradePopups.length > 0;
                const hasPendingBaseFx = this.baseDamagePopups.length > 0 || this.baseHitFx > 0;
                const hasPendingFx = hasPendingDeathFx || hasPendingProjectiles || hasPendingPopups || hasPendingBaseFx;

                if (!hasPendingFx || this.cleanupTimer >= this.cleanupDuration) {
                    const shouldShowEndChoice = this.wave >= this.mainCampaignWaves && !this.endChoiceShown;
                    const hasLootToAutoCollect = shouldShowEndChoice && this.lootChests.some(chest => chest && !chest.dead);
                    if (hasLootToAutoCollect) {
                        this.autoCollectAllLootChests({ playSound: true, showPopups: true });
                        this.cleanupTimer = 0;
                    } else {
                        this.lastWaveDamageDuration = this.waveDamageClock;
                        this.waveState = "prep";
                        this.prepTimer = 0;
                        this.cleanupTimer = 0;
                        this.resetTowerCombatState();

                        if (shouldShowEndChoice) {
                            this.endChoiceShown = true;
                            this.waitingEndChoice = true;
                        }
                    }
                }
            }
            // game over
            if (this.lives <= 0) {
                if (!p.gameEnded) {
                    p.gameEnded = true;
                    p.gameWon = false;
                    this.playLoseMusic();
                }

                p.menu.showGameEndScreen();
            }
            this.addPerfSample("update", this.getPerfNow() - perfUpdateStart);
        }

        // drawGrid() {
        //     p.push();
        //         p.translate(-p.width/2, -p.height/2, 1);
        //         p.stroke(255, 30);
        //         p.strokeWeight(1);
        //         const ox = this.fieldOffsetX || 0;
        //         const oy = this.fieldOffsetY || 0;

        //         for (let x = 0; x <= this.cols * this.grid; x += this.grid) {
        //             p.line(x + ox, oy, x + ox, this.rows * this.grid + oy);
        //         }
        //         for (let y = 0; y <= this.rows * this.grid; y += this.grid) {
        //             p.line(ox, y + oy, this.cols * this.grid + ox, y + oy);
        //         }
        //     p.pop();

        //     const addLink = (map, x1, y1, x2, y2) => {
        //         const key1 = `${x1},${y1}`;
        //         const key2 = `${x2},${y2}`;

        //         if (!map.has(key1)) map.set(key1, { x: x1, y: y1, N: false, E: false, S: false, W: false });
        //         if (!map.has(key2)) map.set(key2, { x: x2, y: y2, N: false, E: false, S: false, W: false });

        //         const a = map.get(key1);
        //         const b = map.get(key2);

        //         if (x2 > x1) { a.E = true; b.W = true; return; }
        //         if (x2 < x1) { a.W = true; b.E = true; return; }
        //         if (y2 > y1) { a.S = true; b.N = true; return; }
        //         if (y2 < y1) { a.N = true; b.S = true; return; }
        //     };

        //     const tiles = new Map();
        //     for (let i = 0; i < this.path.points.length - 1; i++) {
        //         const a = this.path.points[i];
        //         const b = this.path.points[i + 1];
        //         const dx = b.x - a.x;
        //         const dy = b.y - a.y;
        //         const len = Math.max(Math.abs(dx), Math.abs(dy));
        //         const steps = Math.round(len / this.grid);
        //         if (steps <= 0) continue;

        //         const sx = Math.sign(dx);
        //         const sy = Math.sign(dy);
        //         for (let s = 0; s < steps; s++) {
        //             const x1 = a.x + sx * this.grid * s;
        //             const y1 = a.y + sy * this.grid * s;
        //             const x2 = a.x + sx * this.grid * (s + 1);
        //             const y2 = a.y + sy * this.grid * (s + 1);
        //             addLink(tiles, x1, y1, x2, y2);
        //         }
        //     }

        //     p.push();
        //         p.translate(-p.width/2, -p.height/2, 1);
        //         p.imageMode(p.CENTER);

        //         for (const tile of tiles.values()) {
        //             const end = this.path?.points?.[this.path.points.length - 1];
        //             if (
        //                 end &&
        //                 Math.abs(tile.x - end.x) < 0.01 &&
        //                 Math.abs(tile.y - end.y) < 0.01
        //             ) {
        //                 continue;
        //             }
        //             let tex = p.pathTextures.straight;
        //             let rot = 0;
        //             const isCrossroads = tile.N && tile.E && tile.S && tile.W;

        //             if (isCrossroads) {
        //                 tex = p.pathTextures.crossroads;
        //                 rot = 0;
        //             } else if (
        //                 (tile.N && tile.E) ||
        //                 (tile.E && tile.S) ||
        //                 (tile.S && tile.W) ||
        //                 (tile.W && tile.N)
        //             ) {
        //                 tex = p.pathTextures.corner;

        //                 // Базовая ориентация ugl.png: слева -> вниз (W + S)
        //                 if (tile.S && tile.W) rot = 0;
        //                 else if (tile.W && tile.N) rot = p.HALF_PI;
        //                 else if (tile.N && tile.E) rot = p.PI;
        //                 else if (tile.E && tile.S) rot = p.PI + p.HALF_PI;
        //             } else {
        //                 // Дополнительный поворот на 90° для всех неугловых тайлов
        //                 // (по факту: вертикаль <-> горизонталь меняются местами)
        //                 rot = (tile.E || tile.W) ? p.PI : p.HALF_PI;
        //             }

        //             p.push();
        //                 p.translate(tile.x, tile.y);
        //                 p.rotate(rot);
        //                 p.image(tex, 0, 0, this.grid, this.grid);
        //             p.pop();
        //         }

        //         const start = this.path?.points?.[0];
        //         const next = this.path?.points?.[1];
        //         if (start && next && p.pathTextures.cave) {
        //             const dx = next.x - start.x;
        //             const dy = next.y - start.y;
        //             const angle = Math.atan2(dy, dx);
        //             const rot = angle;
        //             p.push();
        //                 p.translate(start.x, start.y);
        //                 p.rotate(rot);
        //                 p.image(p.pathTextures.cave, 0, 0, this.grid, this.grid);
        //             p.pop();
        //         }
        //     p.pop();
        // }

        handleTowerPanelClick(x, y) {
            if (this.handleTowerDamagePanelClick(x, y)) return true;
            if (x < FIELD_WIDTH) return false;

            const panelX = FIELD_WIDTH + 8;
            const panelY = 8;
            const panelW = p.width - panelX - 8;
            const panelPad = 10;
            const cols = 2;
            const gap = 10;
            const cardsTop = panelY + 42;
            const cardW = Math.floor((panelW - panelPad * 2 - gap) / cols);
            const cardH = 92;
            const keys = Object.keys(p.TOWER_TYPES).filter(key => this.isTowerUnlocked(key));

            for (let idx = 0; idx < keys.length; idx++) {
                const key = keys[idx];
                const t = p.TOWER_TYPES[key];
                const col = idx % cols;
                const row = Math.floor(idx / cols);
                const cardX = panelX + panelPad + col * (cardW + gap);
                const cardY = cardsTop + row * (cardH + gap);

                if (
                    x > cardX &&
                    x < cardX + cardW &&
                    y > cardY &&
                    y < cardY + cardH
                ) {
                    if (!this.canBuildTowerType(t)) {
                        if (this.selectedTowerType === key) {
                            this.selectedTowerType = null;
                            this.buildMode = null;
                        }
                        return true;
                    }
                    const buildCost = this.getTowerBuildCost(key);
                    if (this.money < buildCost) {
                        return true;
                    }

                    if (this.selectedTowerType === key) {
                        this.selectedTowerType = null;
                        this.buildMode = null;
                    } else {
                        this.selectedTowerType = key;
                        this.buildMode = null;
                    }
                    return true;
                }
            }

            // ================= SPEED BUTTONS =================
            if (!this.areSpeedButtonsVisible()) {
                return false;
            }
            const { btnW, btnH, speedGap, baseX, baseY, speeds } = this.getSpeedButtonsLayout();

            for (let i = 0; i < speeds.length; i++) {
                const bx = baseX + i * (btnW + speedGap);
                const by = baseY;

                if (
                    x > bx &&
                    x < bx + btnW &&
                    y > by &&
                    y < by + btnH
                ) {
                    p.gameSpeed = speeds[i];
                    return true;
                }
            }

            return false;
        }

        handleTowerDamagePanelClick(x, y) {
            if (!this.towerDamagePanelOpen) return false;

            const mode = this.towerDamagePanelMode || "total";
            const rows = this.getTowerDamageRows(mode);
            const { panelX, panelY, panelW, headH, rowH, pad, maxRows, tabs, closeButton } = this.getTowerDamagePanelMetrics();
            const visibleRows = rows.slice(0, maxRows);
            const hasMore = rows.length > visibleRows.length;
            const bodyRows = Math.max(visibleRows.length, 1) + (hasMore ? 1 : 0);
            const panelH = headH + pad * 2 + bodyRows * rowH;

            if (
                x >= panelX + closeButton.x &&
                x <= panelX + closeButton.x + closeButton.w &&
                y >= panelY + closeButton.y &&
                y <= panelY + closeButton.y + closeButton.h
            ) {
                this.towerDamagePanelOpen = false;
                return true;
            }

            for (const tab of tabs) {
                if (
                    x >= panelX + tab.x &&
                    x <= panelX + tab.x + tab.w &&
                    y >= panelY + tab.y &&
                    y <= panelY + tab.y + tab.h
                ) {
                    if (this.towerDamagePanelMode !== tab.id) {
                        this.towerDamagePanelMode = tab.id;
                        this._towerDamagePanelDirty = true;
                        this._towerDamagePanelNextRefresh = 0;
                    }
                    return true;
                }
            }

            if (x >= panelX && x <= panelX + panelW && y >= panelY && y <= panelY + panelH) {
                return true;
            }

            return false;
        }
        
        draw() {
            const perfDrawStart = this.getPerfNow();
            // p.push();

                this.drawFieldStatic();
                this.drawBuildGrid();
                this.drawLivesIndicator();
                // this.drawBuildMenu();

                let perfStart = this.getPerfNow();
                for (const t of this.towers) t.draw();
                this.addPerfSample("drawTowers", this.getPerfNow() - perfStart);

                perfStart = this.getPerfNow();
                p._renderer.GL.disable(p._renderer.GL.DEPTH_TEST);
                for (const u of this.units) if (!u.reachedBase) u.draw();
                for (const t of this.towers) t.drawCleaverImpactFxOverlay?.();
                for (const u of this.units) if (!u.reachedBase) u.drawStatusBars?.();
                p._renderer.GL.enable(p._renderer.GL.DEPTH_TEST);
                this.addPerfSample("drawUnits", this.getPerfNow() - perfStart);

                perfStart = this.getPerfNow();
                for (const chest of this.lootChests) chest.draw();
                for (const pr of this.projectiles) pr.draw();
                for (const g of this.goldPopups) {
                    g.draw();
                }
                for (const c of this.critPopups) {
                    c.draw();
                }
                for (const d of this.baseDamagePopups) {
                    d.draw();
                }
                for (const u of this.upgradePopups) {
                    u.draw();
                }
                this.addPerfSample("drawEffects", this.getPerfNow() - perfStart);

                this.drawSelectedTowerGhost();

                perfStart = this.getPerfNow();
                p._renderer.GL.disable(p._renderer.GL.DEPTH_TEST);
                this.drawTowerPanel();
                this.drawSelectedTowerHoverTileInfo();
                this.drawUpgradeMenu();
                this.drawTowerDamagePanel();
                p._renderer.GL.enable(p._renderer.GL.DEPTH_TEST);
                this.addPerfSample("drawUi", this.getPerfNow() - perfStart);
            // p.pop();
            this.addPerfSample("draw", this.getPerfNow() - perfDrawStart);
        }
    }

    // ======== TOWER DEFENCE CORE (Waypoints + Grid25) ========

    p.update = function(delta)
    {
    
        //VIBE
        if (p.gameStarted && !p._gameInited) {
            p._gameInited = true;
            p.game.start(p.variables.diff, p.game?.chosenPath || 1);
            p._accumulator = 0; // инициализация аккумулятора при старте игры
        }

        const isPaused = !!p.game?.waitingEndChoice || !!p.game?.paused;
        if (isPaused) {
            if (p._accumulator === undefined) p._accumulator = 0;
            p._accumulator = 0;
            p.game.draw();
            return;
        }

        // Fixed timestep с аккумулятором - гарантирует одинаковую скорость на всех ПК
        // Независимо от герцовки монитора или производительности ПК
        if (p._accumulator === undefined) p._accumulator = 0;
        
        const step = 1 / p.fr;          // фиксированный шаг времени (75 Гц = ~0.0133 сек)
        const maxCatchUp = 0.25;         // защита от "спирали смерти": не накапливаем больше 250мс
        
        // Ограничиваем delta, чтобы избежать больших скачков при лагах
        const clampedDelta = Math.min(delta, 0.1); // максимум 100мс за кадр
        p._accumulator = Math.min(p._accumulator + clampedDelta, maxCatchUp);

        // Обновляем логику фиксированными шагами (как твой оригинальный цикл)
        // Ограничение в 128 итераций защищает от зависания при критических лагах
        let iter = 0;
        const maxIter = 128;
        while (p._accumulator >= step && iter < maxIter) {
            p.game.notePerfLogicStep?.();
            p.game.update(step);  // все движущиеся объекты обновляются с фиксированным шагом
            p._accumulator -= step;
            iter++;
        }

        p.game.draw();
    }

    class LootChest {
        constructor(x, y, value = 20, lifetime = 5, sourceType = "normal") {
            this.x = x;
            this.y = y;
            this.value = Math.max(1, Math.round(value));
            this.life = Math.max(0.1, lifetime);
            this.maxLife = this.life;
            this.sourceType = sourceType === "boss" ? "boss" : "normal";
            this.pickRadius = 18;
            this.dead = false;
            this.seed = Math.random() * 1000;
        }

        update(dt) {
            if (this.dead) return;
            this.life -= dt;
            if (this.life <= 0) {
                this.dead = true;
            }
        }

        collect() {
            if (this.dead) return false;
            this.dead = true;
            return true;
        }

        draw() {
            if (this.dead) return;

            const t = Math.max(0, this.life / this.maxLife);
            const blink = this.life <= 1.2 ? (Math.sin(p.frameCount * 0.6 + this.seed) + 1) * 0.5 : 0;
            const alpha = 210 * Math.min(1, t + 0.2) * (0.75 + blink * 0.25);
            const bob = Math.sin(p.frameCount * 0.12 + this.seed) * 1.8;

            p.push();
                p.translate(
                    -p.width / 2 + this.x,
                    -p.height / 2 + this.y + bob,
                    4
                );

                // base shadow
                p.noStroke();
                p.fill(0, 0, 0, alpha * 0.28);
                p.ellipse(0, 10, 30, 11);

                const chestTex = p.enemyTextures?.chest;
                if (chestTex) {
                    p.imageMode(p.CENTER);
                    p.tint(255, 255, 255, alpha);
                    p.image(chestTex, 0, 0, 30, 30);
                    p.noTint();
                } else {
                    // fallback если текстура не загрузилась
                    p.rectMode(p.CENTER);
                    p.fill(140, 95, 50, alpha);
                    p.rect(0, 2, 22, 14, 3);
                    p.fill(230, 190, 90, alpha);
                    p.rect(0, -2, 4, 8, 2);
                    p.rectMode(p.CORNER);
                }
            p.pop();
        }
    }

    class GoldPopup {
        constructor(x, y, value) {
            const jitter = (Math.random() - 0.5) * 8;
            this.x = x + 12 + jitter;
            this.y = y;
            this.value = value;

            this.life = 1.0;     // 1 → 0
            this.vy = -30;       // скорость всплытия
            
        }

        update(dt) {
            this.y += this.vy * dt;
            this.life -= dt;
        }

        draw() {

            if (this.life <= 0) return;

            const alpha = 255 * this.life;

            // плавное всплытие
            const rise = (1 - this.life) * 30;
            const drawY = Math.max(20, this.y - rise);

            // лёгкий масштаб
            const scale = 1 + (1 - this.life) * 0.3;

            p.push();

                p.translate(
                    -p.width / 2 + this.x,
                    -p.height / 2 + drawY,
                    5
                );

                p.scale(scale);

                // тень
                p.fill(0, 0, 0, alpha * 0.4);
                p.textAlign(p.CENTER);
                p.textSize(18);
                p.text(`+${this.value}`, 2, 2);

                // текст
                p.fill(255, 220, 80, alpha);
                p.text(`+${this.value}`, 0, 0);

            p.pop();
        }


        get dead() {
            return this.life <= 0;
        }
    }

    class CritDamagePopup {
        constructor(x, y, value) {
            this.x = x;
            this.y = y;
            this.value = Math.max(1, Math.round(value || 1));
            this.life = 0.9;
            this.vy = -24;
        }

        update(dt) {
            this.y += this.vy * dt;
            this.life -= dt;
        }

        draw() {
            if (this.life <= 0) return;

            const alpha = 255 * this.life;
            const rise = (1 - this.life) * 18;
            const drawY = Math.max(20, this.y - rise);
            const scale = 1 + (1 - this.life) * 0.25;

            p.push();
                p.translate(
                    -p.width / 2 + this.x,
                    -p.height / 2 + drawY,
                    6
                );

                p.scale(scale);
                p.textAlign(p.CENTER);
                p.textSize(18);

                p.fill(0, 0, 0, alpha * 0.4);
                p.text(`${this.value}!`, 2, 2);

                p.fill(255, 90, 90, alpha);
                p.text(`${this.value}!`, 0, 0);
            p.pop();
        }

        get dead() {
            return this.life <= 0;
        }
    }

    class TowerUpgradePopup {
        constructor(x, y, text, towerId = null) {
            this.x = x;
            this.y = y;
            this.text = text;
            this.towerId = towerId;
            this.icon = p.TOWER_TYPES?.[towerId]?.texture?.[0] || null;
            this.life = 1.4;
            this.vy = -22;
        }

        update(dt) {
            this.y += this.vy * dt;
            this.life -= dt;
        }

        draw() {
            if (this.life <= 0) return;

            const alpha = 255 * Math.max(0, this.life);
            const rise = (1 - this.life) * 18;

            p.push();
                p.translate(
                    -p.width / 2 + this.x,
                    -p.height / 2 + this.y - rise,
                    6
                );

                p.textAlign(p.LEFT, p.CENTER);
                p.textSize(14);
                const iconSize = this.icon ? 18 : 0;
                const gap = this.icon ? 8 : 0;
                const textW = p.textWidth(this.text);
                const boxW = Math.max(120, textW + iconSize + gap + 26);
                const boxH = 28;
                const boxX = -boxW / 2;

                p.noStroke();
                p.fill(12, 18, 28, alpha * 0.74);
                p.rect(boxX, -boxH / 2, boxW, boxH, 10);

                if (this.icon) {
                    p.tint(255, 255, 255, alpha);
                    p.imageMode(p.CORNER);
                    p.image(this.icon, boxX + 8, -iconSize / 2, iconSize, iconSize);
                    p.noTint();
                }

                p.fill(120, 240, 160, alpha);
                p.text(this.text, boxX + 10 + iconSize + gap, -2);
            p.pop();
        }

        get dead() {
            return this.life <= 0;
        }
    }

    class BaseDamagePopup {
        constructor(x, y, value) {
            this.x = x;
            this.y = y;
            this.value = value;
            this.life = 0.75;
            this.vy = -40;
        }

        update(dt) {
            this.y += this.vy * dt;
            this.life -= dt;
        }

        draw() {
            if (this.life <= 0) return;

            const alpha = 255 * (this.life / 0.75);
            const rise = (0.75 - this.life) * 26;

            p.push();
                p.translate(
                    -p.width / 2 + this.x,
                    -p.height / 2 + this.y - rise,
                    6
                );
                p.textAlign(p.CENTER);
                p.textSize(20);

                p.fill(0, 0, 0, alpha * 0.35);
                p.text(`-${this.value}`, 2, 2);

                p.fill(255, 95, 95, alpha);
                p.text(`-${this.value}`, 0, 0);
            p.pop();
        }

        get dead() {
            return this.life <= 0;
        }
    }

    p.drawButtons = function(type)
    {
        for(let i of p.buttonsArr)
        {
            if(i.type == type)
            {
                i.show();
            }
        }
    }

    p.checkClickButtons = function(x,y, type)
    {
        let clicked = false;
        for(let i of p.buttonsArr)
        {
            if(i.type == type)
            {
                if (x >= i.x - i.w/2 +p.width/2 && x <= i.x - i.w/2 +p.width/2 + i.w &&
                y >= i.y - i.h/2 +p.height/2 && y <= i.y - i.h/2 +p.height/2 + i.h ) 
                {
                    i.click();
                    clicked = true;
                }
            }
        }
        return clicked;
    }

};

try {
    new p5(s);
} catch (err) {
    console.error("[new p5 failed]", err);
    throw err;
}
