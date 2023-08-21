<script>
	import IconRightArrow from '$lib/assets/icons/IconRightArrow.svelte'
	import IconRightChevronSmall from '$lib/assets/icons/IconRightChevronSmall.svelte'
</script>

<section class="hero min-h-screen">
	<div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 relative">
		<!-- <h1
			class="font-mono overflow-hidden whitespace-nowrap mb-10 text-3xl font-extrabold text-primary md:text-5xl lg:text-6xl animate-typing border-r-4 border-r-white p-3">
			root@ternary:~# Coming soon...
		</h1> -->

		<div class="mockup-code text-start mb-10">
			<pre data-prefix="$"><code>sudo apt-get upgrade ternaryOS</code></pre>
			<pre data-prefix=">" class="text-warning"><code>installing...</code></pre>
			<pre data-prefix=">" class="text-success"><code>coming soon!</code></pre>
		</div>

		<!-- <h1
			class="overflow-hidden whitespace-nowrap font-mono text-xl font-bold animate-typing border-r-4 border-r-white">
			Hello, world.
		</h1> -->
		<div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
			<a
				href="https://github.com/CodeCrowCorp"
				class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg hover:bg-green-800">
				Join our efforts
				<IconRightArrow />
			</a>
		</div>
	</div>
</section>
