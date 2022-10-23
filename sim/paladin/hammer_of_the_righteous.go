package paladin

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (paladin *Paladin) registerHammerOfTheRighteousSpell() {
	baseCost := paladin.BaseMana * 0.06

	numHits := core.MinInt32(core.TernaryInt32(paladin.HasMajorGlyph(proto.PaladinMajorGlyph_GlyphOfHammerOfTheRighteous), 4, 3), paladin.Env.GetNumTargets())
	results := make([]*core.SpellEffect, numHits)

	paladin.HammerOfTheRighteous = paladin.RegisterSpell(core.SpellConfig{
		ActionID:     core.ActionID{SpellID: 53595},
		SpellSchool:  core.SpellSchoolHoly,
		ProcMask:     core.ProcMaskMeleeMHSpecial,
		Flags:        core.SpellFlagMeleeMetrics,
		ResourceType: stats.Mana,
		BaseCost:     baseCost,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				Cost: baseCost * (1 - 0.02*float64(paladin.Talents.Benediction)),
				GCD:  core.GCDDefault,
			},
			IgnoreHaste: true,
			CD: core.Cooldown{
				Timer:    paladin.NewTimer(),
				Duration: time.Second * 6,
			},
		},

		DamageMultiplierAdditive: 1 + paladin.getItemSetRedemptionPlateBonus2() + paladin.getItemSetT9PlateBonus2() + paladin.getItemSetLightswornPlateBonus2(),
		CritMultiplier:           paladin.MeleeCritMultiplier(),
		ThreatMultiplier:         1,

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			avgWeaponDamage := spell.Unit.AutoAttacks.MH.CalculateAverageWeaponDamage(spell.MeleeAttackPower())
			speed := spell.Unit.AutoAttacks.MH.SwingSpeed
			baseDamage := (avgWeaponDamage / speed) * 4

			curTarget := target
			for hitIndex := int32(0); hitIndex < numHits; hitIndex++ {
				results[hitIndex] = spell.CalcDamage(sim, curTarget, baseDamage, spell.OutcomeMeleeSpecialHitAndCrit)
				curTarget = sim.Environment.NextTargetUnit(curTarget)
			}

			curTarget = target
			for hitIndex := int32(0); hitIndex < numHits; hitIndex++ {
				spell.DealDamage(sim, results[hitIndex])
				curTarget = sim.Environment.NextTargetUnit(curTarget)
			}
		},
	})
}
