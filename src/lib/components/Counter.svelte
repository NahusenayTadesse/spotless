<!-- Counter.svelte -->
<script lang="ts">
	import { onMount } from "svelte";

	interface Props {
		value: number;
		duration?: number;
		format?: (num: number) => string;
		class?: string;
	}

	let { value, duration = 1000, format = (num) => Math.floor(num).toString(), class: className = "" }: Props = $props();

	let displayValue = $state(0);
	let animationFrameId: number | null = null;

	$effect(() => {
		if (animationFrameId !== null) {
			cancelAnimationFrame(animationFrameId);
		}

		const startValue = displayValue;
		const startTime = performance.now();
		const targetValue = value;
		const difference = targetValue - startValue;

		const animate = (currentTime: number) => {
			const elapsed = currentTime - startTime;
			const progress = Math.min(elapsed / duration, 1);

			// Easing function (ease-out-cubic)
			const easeProgress = 1 - Math.pow(1 - progress, 3);

			displayValue = startValue + difference * easeProgress;

			if (progress < 1) {
				animationFrameId = requestAnimationFrame(animate);
			} else {
				displayValue = targetValue;
				animationFrameId = null;
			}
		};

		animationFrameId = requestAnimationFrame(animate);

		return () => {
			if (animationFrameId !== null) {
				cancelAnimationFrame(animationFrameId);
			}
		};
	});
</script>

<span class={className}>{format(displayValue)}</span>
