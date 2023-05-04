import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import "@lottiefiles/lottie-player";

const ErrorPage = () => {
    const {error, status} = useRouteError()
    return (
		
<div class="d-flex align-items-center min-vh-100 py-5">
	<div class="container py-5">
		<div class="row align-items-center">
			<div class="col-md-6 order-md-2">
				<div class="lc-block"><script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
					<lottie-player src="https://assets9.lottiefiles.com/packages/lf20_kcsr6fcp.json" background="transparent" speed="1" loop="" autoplay=""></lottie-player>
				</div>
			</div>
			<div class="col-md-6 text-center text-md-start ">
				<div class="lc-block mb-3">
					<div editable="rich">
						<h1 class="fw-bold h4">PAGE NOT FOUND!<br/></h1>
					</div>
				</div>
				<div class="lc-block mb-3">
					<div editable="rich">
						<h1 class="display-1 fw-bold text-muted">Error 404</h1>

					</div>
				</div>
				<div class="lc-block mb-5">
					<div editable="rich">
						<p class="rfs-11 fw-light"> The page you are looking for was moved, removed or might never existed.</p>
					</div>
				</div>
				<div class="lc-block">
					<Link class="btn btn-lg btn-danger" to="/" role="button">Back to homepage</Link>
				</div>
			</div>
		</div>
	</div>
</div>

    );
};

export default ErrorPage;