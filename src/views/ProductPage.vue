<template>
  <div>
    <transition name="fade" mode="out-in">
      <img
        :src="currentImage"
        :key="currentImage"
        alt="Banner Image"
        class="img-3"
      />
      <!-- <img loading="lazy" srcSet="image-1.png" class="img-3" /> -->
    </transition>
  </div>

  <div class="div-12">
    <div class="div-13">
      <img loading="lazy" srcSet="ellipse-7.png" class="img-4" />
      <div class="div-14">Men’s T-Shirts</div>
    </div>
    <div class="div-15">
      <img loading="lazy" srcSet="ellipse-8.png" class="img-5" />
      <div class="div-16">Women’s Wear</div>
    </div>
    <div class="div-17">
      <img loading="lazy" srcSet="ellipse-9.png" class="img-6" />
      <div class="div-18">Winter Collections</div>
    </div>
    <div class="div-19">
      <img loading="lazy" srcSet="ellipse-10.png" class="img-7" />
      <div class="div-20">Hooded T-Shirts</div>
    </div>
    <div class="div-21">
      <img loading="lazy" srcSet="ellipse-11.png" class="img-8" />
      <div class="div-22">Polo Neck T-Shirts</div>
    </div>
    <div class="div-23">
      <img loading="lazy" srcSet="ellipse-12.png" class="img-9" />
      <div class="div-24">Full Sleeves T-Shirts</div>
    </div>
  </div>
  <div class="div-25">
    <div class="div-26">
      <div class="column">
        <img loading="lazy" srcSet="image-2.png" class="img-10" />
      </div>
      <div class="column-2">
        <img loading="lazy" srcSet="image-3.png" class="img-11" />
      </div>
    </div>
  </div>
  <div class="div-27">
    <div class="div-28">
      <div class="column-3">
        <img loading="lazy" srcSet="image-4.png" class="img-12" />
      </div>
      <div class="column-4">
        <img loading="lazy" srcSet="image-6.png" class="img-13" />
      </div>
      <div class="column-5">
        <img loading="lazy" srcSet="image-5.png" class="img-14" />
      </div>
    </div>
  </div>
  <div class="div-29">
    <div class="div-30"></div>
    <div class="div-31">Trending T-Shirts</div>
    <div class="div-32"></div>
  </div>
  <div class="div-33">
    <div class="div-34">
      <div class="column-6">
        <div class="div-35">
          <div class="div-36" @mouseover="showIcons" @mouseout="hideIcons">
            <img srcSet="rectangle-3.png" alt="rectangle-3" class="img-15" />
            <div class="div-37">
              <div class="">
                <div class="icons-container" v-show="hovered">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2b80ff-80e0-4e9c-9425-195c3079faab?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd53ded5-3591-4e78-b7af-c5ae6da959b3?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08332871-9edc-4cb9-92e0-d66c16f3b064?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="div-39">Men Henley Neck<br />Full Sleeve Red Wine</div>
          <div class="div-40">
            <div class="div-41">₹399</div>
            <div class="div-42">₹1299</div>
          </div>
        </div>
        <div class="div-63">
          <div class="div-64">S</div>
          <div class="div-65">M</div>
          <div class="div-66">L</div>
          <div class="div-67">XL</div>
          <div class="div-68">XXL</div>
        </div>
      </div>
      <div class="column-6">
        <div class="div-35">
          <div class="div-36" @mouseover="showIcons4" @mouseout="hideIcons4">
            <img
              loading="lazy"
              alt="rectangle-4"
              srcSet="rectangle-4.png"
              class="img-15"
            />
            <div class="div-37">
              <div class="">
                <div class="icons-container" v-show="hovered4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2b80ff-80e0-4e9c-9425-195c3079faab?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd53ded5-3591-4e78-b7af-c5ae6da959b3?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08332871-9edc-4cb9-92e0-d66c16f3b064?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="div-39">Men Henley Neck<br />Full Sleeve Red Wine</div>
          <div class="div-40">
            <div class="div-41">₹399</div>
            <div class="div-42">₹1299</div>
          </div>
        </div>
        <div class="div-69">
          <div class="div-70">S</div>
          <div class="div-71">M</div>
          <div class="div-72">L</div>
          <div class="div-73">XL</div>
          <div class="div-74">XXL</div>
        </div>
      </div>
      <div class="column-6">
        <div class="div-35">
          <div class="div-36" @mouseover="showIcons5" @mouseout="hideIcons5">
            <img loading="lazy" srcSet="rectangle-5.png" class="img-15" />
            <div class="div-37">
              <div class="">
                <div class="icons-container" v-show="hovered5">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2b80ff-80e0-4e9c-9425-195c3079faab?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd53ded5-3591-4e78-b7af-c5ae6da959b3?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08332871-9edc-4cb9-92e0-d66c16f3b064?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="div-39">Men Henley Neck<br />Full Sleeve Red Wine</div>
          <div class="div-40">
            <div class="div-41">₹399</div>
            <div class="div-42">₹1299</div>
          </div>
        </div>
        <div class="div-75">
          <div class="div-76">S</div>
          <div class="div-77">M</div>
          <div class="div-78">L</div>
          <div class="div-79">XL</div>
          <div class="div-80">XXL</div>
        </div>
      </div>
      <div class="column-6">
        <div class="div-35">
          <div class="div-36" @mouseover="showIcons6" @mouseout="hideIcons6">
            <img loading="lazy" srcSet="rectangle-6.png" class="img-15" />
            <div class="div-37">
              <div class="">
                <div class="icons-container" v-show="hovered6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f2b80ff-80e0-4e9c-9425-195c3079faab?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd53ded5-3591-4e78-b7af-c5ae6da959b3?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/08332871-9edc-4cb9-92e0-d66c16f3b064?"
                    class="icon"
                    style="position: relative; top: 100px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="div-39">Men Henley Neck<br />Full Sleeve Red Wine</div>
          <div class="div-40">
            <div class="div-41">₹399</div>
            <div class="div-42">₹1299</div>
          </div>
        </div>
        <div class="div-81">
          <div class="div-82">S</div>
          <div class="div-83">M</div>
          <div class="div-84">L</div>
          <div class="div-85">XL</div>
          <div class="div-86">XXL</div>
        </div>
      </div>
    </div>
  </div>
  <div class="div-140">
    <div class="div-141">
      <button
        class="btn btn-md btn-style"
        style="
          background-color: #770015;
          color: #fff;
          font-family: Montserrat-Medium;
        "
      >
        VIEW ALL
      </button>
    </div>
    <div class="div-142">
      <div class="div-143"></div>
      <div class="div-144">Featured Products</div>
      <div class="div-145"></div>
    </div>
    <div class="div-146">
      <div class="div-147">
        <div class="column-13">
          <div class="div-148">
            <img loading="lazy" srcSet="rectangle-3.png" class="img-27" />
            <div class="div-149">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-150">
              <div class="div-151">₹399</div>
              <div class="div-152">₹1299</div>
            </div>
          </div>
          <div class="div-173">
            <div class="div-174">S</div>
            <div class="div-175">M</div>
            <div class="div-176">L</div>
            <div class="div-177">XL</div>
            <div class="div-178">XXL</div>
          </div>
        </div>
        <div class="column-13">
          <div class="div-148">
            <img loading="lazy" srcSet="rectangle-4.png" class="img-27" />
            <div class="div-149">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-150">
              <div class="div-151">₹399</div>
              <div class="div-152">₹1299</div>
            </div>
          </div>
          <div class="div-179">
            <div class="div-180">S</div>
            <div class="div-181">M</div>
            <div class="div-182">L</div>
            <div class="div-183">XL</div>
            <div class="div-184">XXL</div>
          </div>
        </div>
        <div class="column-13">
          <div class="div-148">
            <img loading="lazy" srcSet="rectangle-5.png" class="img-27" />
            <div class="div-149">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-150">
              <div class="div-151">₹399</div>
              <div class="div-152">₹1299</div>
            </div>
          </div>
          <div class="div-185">
            <div class="div-186">S</div>
            <div class="div-187">M</div>
            <div class="div-188">L</div>
            <div class="div-189">XL</div>
            <div class="div-190">XXL</div>
          </div>
        </div>
        <div class="column-13">
          <div class="div-148">
            <img loading="lazy" srcSet="rectangle-6.png" class="img-28" />
            <div class="div-149">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-150">
              <div class="div-151">₹399</div>
              <div class="div-152">₹1299</div>
            </div>
          </div>
          <div class="div-191">
            <div class="div-192">S</div>
            <div class="div-193">M</div>
            <div class="div-194">L</div>
            <div class="div-195">XL</div>
            <div class="div-196">XXL</div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-172"></div>
    <div class="div-197">
      <button
        class="btn btn-md btn-style"
        style="
          background-color: #770015;
          color: #fff;
          font-family: Montserrat-Medium;
        "
      >
        VIEW ALL
      </button>
    </div>
    <div>
      <transition name="fade" mode="out-in">
        <img
          :src="currentImage"
          :key="currentImage"
          alt="Banner Image"
          class="img-3"
        />
        <!-- <img loading="lazy" srcSet="image-1.png" class="img-3" /> -->
      </transition>
    </div>
    <div class="div-198">
      <div class="div-199"></div>
      <div class="div-200">New Products</div>
      <div class="div-201"></div>
    </div>
    <div class="div-202">
      <div class="div-203">
        <div class="column-18">
          <div class="div-204">
            <img loading="lazy" srcSet="rectangle-3.png" class="img-32" />
            <div class="div-205">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-206">
              <div class="div-207">₹399</div>
              <div class="div-208">₹1299</div>
            </div>
          </div>
          <div class="div-229">
            <div class="div-230">S</div>
            <div class="div-231">M</div>
            <div class="div-232">L</div>
            <div class="div-233">XL</div>
            <div class="div-234">XXL</div>
          </div>
        </div>
        <div class="column-18">
          <div class="div-204">
            <img loading="lazy" srcSet="rectangle-4.png" class="img-32" />
            <div class="div-205">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-206">
              <div class="div-207">₹399</div>
              <div class="div-208">₹1299</div>
            </div>
          </div>
          <div class="div-229">
            <div class="div-230">S</div>
            <div class="div-231">M</div>
            <div class="div-232">L</div>
            <div class="div-233">XL</div>
            <div class="div-234">XXL</div>
          </div>
        </div>
        <div class="column-18">
          <div class="div-204">
            <img loading="lazy" srcSet="rectangle-5.png" class="img-32" />
            <div class="div-205">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-206">
              <div class="div-207">₹399</div>
              <div class="div-208">₹1299</div>
            </div>
          </div>
          <div class="div-229">
            <div class="div-230">S</div>
            <div class="div-231">M</div>
            <div class="div-232">L</div>
            <div class="div-233">XL</div>
            <div class="div-234">XXL</div>
          </div>
        </div>
        <div class="column-18">
          <div class="div-204">
            <img loading="lazy" srcSet="rectangle-6.png" class="img-32" />
            <div class="div-205">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-206">
              <div class="div-207">₹399</div>
              <div class="div-208">₹1299</div>
            </div>
          </div>
          <div class="div-229">
            <div class="div-230">S</div>
            <div class="div-231">M</div>
            <div class="div-232">L</div>
            <div class="div-233">XL</div>
            <div class="div-234">XXL</div>
          </div>
        </div>
      </div>
    </div>

    <div class="div-253">
      <button
        class="btn btn-md btn-style"
        style="
          background-color: #770015;
          color: #fff;
          font-family: Montserrat-Medium;
        "
      >
        VIEW ALL
      </button>
    </div>
    <div class="div-254">
      <div class="div-255"></div>
      <div class="div-256">Best Selling Products</div>
      <div class="div-257"></div>
    </div>
    <div class="div-258">
      <div class="div-259">
        <div class="column-23">
          <div class="div-260">
            <img loading="lazy" srcSet="rectangle-3.png" class="img-36" />
            <div class="div-261">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-262">
              <div class="div-263">₹399</div>
              <div class="div-264">₹1299</div>
            </div>
          </div>
          <div class="div-285">
            <div class="div-286">S</div>
            <div class="div-287">M</div>
            <div class="div-288">L</div>
            <div class="div-289">XL</div>
            <div class="div-290">XXL</div>
          </div>
        </div>
        <div class="column-23">
          <div class="div-260">
            <img loading="lazy" srcSet="rectangle-4.png" class="img-36" />
            <div class="div-261">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-262">
              <div class="div-263">₹399</div>
              <div class="div-264">₹1299</div>
            </div>
          </div>
          <div class="div-285">
            <div class="div-286">S</div>
            <div class="div-287">M</div>
            <div class="div-288">L</div>
            <div class="div-289">XL</div>
            <div class="div-290">XXL</div>
          </div>
        </div>
        <div class="column-23">
          <div class="div-260">
            <img loading="lazy" srcSet="rectangle-5.png" class="img-36" />
            <div class="div-261">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-262">
              <div class="div-263">₹399</div>
              <div class="div-264">₹1299</div>
            </div>
          </div>
          <div class="div-285">
            <div class="div-286">S</div>
            <div class="div-287">M</div>
            <div class="div-288">L</div>
            <div class="div-289">XL</div>
            <div class="div-290">XXL</div>
          </div>
        </div>
        <div class="column-23">
          <div class="div-260">
            <img loading="lazy" srcSet="rectangle-6.png" class="img-36" />
            <div class="div-261">Men Henley Neck<br />Full Sleeve Red Wine</div>
            <div class="div-262">
              <div class="div-263">₹399</div>
              <div class="div-264">₹1299</div>
            </div>
          </div>
          <div class="div-285">
            <div class="div-286">S</div>
            <div class="div-287">M</div>
            <div class="div-288">L</div>
            <div class="div-289">XL</div>
            <div class="div-290">XXL</div>
          </div>
        </div>
      </div>
    </div>

    <div class="div-309">
      <button
        class="btn btn-md btn-style"
        style="
          background-color: #770015;
          color: #fff;
          font-family: Montserrat-Medium;
        "
      >
        VIEW ALL
      </button>
    </div>
    <div class="div-310">
      <div class="div-311">
        <div class="column-28">
          <div class="div-312">
            <img loading="lazy" srcSet="rectangle-18.png" class="img-40" />
            <div class="div-313">
              <p>Streetwear Collections</p>
            </div>
          </div>
        </div>
        <div class="column-29">
          <div class="div-314">
            <img loading="lazy" srcSet="rectangle-19.png" class="img-41" />
            <div class="div-315">
              <p>Striped T-Shirts</p>
            </div>
          </div>
        </div>
        <div class="column-30">
          <div class="div-316">
            <img loading="lazy" srcSet="rectangle-20.png" class="img-42" />
            <div class="div-317">Round Neck T-Shirts</div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-318">
      <div class="div-319">
        <div class="column-31">
          <div class="div-320">
            <img loading="lazy" srcSet="rectangle-21.png" class="img-43" />
            <div class="div-321">Printed T-Shirts</div>
          </div>
        </div>
        <div class="column-32">
          <div class="div-322">
            <img loading="lazy" srcSet="rectangle-22.png" class="img-44" />
            <div class="div-323">Oversized T-Shirts</div>
          </div>
        </div>
        <div class="column-33">
          <div class="div-324">
            <img loading="lazy" srcSet="rectangle-23.png" class="img-45" />
            <div class="div-325">Half Sleeves T-Shirts</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <transition name="fade" mode="out-in">
        <img
          :src="currentImage"
          :key="currentImage"
          alt="Banner Image"
          class="img-3"
        />
        <!-- <img loading="lazy" srcSet="image-1.png" class="img-3" /> -->
      </transition>
    </div>
    <div class="" style="margin-top: 10px">
      <div class="row">
        <div class="offset-md-1 col-md-5">
          <div class="div-327">
            <div class="div-328">
              <img loading="lazy" srcSet="diamond-1.png" class="img-47" />
              <div class="div-329">Hurry Up!</div>
              <div class="div-330">85% OFF</div>
              <div class="div-331">Sale</div>
              <div class="div-332">shop now</div>
            </div>
          </div>
        </div>
        <div class="col-md-5">
          <div class="div-333">
            <div class="div-334">
              <img loading="lazy" srcSet="discount-1.png" class="img-48" />
              <div class="div-329">Hurry Up!</div>
              <div class="div-330">75% OFF</div>
              <div class="div-331">Sale</div>
              <div class="div-332">shop now</div>
            </div>
          </div>
        </div>
      </div>
      <div class="div-339"></div>
    </div>
    <div class="div-340">
      <div class="div-341">
        <div class="ellipse-top-left"></div>
        <div class="ellipse-top-right"></div>
        <div class="div-342">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1443ae12-9222-498b-a326-ab0c21586a84?"
            class="img-49"
          />
          <div class="div-343">7 Days Return</div>
        </div>
        <div class="div-344"></div>
        <div class="div-345">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c38c068-0012-46f4-9e57-c011d1f1b186?"
            class="img-50"
          />
          <div class="div-346">Quality Products</div>
        </div>
        <div class="div-347"></div>
        <div class="div-348">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/1bdcbc15-e036-410c-9ed5-6c4d55a4f73d?"
            class="img-51"
          />
          <div class="div-349">Safe Payment</div>
        </div>
        <div class="div-350"></div>
        <div class="div-351">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/0791afc3-f3a9-4a1b-ab29-087735fa96fb?"
            class="img-52"
          />
          <div class="div-352">24x7 Helpline</div>
        </div>
      </div>
    </div>
    <div class="div-353">
      <div class="div-354"></div>
      <div class="div-355">
        <div class="div-356">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ccd07aa-57b6-4a89-ab23-bd66a117f773?"
            class="img-53"
          />
          <div class="div-357">
            <div class="div-358">
              Subscribe to get updates on exciting offers<br />& deals
            </div>
            <div class="div-359">
              <div class="col-8 div-360">
                <!-- <div class="div-360"></div> -->
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div class="col-4 div-361">
                <!-- <div class="div-361"></div> -->
                <button
                  type="button"
                  class="btn btn-md"
                  style="background: #ffffff; color: #770015"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-362"></div>
    <div class="div-363">
      <div class="div-364">
        <div class="column-34">
          <div class="div-365">
            <div class="div-366">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries....
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f961b966-5be4-45f2-87a6-53475052ec6b?"
              class="img-54"
            />
          </div>
        </div>
        <div class="column-35">
          <div class="div-367">
            <div class="div-368">ONLINE SHOPPING</div>
            <div class="div-369">
              Men’s T-Shirts<br />Women’s Wear<br />Winter Collections<br />Hooded
              T-Shirts<br />Streetwear Collections
            </div>
          </div>
        </div>
        <div class="column-36">
          <div class="div-370">
            <div class="div-371">CUSTOMER POLICIES</div>
            <div class="div-372">
              About Us<br />Terms & Conditions<br />Shipping & Returns Policy<br />Cancellation
              & Refund Policy<br />Contact Us
            </div>
          </div>
        </div>
        <div class="column-37">
          <div class="div-373">
            <div class="div-374">STORE INFORMATION</div>
            <div class="div-375">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a13ca93-961b-4a7c-a3cb-4f0503c75def?"
                class="img"
              />
              <div class="div-376">
                Lorem Ipsum is simply dummy text of the<br />printing and
                typesetting industry.
              </div>
            </div>
            <div class="div-377">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c862f65-1392-420f-b889-4f9fa2df99f2?"
                class="img"
              />
              <div class="div-376">Call Us: 1234567890</div>
            </div>
            <div class="div-379">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/07484f73-b9cb-4db2-9ca1-295ad28dc596?"
                class="img"
              />
              <div class="div-376">Email Us: info@yourmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="div-381">
      <p style="text-align: center">©2022-23 Powered By dummy team</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hovered: false,
      hovered4: false,
      hovered5: false,
      hovered6: false,
      images: [
        "image-1.png",
        "banner1-2.png",
        "banner1-3.png",

        // Add more image URLs as needed
      ],
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return process.env.BASE_URL + this.images[this.currentIndex];
    },
  },
  mounted() {
    this.startRotation();
  },
  methods: {
    showIcons() {
      this.hovered = true;
    },
    hideIcons() {
      this.hovered = false;
    },
    showIcons4() {
      this.hovered4 = true;
    },
    hideIcons4() {
      this.hovered4 = false;
    },
    showIcons5() {
      this.hovered5 = true;
    },
    hideIcons5() {
      this.hovered5 = false;
    },
    showIcons6() {
      this.hovered6 = true;
    },
    hideIcons6() {
      this.hovered6 = false;
    },
    startRotation() {
      setInterval(() => {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
      }, 5000); // Change the interval as needed (in milliseconds)
    },
  },
};
</script>
<style scoped>
.div {
  background-color: #fff;
  display: flex;
  flex-direction: column;
}
.img-3 {
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
}

@media (max-width: 991px) {
  .img-3 {
    max-width: 100%;
  }
}

.div-12 {
  align-self: center;
  display: flex;
  margin-top: 68px;
  width: 100%;
  max-width: 1120px;
  gap: 20px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-12 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
}

.div-13 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-4 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f1dbe9;
  width: 170px;
  height: 170px;
}

.div-14 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 26px;
  white-space: nowrap;
  font: 600 16px/21px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-14 {
    white-space: initial;
  }
}

.div-15 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-5 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  border-radius: 50%;
  background-color: #ddd3eb;
  width: 170px;
  height: 170px;
}

.div-16 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 27px;
  white-space: nowrap;
  font: 600 16px/21px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-16 {
    white-space: initial;
  }
}

.div-17 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-6 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  border-radius: 50%;
  background-color: #d3eaeb;
  width: 170px;
  height: 170px;
}

.div-18 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 26px;
  white-space: nowrap;
  font: 600 16px/21px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-18 {
    white-space: initial;
  }
}

.div-19 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-7 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  border-radius: 50%;
  background-color: #eff1d9;
  width: 170px;
  height: 170px;
}

.div-20 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 26px;
  white-space: nowrap;
  font: 600 16px/21px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-20 {
    white-space: initial;
  }
}

.div-21 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-8 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 170px;
  overflow: hidden;
  border-radius: 50%;
  background-color: #f1dadb;
  width: 170px;
  height: 170px;
}

.div-22 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 26px;
  white-space: nowrap;
  font: 600 16px/21px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-22 {
    white-space: initial;
  }
}

.div-23 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-9 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  overflow: hidden;
  border-radius: 50%;
  background-color: #d9f1de;
  width: 170px;
  height: 170px;
}

.div-24 {
  color: var(--Primary-Color_1, #1c1c1c);

  margin-top: 26px;
  white-space: nowrap;
  font: 600 16px/21px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-24 {
    white-space: initial;
  }
}

.div-25 {
  align-self: center;
  margin-top: 72px;
  width: 100%;
  max-width: 1120px;
}

@media (max-width: 991px) {
  .div-25 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-26 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-26 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column {
    width: 100%;
  }
}

.img-10 {
  aspect-ratio: 1.99;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .img-10 {
    max-width: 100%;
    margin-top: 20px;
  }
}

.column-2 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
}

@media (max-width: 991px) {
  .column-2 {
    width: 100%;
  }
}

.img-11 {
  aspect-ratio: 1.99;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .img-11 {
    max-width: 100%;
    margin-top: 20px;
  }
}

.div-27 {
  align-self: center;
  margin-top: 16px;
  width: 100%;
  max-width: 1120px;
  /* padding: 0 20px; */
}

@media (max-width: 991px) {
  .div-27 {
    max-width: 100%;
  }
}

.div-28 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-28 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-3 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-3 {
    width: 100%;
  }
}

.img-12 {
  aspect-ratio: 2.05;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .img-12 {
    margin-top: 20px;
  }
}

.column-4 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
}

@media (max-width: 991px) {
  .column-4 {
    width: 100%;
  }
}

.img-13 {
  aspect-ratio: 2.05;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .img-13 {
    margin-top: 20px;
  }
}

.column-5 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
}

@media (max-width: 991px) {
  .column-5 {
    width: 100%;
  }
}

.img-14 {
  aspect-ratio: 2.05;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
}

@media (max-width: 991px) {
  .img-14 {
    margin-top: 20px;
  }
}

.div-29 {
  align-self: center;
  display: flex;
  margin-top: 79px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-29 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
}

.div-30 {
  background-color: #ffc7d1;
  align-self: center;
  width: 380px;
  height: 1px;
  margin: auto 0;
}

.div-31 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  flex-grow: 1;
  flex-basis: auto;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
  font-size: 30px;
}

.div-32 {
  background-color: #ffc7d1;
  align-self: center;
  width: 380px;
  height: 1px;
  margin: auto 0;
}

.div-33 {
  align-self: center;
  margin-top: 50px;
  width: 100%;
  max-width: 1120px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-33 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-34 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-34 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-6 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-6 {
    width: 100%;
  }
}

.div-35 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-35 {
    margin-top: 21px;
  }
}

.div-36 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.6407766990291263;
  width: 100%;
}

.img-15 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-37 {
  position: relative;
  /* backdrop-filter: blur(5px); */
  /* background-color: rgba(31, 31, 31, 0.3); */
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
}

.div-38 {
  display: flex;
  width: 194px;
  max-width: 100%;
  gap: 16px;
  margin: 129px 0 93px;
}

@media (max-width: 991px) {
  .div-38 {
    justify-content: center;
    margin: 40px 0;
  }
}

.img-16 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
}

.img-17 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
}

.img-18 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex: 1;
}

.div-39 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-40 {
  align-self: center;
  display: flex;
  margin-top: 15px;
  width: 78px;
  max-width: 100%;
  gap: 5px;
}

.div-41 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-42 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-42 {
    white-space: initial;
  }
}

.column-7 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 51%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-7 {
    width: 100%;
  }
}

.div-43 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-43 {
    max-width: 100%;
    margin-top: 21px;
  }
}

@media (max-width: 991px) {
  .div-44 {
    max-width: 100%;
  }
}

.div-45 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-45 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.div-46 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-46 {
    margin-top: 22px;
  }
}

.img-19 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-47 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-8 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-8 {
    width: 100%;
  }
}

.div-48 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-48 {
    margin-top: 22px;
  }
}

.img-20 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-49 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-50 {
  align-self: center;
  display: flex;
  margin-top: 15px;
  width: 364px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
}

.div-51 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-52 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-53 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-53 {
    white-space: initial;
  }
}

.div-54 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-55 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-56 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-56 {
    white-space: initial;
  }
}

.column-9 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-9 {
    width: 100%;
  }
}

.div-57 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-57 {
    margin-top: 21px;
  }
}

.img-21 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-58 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-59 {
  align-self: center;
  display: flex;
  margin-top: 15px;
  width: 78px;
  max-width: 100%;
  gap: 5px;
}

.div-60 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-61 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-61 {
    white-space: initial;
  }
}

.div-62 {
  align-self: center;
  display: flex;
  margin-top: 13px;
  width: 100%;
  max-width: 1092px;
  justify-content: space-between;
  gap: 20px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-62 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-63 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-63 {
    justify-content: center;
  }
}

.div-64 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-64 {
    white-space: initial;
  }
}

.div-65 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-65 {
    white-space: initial;
  }
}

.div-66 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-66 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-67 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-67 {
    white-space: initial;
  }
}

.div-68 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-68 {
    white-space: initial;
  }
}

.div-69 {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .div-69 {
    justify-content: center;
  }
}

.div-70 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-70 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-71 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-71 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-72 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  align-items: start;
  padding: 13px 16px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-72 {
    white-space: initial;
  }
}

.div-73 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 10px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-73 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-74 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-74 {
    white-space: initial;
  }
}

.div-75 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-75 {
    justify-content: center;
  }
}

.div-76 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-76 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-77 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 12px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-77 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-78 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-78 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-79 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-79 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-80 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-80 {
    white-space: initial;
  }
}

.div-81 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-81 {
    justify-content: center;
  }
}

.div-82 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-82 {
    white-space: initial;
  }
}

.div-83 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-83 {
    white-space: initial;
  }
}

.div-84 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-84 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-85 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-85 {
    white-space: initial;
  }
}

.div-86 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-86 {
    white-space: initial;
  }
}

.div-87 {
  align-self: center;
  z-index: 1;
  display: flex;
  margin-top: 48px;
  width: 100%;
  max-width: 1120px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-87 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-88 {
  align-self: start;
  z-index: 1;
  display: flex;
  width: 264px;
  max-width: 100%;
  flex-direction: column;
  padding: 0 20px;
}

.img-22 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  margin-right: -20px;
}

.div-89 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-90 {
  align-self: center;
  display: flex;
  margin-top: 15px;
  width: 78px;
  max-width: 100%;
  gap: 5px;
}

.div-91 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-92 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-92 {
    white-space: initial;
  }
}

.div-93 {
  align-self: end;
  margin-top: -481px;
  width: 835px;
  max-width: 100%;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-93 {
    margin-top: -200px;
  }
}

.div-94 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-94 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-10 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-10 {
    width: 100%;
  }
}

.div-95 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-95 {
    margin-top: 21px;
  }
}

.img-23 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-96 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-11 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-11 {
    width: 100%;
  }
}

.div-97 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-97 {
    margin-top: 21px;
  }
}

.img-24 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-98 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-12 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-12 {
    width: 100%;
  }
}

.div-99 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-99 {
    margin-top: 21px;
  }
}

.div-100 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.6407766990291263;
  width: 100%;
}

.img-25 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-101 {
  position: relative;
  backdrop-filter: blur(5px);
  background-color: rgba(31, 31, 31, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
}

.img-26 {
  aspect-ratio: 3.59;
  object-fit: contain;
  object-position: center;
  width: 194px;
  overflow: hidden;
  max-width: 100%;
  margin: 129px 0 93px;
}

@media (max-width: 991px) {
  .img-26 {
    margin: 40px 0;
  }
}

.div-102 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-103 {
  align-self: center;
  display: flex;
  width: 79px;
  max-width: 100%;
  gap: 5px;
  margin: 15px 0 0 -142px;
  padding: 0 20px;
}

.div-104 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-105 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-105 {
    white-space: initial;
  }
}

.div-106 {
  align-self: end;
  z-index: 1;
  display: flex;
  width: 521px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: -13px 14px 0 0;
}

@media (max-width: 991px) {
  .div-106 {
    margin-right: 10px;
    flex-wrap: wrap;
  }
}

.div-107 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.div-108 {
  display: flex;
  width: 79px;
  max-width: 100%;
  gap: 5px;
  padding: 0 20px;
}

.div-109 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-110 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-110 {
    white-space: initial;
  }
}

.div-111 {
  align-self: stretch;
  display: flex;
  margin-top: 13px;
  justify-content: space-between;
  gap: 14px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-111 {
    justify-content: center;
  }
}

.div-112 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-112 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-113 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 12px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-113 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-114 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-114 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-115 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-115 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-116 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-116 {
    white-space: initial;
  }
}

.div-117 {
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.div-118 {
  display: flex;
  width: 78px;
  max-width: 100%;
  gap: 5px;
  padding: 0 20px;
}

.div-119 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-120 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: start;
  white-space: nowrap;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-120 {
    white-space: initial;
  }
}

.div-121 {
  align-self: stretch;
  display: flex;
  margin-top: 13px;
  justify-content: space-between;
  gap: 14px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-121 {
    justify-content: center;
  }
}

.div-122 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-122 {
    white-space: initial;
  }
}

.div-123 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-123 {
    white-space: initial;
  }
}

.div-124 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-124 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-125 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-125 {
    white-space: initial;
  }
}

.div-126 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-126 {
    white-space: initial;
  }
}

.div-127 {
  align-self: start;
  display: flex;
  width: 521px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
  margin: -36px 0 0 137px;
}

@media (max-width: 991px) {
  .div-127 {
    flex-wrap: wrap;
  }
}

.div-128 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-128 {
    justify-content: center;
  }
}

.div-129 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-129 {
    white-space: initial;
  }
}

.div-130 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-130 {
    white-space: initial;
  }
}

.div-131 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-131 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-132 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-132 {
    white-space: initial;
  }
}

.div-133 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-133 {
    white-space: initial;
  }
}

.div-134 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-134 {
    justify-content: center;
  }
}

.div-135 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-135 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-136 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-136 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-137 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  align-items: start;
  padding: 13px 16px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-137 {
    white-space: initial;
  }
}

.div-138 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 10px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-138 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-139 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-139 {
    white-space: initial;
  }
}

.div-140 {
  align-self: stretch;
  display: flex;
  margin-top: 48px;
  width: 100%;
  flex-direction: column;
  padding: 0 20px;
}

@media (max-width: 991px) {
  .div-140 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-141 {
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  align-self: center;
  width: 170px;
  max-width: 100%;
  align-items: center;
  padding: 19px 20px;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-141 {
    white-space: initial;
  }
}

.div-142 {
  align-self: center;
  display: flex;
  margin-top: 79px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-142 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
}

.div-143 {
  background-color: #ffc7d1;
  align-self: center;
  width: 380px;
  height: 1px;
  margin: auto 0;
}

.div-144 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  flex-grow: 1;
  flex-basis: auto;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
  font-size: 30px;
}

.div-145 {
  background-color: #ffc7d1;
  align-self: center;
  width: 380px;
  height: 1px;
  margin: auto 0;
}

.div-146 {
  align-self: center;
  margin-top: 56px;
  width: 100%;
  max-width: 1120px;
}

@media (max-width: 991px) {
  .div-146 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-147 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-147 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-13 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-13 {
    width: 100%;
  }
}

.div-148 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-148 {
    margin-top: 21px;
  }
}

.img-27 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-149 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-150 {
  align-self: center;
  display: flex;
  margin-top: 16px;
  width: 78px;
  max-width: 100%;
  gap: 5px;
}

.div-151 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-152 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-152 {
    white-space: initial;
  }
}

.column-14 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 76%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-14 {
    width: 100%;
  }
}

.div-153 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-153 {
    max-width: 100%;
    margin-top: 21px;
  }
}

@media (max-width: 991px) {
  .div-154 {
    max-width: 100%;
  }
}

.div-155 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-155 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-15 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-15 {
    width: 100%;
  }
}

.div-156 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-156 {
    margin-top: 21px;
  }
}

.img-28 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-157 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-16 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-16 {
    width: 100%;
  }
}

.div-158 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-158 {
    margin-top: 21px;
  }
}

.img-29 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-159 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-17 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-17 {
    width: 100%;
  }
}

.div-160 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-160 {
    margin-top: 21px;
  }
}

.img-30 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-161 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-162 {
  align-self: center;
  display: flex;
  margin-top: 16px;
  width: 649px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-162 {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-163 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-164 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-165 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-165 {
    white-space: initial;
  }
}

.div-166 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-167 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-168 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-168 {
    white-space: initial;
  }
}

.div-169 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-170 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-171 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-171 {
    white-space: initial;
  }
}

.div-172 {
  align-self: center;
  display: flex;
  margin-top: 12px;
  width: 100%;
  max-width: 1092px;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-172 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-173 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-173 {
    justify-content: center;
  }
}

.div-174 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-174 {
    white-space: initial;
  }
}

.div-175 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-175 {
    white-space: initial;
  }
}

.div-176 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-176 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-177 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-177 {
    white-space: initial;
  }
}

.div-178 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-178 {
    white-space: initial;
  }
}

.div-179 {
  display: flex;
  justify-content: space-between;
}

@media (max-width: 991px) {
  .div-179 {
    justify-content: center;
  }
}

.div-180 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-180 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-181 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-181 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-182 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  align-items: start;
  padding: 13px 16px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-182 {
    white-space: initial;
  }
}

.div-183 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 10px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-183 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-184 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-184 {
    white-space: initial;
  }
}

.div-185 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-185 {
    justify-content: center;
  }
}

.div-186 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-186 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-187 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 12px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-187 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-188 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-188 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-189 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-189 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-190 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-190 {
    white-space: initial;
  }
}

.div-191 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-191 {
    justify-content: center;
  }
}

.div-192 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-192 {
    white-space: initial;
  }
}

.div-193 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-193 {
    white-space: initial;
  }
}

.div-194 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-194 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-195 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-195 {
    white-space: initial;
  }
}

.div-196 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-196 {
    white-space: initial;
  }
}

.div-197 {
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  align-self: center;
  margin-top: 48px;
  width: 170px;
  max-width: 100%;
  align-items: center;
  padding: 19px 20px;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-197 {
    white-space: initial;
    margin-top: 40px;
  }
}

.img-31 {
  aspect-ratio: 2.74;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
  margin: 68px -20px 0 0;
}

@media (max-width: 991px) {
  .img-31 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-198 {
  align-self: center;
  display: flex;
  margin-top: 79px;
  width: 100%;
  max-width: 1120px;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-198 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
}

.div-199 {
  background-color: #ffc7d1;
  align-self: center;
  width: 380px;
  height: 1px;
  margin: auto 0;
}

.div-200 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  width: 244px;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.div-201 {
  background-color: #ffc7d1;
  align-self: center;
  width: 380px;
  height: 1px;
  margin: auto 0;
}

.div-202 {
  align-self: center;
  margin-top: 56px;
  width: 100%;
  max-width: 1120px;
}

@media (max-width: 991px) {
  .div-202 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-203 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-203 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-18 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-18 {
    width: 100%;
  }
}

.div-204 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-204 {
    margin-top: 21px;
  }
}

.img-32 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-205 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-206 {
  align-self: center;
  display: flex;
  margin-top: 16px;
  width: 78px;
  max-width: 100%;
  gap: 5px;
}

.div-207 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-208 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-208 {
    white-space: initial;
  }
}

.column-19 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 76%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-19 {
    width: 100%;
  }
}

.div-209 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-209 {
    max-width: 100%;
    margin-top: 21px;
  }
}
@media (max-width: 991px) {
  .div-210 {
    max-width: 100%;
  }
}

.div-211 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-211 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-20 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-20 {
    width: 100%;
  }
}

.div-212 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-212 {
    margin-top: 21px;
  }
}

.img-33 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-213 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-21 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-21 {
    width: 100%;
  }
}

.div-214 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-214 {
    margin-top: 21px;
  }
}

.img-34 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-215 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-22 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-22 {
    width: 100%;
  }
}

.div-216 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-216 {
    margin-top: 21px;
  }
}

.img-35 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-217 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-218 {
  align-self: center;
  display: flex;
  margin-top: 16px;
  width: 649px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-218 {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-219 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-220 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-221 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-221 {
    white-space: initial;
  }
}

.div-222 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-223 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-224 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-224 {
    white-space: initial;
  }
}

.div-225 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-226 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-227 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-227 {
    white-space: initial;
  }
}

.div-228 {
  align-self: center;
  display: flex;
  margin-top: 12px;
  width: 100%;
  max-width: 1092px;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-228 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-229 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-229 {
    justify-content: center;
  }
}

.div-230 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-230 {
    white-space: initial;
  }
}

.div-231 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-231 {
    white-space: initial;
  }
}

.div-232 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-232 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-233 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-233 {
    white-space: initial;
  }
}

.div-234 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-234 {
    white-space: initial;
  }
}

.div-235 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-235 {
    justify-content: center;
  }
}

.div-236 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-236 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-237 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-237 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-238 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  align-items: start;
  padding: 13px 16px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-238 {
    white-space: initial;
  }
}

.div-239 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 10px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-239 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-240 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-240 {
    white-space: initial;
  }
}

.div-241 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-241 {
    justify-content: center;
  }
}

.div-242 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-242 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-243 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 12px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-243 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-244 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-244 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-245 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-245 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-246 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-246 {
    white-space: initial;
  }
}

.div-247 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-247 {
    justify-content: center;
  }
}

.div-248 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-248 {
    white-space: initial;
  }
}

.div-249 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-249 {
    white-space: initial;
  }
}

.div-250 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-250 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-251 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-251 {
    white-space: initial;
  }
}

.div-252 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-252 {
    white-space: initial;
  }
}

.div-253 {
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;

  align-self: center;
  margin-top: 48px;
  width: 170px;
  max-width: 100%;
  align-items: center;
  padding: 19px 20px;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-253 {
    white-space: initial;
    margin-top: 40px;
  }
}

.div-254 {
  align-self: center;
  display: flex;
  margin-top: 79px;
  width: 100%;
  max-width: 1120px;
  gap: 7px;
}

@media (max-width: 991px) {
  .div-254 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
}

.div-255 {
  background-color: #ffc7d1;
  height: 1px;
  flex: 1;
  margin: auto 0;
}

.div-256 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  flex-grow: 1;
  flex-basis: auto;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

.div-257 {
  background-color: #ffc7d1;
  height: 1px;
  flex: 1;
  margin: auto 0;
}

.div-258 {
  align-self: center;
  margin-top: 50px;
  width: 100%;
  max-width: 1120px;
}

@media (max-width: 991px) {
  .div-258 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-259 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-259 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-23 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 24%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-23 {
    width: 100%;
  }
}

.div-260 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-260 {
    margin-top: 21px;
  }
}

.img-36 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-261 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-262 {
  align-self: center;
  display: flex;
  margin-top: 16px;
  width: 78px;
  max-width: 100%;
  gap: 5px;
}

.div-263 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-264 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-264 {
    white-space: initial;
  }
}

.column-24 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 76%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-24 {
    width: 100%;
  }
}

.div-265 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-265 {
    max-width: 100%;
    margin-top: 21px;
  }
}

@media (max-width: 991px) {
  .div-266 {
    max-width: 100%;
  }
}

.div-267 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-267 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-25 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-25 {
    width: 100%;
  }
}

.div-268 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-268 {
    margin-top: 21px;
  }
}

.img-37 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-269 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-26 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-26 {
    width: 100%;
  }
}

.div-270 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-270 {
    margin-top: 21px;
  }
}

.img-38 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-271 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.column-27 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-27 {
    width: 100%;
  }
}

.div-272 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-272 {
    margin-top: 21px;
  }
}

.img-39 {
  aspect-ratio: 0.64;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
}

.div-273 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  margin-top: 14px;
  font: 400 14px/17px Montserrat, sans-serif;
}

.div-274 {
  align-self: center;
  display: flex;
  margin-top: 16px;
  width: 649px;
  max-width: 100%;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-274 {
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-275 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-276 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-277 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-277 {
    white-space: initial;
  }
}

.div-278 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-279 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-280 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-280 {
    white-space: initial;
  }
}

.div-281 {
  display: flex;
  justify-content: space-between;
  gap: 5px;
}

.div-282 {
  color: #1f1f1f;
  font: 700 18px/18px Montserrat, sans-serif;
}

.div-283 {
  color: #f00;
  text-decoration-line: strikethrough;
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 400 10px/18px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-283 {
    white-space: initial;
  }
}

.div-284 {
  align-self: center;
  display: flex;
  margin-top: 12px;
  width: 100%;
  max-width: 1092px;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-284 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-285 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-285 {
    justify-content: center;
  }
}

.div-286 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-286 {
    white-space: initial;
  }
}

.div-287 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-287 {
    white-space: initial;
  }
}

.div-288 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-288 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-289 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-289 {
    white-space: initial;
  }
}

.div-290 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-290 {
    white-space: initial;
  }
}

.div-291 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-291 {
    justify-content: center;
  }
}

.div-292 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-292 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-293 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-293 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-294 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  align-items: start;
  padding: 13px 16px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-294 {
    white-space: initial;
  }
}

.div-295 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 10px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-295 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-296 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-296 {
    white-space: initial;
  }
}

.div-297 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-297 {
    justify-content: center;
  }
}

.div-298 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-298 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-299 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 12px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-299 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-300 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-300 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-301 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-301 {
    white-space: initial;
    padding-right: 1px;
  }
}

.div-302 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-302 {
    white-space: initial;
  }
}

.div-303 {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-303 {
    justify-content: center;
  }
}

.div-304 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 14px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-304 {
    white-space: initial;
  }
}

.div-305 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-305 {
    white-space: initial;
  }
}

.div-306 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 15px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-306 {
    white-space: initial;
    padding-right: -1px;
  }
}

.div-307 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 9px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-307 {
    white-space: initial;
  }
}

.div-308 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  aspect-ratio: 1;
  padding: 13px 5px;
  font: 500 14px/17px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-308 {
    white-space: initial;
  }
}

.div-309 {
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  align-self: center;
  margin-top: 48px;
  width: 170px;
  max-width: 100%;
  align-items: center;
  padding: 19px 20px;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-309 {
    white-space: initial;
    margin-top: 40px;
  }
}

.div-310 {
  align-self: center;
  margin-top: 68px;
  width: 100%;
  max-width: 1120px;
}

@media (max-width: 991px) {
  .div-310 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-311 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-311 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-28 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-28 {
    width: 100%;
  }
}

.div-312 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.8333333333333334;
  flex-grow: 1;
  padding-top: 50px;
}

@media (max-width: 991px) {
  .div-312 {
    margin-top: 20px;
  }
}

.img-40 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-313 {
  position: relative;
  color: #fff;
  white-space: nowrap;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.4) -8.95%,
    rgba(255, 255, 255, 0.01) 114%
  );
  backdrop-filter: blur(32px);
  margin-top: 314px;
  align-items: center;
  padding: 15px 62px;
  font: 600 20px/27px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media only screen and (max-width: 991px) {
  .div-313 {
    white-space: initial;

    margin-top: 240px;
    padding: 20px 94px;
  }
}

/* Media query for medium devices (tablets) */
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .div-313 {
    white-space: initial;
    margin-top: 669px;
    padding: 20px 215px;
  }
}

.column-29 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-29 {
    width: 100%;
  }
}

.div-314 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.8333333333333334;
  flex-grow: 1;
  padding-top: 50px;
}

@media (max-width: 991px) {
  .div-314 {
    margin-top: 20px;
  }
}

.img-41 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-315 {
  position: relative;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.4) -8.95%,
    rgba(255, 255, 255, 0.01) 114%
  );
  backdrop-filter: blur(32px);
  margin-top: 314px;
  align-items: center;
  padding: 15px 20px;
  font: 600 20px/27px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-315 {
    white-space: initial;
    margin-top: 261px;
    padding: 25px 96px;
    font-size: 16px;
  }
}

.column-30 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-30 {
    width: 100%;
  }
}

.div-316 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.8333333333333334;
  flex-grow: 1;
  padding-top: 50px;
}

@media (max-width: 991px) {
  .div-316 {
    margin-top: 20px;
  }
}

.img-42 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-317 {
  position: relative;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.4) -8.95%,
    rgba(255, 255, 255, 0.01) 114%
  );
  backdrop-filter: blur(32px);
  margin-top: 314px;
  align-items: center;
  padding: 15px 20px;
  font: 600 20px/27px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-317 {
    white-space: initial;
    margin-top: 265px;
    padding: 25px 96px;
    font-size: 12px;
  }
}

.div-318 {
  align-self: center;
  margin-top: 20px;
  width: 100%;
  max-width: 1120px;
}

@media (max-width: 991px) {
  .div-318 {
    max-width: 100%;
  }
}

.div-319 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-319 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-31 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-31 {
    width: 100%;
  }
}

.div-320 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.8333333333333334;
  flex-grow: 1;
  padding-top: 50px;
  font-size: 50px;
}

@media (max-width: 991px) {
  .div-320 {
    margin-top: 20px;
  }
}

.img-43 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-321 {
  position: relative;
  color: #fff;
  white-space: nowrap;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.4) -8.95%,
    rgba(255, 255, 255, 0.01) 114%
  );
  backdrop-filter: blur(32px);
  margin-top: 314px;
  align-items: center;
  padding: 15px 85px;
  font: 600 20px/27px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-321 {
    white-space: initial;
    margin-top: 265px;
    padding: 25px 96px;
    font-size: 15px;
  }
}

.column-32 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-32 {
    width: 100%;
  }
}

.div-322 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.8333333333333334;
  flex-grow: 1;
  padding-top: 50px;
}

@media (max-width: 991px) {
  .div-322 {
    margin-top: 20px;
  }
}

.img-44 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-323 {
  position: relative;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.4) -8.95%,
    rgba(255, 255, 255, 0.01) 114%
  );
  backdrop-filter: blur(32px);
  margin-top: 314px;
  align-items: center;
  padding: 15px 20px;
  font: 600 20px/27px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-323 {
    white-space: initial;
    margin-top: 265px;
    padding: 25px 96px;
    font-size: 13px;
  }
}

.column-33 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 33%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-33 {
    width: 100%;
  }
}

.div-324 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  aspect-ratio: 0.8333333333333334;
  flex-grow: 1;
  padding-top: 50px;
}

@media (max-width: 991px) {
  .div-324 {
    margin-top: 20px;
  }
}

.img-45 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-325 {
  position: relative;
  color: #fff;
  text-align: center;
  white-space: nowrap;
  background: linear-gradient(
    111deg,
    rgba(255, 255, 255, 0.4) -8.95%,
    rgba(255, 255, 255, 0.01) 114%
  );
  backdrop-filter: blur(32px);
  margin-top: 314px;
  align-items: center;
  padding: 15px 70px;
  font: 600 20px/27px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-325 {
    white-space: initial;
    margin-top: 265px;
    padding: 25px 96px;
    font-size: 12px;
  }
}

.img-46 {
  aspect-ratio: 2.74;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  align-self: stretch;
  margin: 68px -20px 0 0;
}

@media (max-width: 991px) {
  .img-46 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-326 {
  align-self: center;
  z-index: 1;
  display: flex;
  /* margin-top: 68px; */
  width: 100%;
  max-width: 1243px;
  align-items: end;
  justify-content: space-between;
  gap: 14px;
}

@media (max-width: 991px) {
  .div-326 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
  }
}

.div-327 {
  background-color: #cccea7;
  align-self: start;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
  padding: 35px 10px;
}

@media (max-width: 991px) {
  .div-327 {
    max-width: 100%;
    margin-top: 10px;
  }
}

.div-328 {
  display: flex;
  width: 322px;
  max-width: 100%;
  flex-direction: column;
  margin: 5px 0 4px;
}

.img-47 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 172px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
}

.div-329 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: center;
  margin-top: 40px;
  white-space: nowrap;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-329 {
    margin-top: 40px;
    white-space: initial;
  }
}

.div-330 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: stretch;
  font-size: 10px;
  white-space: nowrap;
  font: 600 40px/112px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-330 {
    font-size: 40px;
    line-height: 59px;
    margin-top: 40px;
    white-space: initial;
  }
}

.div-331 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: center;

  white-space: nowrap;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-331 {
    margin-top: 40px;
    white-space: initial;
  }
}

.div-332 {
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1px solid #fff;
  align-self: center;
  margin-top: 31px;
  width: 170px;
  max-width: 100%;
  align-items: center;
  padding: 18px 20px;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-332 {
    white-space: initial;
  }
}

.div-333 {
  background-color: #d6bebe;
  align-self: start;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
  padding: 35px 10px;
}

@media (max-width: 991px) {
  .div-333 {
    max-width: 100%;
    margin-top: 10px;
  }
}

.div-334 {
  display: flex;
  width: 314px;
  max-width: 100%;
  flex-direction: column;
  margin: 5px 0 4px;
}

.img-48 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 172px;
  overflow: hidden;
  align-self: center;
  max-width: 100%;
}

.div-335 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: center;
  margin-top: 59px;
  white-space: nowrap;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-335 {
    margin-top: 40px;
    white-space: initial;
  }
}

.div-336 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: stretch;
  margin-top: 46px;
  white-space: nowrap;
  font: 600 84px/112px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-336 {
    font-size: 40px;
    line-height: 59px;
    margin-top: 40px;
    white-space: initial;
  }
}

.div-337 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: center;
  margin-top: 41px;
  white-space: nowrap;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-337 {
    margin-top: 40px;
    white-space: initial;
  }
}

.div-338 {
  color: #fff;
  text-transform: uppercase;
  white-space: nowrap;
  border: 1px solid #fff;
  align-self: center;
  margin-top: 31px;
  width: 170px;
  max-width: 100%;
  align-items: center;
  padding: 18px 20px;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-338 {
    white-space: initial;
  }
}

.div-339 {
  border-radius: 50%;
  display: flex;
  width: 109px;
  height: 50px;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-339 {
    margin-top: 40px;
  }
}

.div-340 {
  background-color: #f5f4f2;
  align-self: stretch;
  display: flex;
  margin-right: -20px;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  position: relative;
}

@media (max-width: 991px) {
  .div-340 {
    max-width: 100%;
  }
}

.div-341 {
  display: flex;
  width: 100%;
  max-width: 933px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

@media (max-width: 991px) {
  .div-341 {
    max-width: 100%;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.div-342 {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-49 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 88px;
  overflow: hidden;
  max-width: 100%;
}

.div-343 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: stretch;
  margin-top: 30px;
  white-space: nowrap;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-343 {
    white-space: initial;
  }
}

.div-344 {
  background-color: #ffc7d1;
  width: 1px;
  height: 112px;
  margin: auto 0;
}

.div-345 {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-50 {
  aspect-ratio: 0.73;
  object-fit: contain;
  object-position: center;
  width: 64px;
  overflow: hidden;
  max-width: 100%;
}

.div-346 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: stretch;
  margin-top: 29px;
  white-space: nowrap;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-346 {
    white-space: initial;
  }
}

.div-347 {
  background-color: #ffc7d1;
  width: 1px;
  height: 112px;
  margin: auto 0;
}

.div-348 {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-51 {
  aspect-ratio: 1.28;
  object-fit: contain;
  object-position: center;
  width: 113px;
  overflow: hidden;
}

.div-349 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: stretch;
  margin-top: 29px;
  white-space: nowrap;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-349 {
    white-space: initial;
  }
}

.div-350 {
  background-color: #ffc7d1;
  width: 1px;
  height: 112px;
  margin: auto 0;
}

.div-351 {
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  align-items: center;
}

.img-52 {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 88px;
  overflow: hidden;
  max-width: 100%;
}

.div-352 {
  color: var(--Primary-Color_1, #1c1c1c);
  text-align: center;
  align-self: stretch;
  margin-top: 29px;
  white-space: nowrap;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-352 {
    white-space: initial;
  }
}

.div-353 {
  align-self: stretch;
  z-index: 1;
  display: flex;
  width: 100%;
  padding-right: 80px;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  margin: -101px -20px 0 0;
}

@media (max-width: 991px) {
  .div-353 {
    max-width: 100%;
    flex-wrap: wrap;
    padding-right: 20px;
  }
}

.div-354 {
  border-radius: 50%;
  display: flex;
  width: 101px;
  height: 202px;
  flex-direction: column;
}

.div-355 {
  background: linear-gradient(97deg, #ab001e -6.23%, #770015 105.09%);
  align-self: end;
  display: flex;
  margin-top: 169px;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-355 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-356 {
  flex-direction: column;
  overflow: hidden;
  position: relative;
  display: flex;
  min-height: 312px;
  width: 100%;
  align-items: center;
  padding: 50px 20px;
}

@media (max-width: 991px) {
  .div-356 {
    max-width: 100%;
  }
}

.img-53 {
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
}

.div-357 {
  position: relative;
  display: flex;
  width: 690px;
  max-width: 100%;
  flex-direction: column;
  margin: 22px 0 10px;
}

.div-358 {
  color: #fff;
  text-align: center;
  font: 600 36px/48px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-358 {
    max-width: 100%;
  }
}

.div-359 {
  background-color: rgba(255, 255, 255, 0.32);
  align-self: center;
  display: flex;
  margin-top: 36px;
  width: 645px;
  max-width: 100%;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  padding: 25px 23px 25px 28px;
}

@media (max-width: 991px) {
  .div-359 {
    flex-wrap: wrap;
    padding: 0 20px;
  }
}

.div-360 {
  color: #fff;
  font: 500 16px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-360 {
    flex-wrap: wrap;

    width: 217px;
    margin-top: 10px;
  }
}
.div-361 {
  color: #770015;
  text-align: center;
  align-self: stretch;
  white-space: nowrap;
  font: 600 22px/29px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-361 {
    white-space: initial;
    margin-left: 47px;
  }
}

.div-362 {
  background-color: #e0dfde;
  align-self: stretch;
  min-height: 1px;
  width: 100%;
  margin: 68px -20px 0 0;
}

@media (max-width: 991px) {
  .div-362 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-363 {
  align-self: center;
  margin-top: 74px;
  width: 100%;
  max-width: 1175px;
}

@media (max-width: 991px) {
  .div-363 {
    max-width: 100%;
    margin-top: 40px;
  }
}

.div-364 {
  gap: 20px;
  display: flex;
}

@media (max-width: 991px) {
  .div-364 {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
}

.column-34 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 34%;
  margin-left: 0px;
}

@media (max-width: 991px) {
  .column-34 {
    width: 100%;
  }
}

.div-365 {
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-365 {
    margin-top: 40px;
  }
}

.div-366 {
  color: var(--Primary-Color_1, #1c1c1c);
  font: 500 14px/28px Montserrat, sans-serif;
}

.img-54 {
  aspect-ratio: 7.76;
  object-fit: contain;
  object-position: center;
  width: 357px;
  overflow: hidden;
  align-self: center;
  margin-top: 25px;
}

.column-35 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 16%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-35 {
    width: 100%;
  }
}

.div-367 {
  display: flex;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-367 {
    margin-top: 40px;
  }
}

.div-368 {
  color: #770015;
  white-space: nowrap;
  font: 600 18px/24px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-368 {
    white-space: initial;
  }
}

.div-369 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 25px;
  font: 500 14px/34px Montserrat, sans-serif;
}

.column-36 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 19%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-36 {
    width: 100%;
  }
}

.div-370 {
  display: flex;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-370 {
    margin-top: 40px;
  }
}

.div-371 {
  color: #770015;
  white-space: nowrap;
  font: 600 18px/24px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-371 {
    white-space: initial;
  }
}

.div-372 {
  color: var(--Primary-Color_1, #1c1c1c);
  margin-top: 25px;
  font: 500 14px/34px Montserrat, sans-serif;
}

.column-37 {
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 31%;
  margin-left: 20px;
}

@media (max-width: 991px) {
  .column-37 {
    width: 100%;
  }
}

.div-373 {
  display: flex;
  flex-direction: column;
}

@media (max-width: 991px) {
  .div-373 {
    margin-top: 40px;
  }
}

.div-374 {
  color: #770015;
  white-space: nowrap;
  font: 600 18px/24px Playfair Display, -apple-system, Roboto, Helvetica,
    sans-serif;
}

@media (max-width: 991px) {
  .div-374 {
    white-space: initial;
  }
}

.div-375 {
  display: flex;
  margin-top: 42px;
  align-items: start;
  justify-content: space-between;
  gap: 10px;
}

@media (max-width: 991px) {
  .div-375 {
    margin-top: 40px;
  }
}

.div-376 {
  color: var(--Primary-Color_1, #1c1c1c);
  align-self: stretch;
  flex-grow: 1;
  flex-basis: auto;
  font: 500 14px/28px Montserrat, sans-serif;
}

.div-377 {
  display: flex;
  margin-top: 26px;
  justify-content: space-between;
  gap: 10px;
}

.div-378 {
  color: var(--Primary-Color_1, #1c1c1c);
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 500 14px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-378 {
    white-space: initial;
  }
}

.div-379 {
  display: flex;
  margin-top: 16px;
  margin-bottom: 10px;
  justify-content: space-between;
  gap: 10px;
}

.div-380 {
  color: var(--Primary-Color_1, #1c1c1c);
  align-self: center;
  white-space: nowrap;
  margin: auto 0;
  font: 500 14px/20px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-380 {
    white-space: initial;
  }
}

.div-381 {
  color: #fff;
  white-space: nowrap;
  background-color: #20050a;
  align-self: stretch;
  width: 100%;
  align-items: center;
  margin: 0;
  padding: 27px 20px;
  font: 500 14px/34px Montserrat, sans-serif;
}

@media (max-width: 991px) {
  .div-381 {
    white-space: initial;
    max-width: 100%;
    padding: 10px 0px 0px 0px;
  }
}

.ellipse-top-right {
  position: absolute;
  background-color: #770015;
  border-radius: 50% 0% 0% 50%;
  width: 140px;
  height: 218px;
  top: -103px;
  right: 0;
}
.ellipse-top-left {
  position: absolute;
  top: 70px;
  left: 0;
  background-color: #770015;
  border-radius: 0 50% 50% 0;
  width: 140px;
  height: 218px;
}
@media (max-width: 991px) {
  .ellipse-top-left {
    top: 367px;
    left: 0;
    width: 100px;
    height: 155px;
  }
  .ellipse-top-right {
    top: -114px;
    right: 0;
    width: 100px;
    height: 155px;
  }
  .icons-container {
    position: absolute;
    bottom: 0px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 10px;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  }

  .icon {
    color: white;
    cursor: pointer;
  }

  .image-container:hover .icons-container {
    transform: translateY(0);
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 1s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
