import { FaFacebook, FaInstagram, FaMailBulk, FaPhone, FaTiktok } from "react-icons/fa"
import { FaMessage } from "react-icons/fa6"


const Footer = () => {
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-orange-400 mb-2">CONTACT US</h3>
          <h2 className="text-2xl font-bold mb-8">How To Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <FaPhone className="text-orange-400" />
              <span>+254 778 136 430</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaMailBulk className="text-orange-400" />
              <span>wakawears@gmail.com</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaTiktok className="text-orange-400" />
              <span>www.tiktok.com/waka_wears</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <FaInstagram className="text-orange-400" />
              <span>www.instagram.com/waka_wears</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Footer
